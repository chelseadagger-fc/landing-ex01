export default function Navbar() {
    return (
        <div className="h-1/5 w-full flex-col justify-center items-center content-center pt-6">
            <h1 className="text-6xl">WEBSITE</h1>          
            <div className="w-full flex flex-row w-1/2 justify-center items-center content-center mt-4 gap-8">
                <p className="text-3xl">[ HOME ]</p>
                <p className="text-3xl">[ NAV2 ]</p>
                <p className="text-3xl">[ NAV3 ]</p>
                <p className="text-3xl">[ NAV4 ]</p>
            </div>
        </div>
    )
}