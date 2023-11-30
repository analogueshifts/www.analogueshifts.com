export default function LoadingTwo() {
    return (
        <div
            style={{ zIndex: 5 }}
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/30">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
