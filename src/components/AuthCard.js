const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <section className="">
            <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                <div className="bg-white border-0 shadow rounded-lg overflow-hidden">
                    <div className="grid lg:grid-cols-12">
                        <div className="grid lg:col-span-6 py-16 px-3 lg:px-9">
                            <div>{logo}</div>

                            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                                {children}
                            </div>
                        </div>
                        <div className="grid lg:col-span-6">
                            <img
                                className="object-cover h-full w-full"
                                src="/images/1.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default AuthCard
