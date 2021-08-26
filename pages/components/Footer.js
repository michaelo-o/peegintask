import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer">
      <div className="backtotop">
        <Link href="/">
          <a>
            <p>Back To Home/Top</p>
          </a>
        </Link>
      </div>
      <div className="copyright">
        <p>© 2021 Copyright</p>
      </div>
      <div className="footterms">
        <p>
          <Link href="/termsofservice">
            <a>Terms Of Service</a>
          </Link>
          <a className="divider"> | </a>
          <Link href="/privacypolicy">
            <a>Privacy Policy</a>
          </Link>
        </p>
      </div>
      <div className="project">
        <p>
          A Side Project by
          <Link href="https://web.facebook.com/michael.okwuosah/">
            <a target="_blank"> Michael Okwuosah</a>
          </Link>
        </p>

        <p>
          This is a clone of
          <Link href="https://peegin.com/">
            <a target="_blank"> Peegin.com</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
