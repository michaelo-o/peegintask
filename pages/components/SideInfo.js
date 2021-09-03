import Link from "next/link";


const SideInfo = () => {
    return (
        <div className="stuffunder">
            <p>
                <Link href="/termsofservice">
                    <a target="_blank" >Terms Of Service</a>
                </Link>
                <a> | </a>
                <Link href="/privacypolicy">
                    <a target="_blank" >Privacy Policy</a>
                </Link>
                <a> | </a>
                <Link href="https://peegin.com/api/public/peegins/recent">
                    <a target="_blank" >API</a>
                </Link>
                <a> | </a>
                <Link href="https://wa.me/+2348187060551">
                    <a target="_blank" >Contact Me</a>
                </Link>
                <a> | </a>
                <Link href="https://web.facebook.com/michael.okwuosah/">
                    <a target="_blank" >© 2021 Copyright</a>
                </Link>
                <p>Built With <Link href="https://nextjs.org/">
                    <a target="_blank"> Next.js </a>
                </Link>
                    By
                    <Link href="https://web.facebook.com/michael.okwuosah/">
                        <a target="_blank"> Michael Okwuosah</a>
                    </Link> </p>
            </p>
        </div>
    );
}

export default SideInfo;