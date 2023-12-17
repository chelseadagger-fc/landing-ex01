import './Navbar.css'

export default function Navbar() {
    return (
        <div className="h-1/5 w-full flex-col justify-center items-center content-center pt-6">
            <h1 className="text-6xl">WELCOME</h1>          
            <div className="w-full flex flex-row w-1/2 justify-center items-center content-center mt-4 gap-8">
                <p className="text-3xl font-bold navigation">[ HOME ]</p>
                <p className="text-3xl font-bold navigation">[ NEWS ]</p>
                <p className="text-3xl font-bold navigation">[ FORUM ]</p>
                <p className="text-3xl font-bold navigation">[ NAV4 ]</p>
                <p className="text-3xl font-bold navigation">[ NAV5 ]</p>
            </div>
        </div>
    )
}