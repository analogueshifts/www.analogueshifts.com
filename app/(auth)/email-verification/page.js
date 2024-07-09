import AuthenticationLayout from '@/layouts/authentication'
import EmailVerificationForm from './components/form'

export default function Page() {
    return (
        <AuthenticationLayout>
            <EmailVerificationForm />
        </AuthenticationLayout>
    )
}
