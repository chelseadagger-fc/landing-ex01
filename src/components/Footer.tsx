import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="flex flex-row justify-center items-center content-center gap-24 mb-12">
            <div className="flex flex-col justify-center items-center content-center">
            <FaDiscord size={72} />
            <p className="mt-3">Join us on Discord</p>
            </div>
            <div className="flex flex-col justify-center items-center content-center">
            <BsTwitterX size={56} />
            <p className="mt-3">Follow us on Twitter</p>
            </div>
        </div>
    )
}