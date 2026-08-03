'use client'
import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { useResumeOptimizer } from '@/hooks/resume-optimizer'
import UploadFile from '../../../recruiter/hire/edit/[uuid]/step-three/components/upload-file'

function ScoreCircle({ score }) {
    const color =
        score >= 80 ? '#22C55E' : score >= 50 ? '#FFBB0A' : '#FF0000'

    return (
        <div
            className="h-20 w-20 shrink-0 rounded-full flex items-center justify-center border-4"
            style={{ borderColor: color }}>
            <span className="text-lg font-semibold" style={{ color }}>
                {score}
            </span>
        </div>
    )
}

function SuggestionsList({ suggestions }) {
    return (
        <div className="w-full flex flex-col gap-3">
            {suggestions?.map((item, index) => (
                <div
                    key={index}
                    className="w-full flex flex-col gap-1 rounded-2xl bg-[#F9F9F9] p-4">
                    <p className="text-xs font-semibold text-tremor-background-darkYellow">
                        {item.category}
                    </p>
                    <p className="text-xs text-[#525252]">
                        {item.suggestion}
                    </p>
                </div>
            ))}
        </div>
    )
}

function ResultCard({ optimization }) {
    return (
        <div className="w-full flex flex-col gap-5 rounded-[24px] border border-[#E7E7E7] p-6">
            <div className="flex items-center gap-4">
                <ScoreCircle score={optimization.score} />
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#292929]">
                        ATS Compatibility Score
                    </p>
                    <p className="text-[11px] text-[#7C7C7C]">
                        {new Date(optimization.created_at).toLocaleDateString(
                            undefined,
                            { year: 'numeric', month: 'short', day: 'numeric' },
                        )}
                    </p>
                </div>
            </div>
            <SuggestionsList suggestions={optimization.suggestions} />
        </div>
    )
}

export default function ResumeOptimizerOverview() {
    const { user } = useUser()
    const { analyzeResume, getResumeOptimizerHistory } = useResumeOptimizer()

    const [resumeUrl, setResumeUrl] = useState('')
    const [resumeFileName, setResumeFileName] = useState('')
    const [analyzing, setAnalyzing] = useState(false)
    const [historyLoading, setHistoryLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [history, setHistory] = useState([])
    const [remaining, setRemaining] = useState(null)

    const fetchHistory = () => {
        getResumeOptimizerHistory({
            setLoading: setHistoryLoading,
            setData: data => {
                setHistory(data.history.data)
                setRemaining(data.remaining_this_month)
            },
        })
    }

    useEffect(() => {
        fetchHistory()
    }, [])

    useEffect(() => {
        const savedResumes = user?.user_job_profile?.resume_cv
        if (savedResumes?.length && !resumeUrl) {
            const latestResume = savedResumes[savedResumes.length - 1]
            setResumeUrl(latestResume.url)
            setResumeFileName(latestResume.name || '')
        }
    }, [user])

    const handleAnalyze = async () => {
        const data = await analyzeResume({
            resumeUrl,
            setLoading: setAnalyzing,
            onSuccess: () => fetchHistory(),
        })
        if (data) {
            setResult(data.optimization)
        }
    }

    const capReached = remaining === 0

    return (
        <div className="xl:w-[calc(100%-320px)] h-max flex flex-col w-full gap-5">
            <div className="h-max px-8 py-8 tablet:px-5 tablet:py-5 w-full bg-white rounded-[32px] flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-semibold text-[#292929]">
                        AI Resume Optimizer
                    </h1>
                    <p className="text-xs text-[#7C7C7C]">
                        Get an ATS compatibility score and actionable
                        suggestions to improve your resume.
                    </p>
                </div>

                <div className="flex flex-col gap-3 max-w-[498px]">
                    <label className="font-medium text-tremor-brand-boulder950 text-sm">
                        Resume
                    </label>
                    <UploadFile
                        label="Upload Resume"
                        isPDF={true}
                        value={resumeUrl}
                        fileName={resumeFileName}
                        onFileNameChange={setResumeFileName}
                        setValue={setResumeUrl}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={handleAnalyze}
                        disabled={!resumeUrl || analyzing || capReached}
                        className="h-10 w-48 disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 flex justify-center bg-[#FFBB0A] items-center rounded-[10px] text-xs font-bold text-white">
                        {analyzing ? 'Analyzing...' : 'Analyze Resume'}
                    </button>
                    {remaining !== null && (
                        <p className="text-[11px] text-[#7C7C7C]">
                            {capReached
                                ? "You've used all your optimizations for this month. Come back next month for more."
                                : `${remaining} optimization${remaining === 1 ? '' : 's'} left this month`}
                        </p>
                    )}
                </div>

                {result && (
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-semibold text-[#292929]">
                            Latest Result
                        </p>
                        <ResultCard optimization={result} />
                    </div>
                )}
            </div>

            {historyLoading && !history?.length ? (
                <div className="h-max px-8 py-8 tablet:px-5 tablet:py-5 w-full bg-white rounded-[32px]">
                    <p className="text-xs text-[#7C7C7C]">
                        Loading past optimizations...
                    </p>
                </div>
            ) : (
                history?.length > 0 && (
                    <div className="h-max px-8 py-8 tablet:px-5 tablet:py-5 w-full bg-white rounded-[32px] flex flex-col gap-5">
                        <p className="text-sm font-semibold text-[#292929]">
                            Past Optimizations
                        </p>
                        <div className="flex flex-col gap-4">
                            {history
                                .filter(item => item.uuid !== result?.uuid)
                                .map(item => (
                                    <ResultCard
                                        key={item.uuid}
                                        optimization={item}
                                    />
                                ))}
                        </div>
                    </div>
                )
            )}
        </div>
    )
}
