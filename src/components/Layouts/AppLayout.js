import Navigation from '@/components/Layouts/Navigation'

const AppLayout = ({ header, children }) => {

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
