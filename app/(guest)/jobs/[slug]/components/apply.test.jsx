import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useUser } from '@/contexts/user'
import { ToastProvider } from '@/contexts/toast'
import Apply from './apply'

function renderApply(props) {
    return render(
        <ToastProvider>
            <Apply {...props} />
        </ToastProvider>,
    )
}

// The real UploadFile component performs a real network upload on file
// select. We only care here about what value Apply passes it and whether
// Apply reacts correctly when a new value comes back, so it's stubbed out.
vi.mock(
    '../../../../recruiter/hire/edit/[uuid]/step-three/components/upload-file',
    () => ({
        __esModule: true,
        default: ({ value, setValue, fileName, onFileNameChange }) => (
            <div>
                <span>{value ? fileName || 'File Uploaded' : 'Upload Resume'}</span>
                <button
                    type="button"
                    onClick={() => {
                        onFileNameChange?.('manually-uploaded.pdf')
                        setValue('https://cdn.example.com/manually-uploaded.pdf')
                    }}>
                    Simulate manual upload
                </button>
            </div>
        ),
    }),
)

// Tiptap is a rich-text editor with DOM requirements jsdom doesn't fully
// support; stubbed out since these tests only care about whether the cover
// letter step blocks submission, not the editor's own behavior.
vi.mock('../../../../job-seeker/profile/edit/components/tiptap', () => ({
    __esModule: true,
    default: () => <div>Cover letter editor</div>,
}))

const jobRequiringResume = {
    easy_apply: { resume: true, cover_letter: false },
}

const jobRequestingCoverLetter = {
    easy_apply: { resume: false, cover_letter: true },
}

const baseUser = {
    email: 'jane@example.com',
    phone_number: '12345678901',
    user_profile: { first_name: 'Jane', last_name: 'Doe' },
}

async function advanceToResumeStep() {
    fireEvent.click(await screen.findByRole('button', { name: /next/i }))
}

describe('Apply — resume auto-fill from profile', () => {
    beforeEach(() => {
        useUser.setState({ user: null, isUserLoading: false, hasResolvedUser: false })
    })

    it('prefills the resume field with the most recently saved resume', async () => {
        useUser.setState({
            user: {
                ...baseUser,
                user_job_profile: {
                    resume_cv: [
                        { id: 1, name: 'old.pdf', url: 'https://cdn.example.com/old.pdf' },
                        { id: 2, name: 'latest.pdf', url: 'https://cdn.example.com/latest.pdf' },
                    ],
                },
            },
        })

        renderApply({ open: true, close: () => {}, job: jobRequiringResume, easyApply: {} })
        await advanceToResumeStep()

        expect(await screen.findByText('latest.pdf')).toBeInTheDocument()
        expect(
            screen.getByText(/using the most recent resume from your profile/i),
        ).toBeInTheDocument()
    })

    it('falls back to the empty upload prompt when the user has no saved resume', async () => {
        useUser.setState({
            user: { ...baseUser, user_job_profile: { resume_cv: [] } },
        })

        renderApply({ open: true, close: () => {}, job: jobRequiringResume, easyApply: {} })
        await advanceToResumeStep()

        expect(await screen.findByText('Upload Resume')).toBeInTheDocument()
        expect(
            screen.queryByText(/using the most recent resume from your profile/i),
        ).not.toBeInTheDocument()
    })

    it('clears the "from profile" caption once the user manually uploads a different file', async () => {
        useUser.setState({
            user: {
                ...baseUser,
                user_job_profile: {
                    resume_cv: [
                        { id: 1, name: 'latest.pdf', url: 'https://cdn.example.com/latest.pdf' },
                    ],
                },
            },
        })

        renderApply({ open: true, close: () => {}, job: jobRequiringResume, easyApply: {} })
        await advanceToResumeStep()

        expect(
            await screen.findByText(/using the most recent resume from your profile/i),
        ).toBeInTheDocument()

        fireEvent.click(screen.getByRole('button', { name: /simulate manual upload/i }))

        expect(
            screen.queryByText(/using the most recent resume from your profile/i),
        ).not.toBeInTheDocument()
        expect(screen.getByText('manually-uploaded.pdf')).toBeInTheDocument()
    })

    it('shows the prefilled resume\'s actual filename instead of a generic label', async () => {
        useUser.setState({
            user: {
                ...baseUser,
                user_job_profile: {
                    resume_cv: [
                        { id: 1, name: 'jane-doe-resume.pdf', url: 'https://cdn.example.com/jane.pdf' },
                    ],
                },
            },
        })

        renderApply({ open: true, close: () => {}, job: jobRequiringResume, easyApply: {} })
        await advanceToResumeStep()

        expect(await screen.findByText('jane-doe-resume.pdf')).toBeInTheDocument()
    })
})

describe('Apply — cover letter is always optional', () => {
    beforeEach(() => {
        useUser.setState({ user: null, isUserLoading: false, hasResolvedUser: false })
    })

    it('does not block moving past the cover letter step when left empty', async () => {
        useUser.setState({ user: baseUser })

        renderApply({
            open: true,
            close: () => {},
            job: jobRequestingCoverLetter,
            easyApply: {},
        })

        await advanceToResumeStep()

        expect(await screen.findByText(/optional/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /next/i })).not.toBeDisabled()
    })
})
