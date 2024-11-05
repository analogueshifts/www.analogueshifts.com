export default function LoadingSpinnerOverlay() {
    return (
        <section className="w-screen z-40 h-screen fixed top-0 left-0 bg-transparent flex justify-center items-center">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}
