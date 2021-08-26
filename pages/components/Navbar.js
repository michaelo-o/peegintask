import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
const Navbar = () => {
  function submit(event) {
    event.preventDefault();
    console.log("search sumitted");
  }

  const [showMe, setShowMe] = useState(false);

  function displaysearch() {
    console.log("mobsearch");
    setShowMe(!showMe);
  }
  return (
    <nav className="navbar">
      <Head>
        {/* <Link rel="icon" href="/favicon2.webp" width={16} height={16} /> */}
      </Head>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="site logo" width={170} height={53} />
          </a>
        </Link>
      </div>

      <div className="search">
        <form onSubmit={submit}>
          <input type="text" placeholder="Search Peegin.." />
          <button className="submitsearchbutton" type="submit">
            <Image
              src="/search icon.png"
              alt="Submit Search"
              width={25}
              height={26}
            />
          </button>
        </form>
        <button className="mobilesearch" onClick={displaysearch}>
          <Image
            src="/search icon.png"
            alt="Submit Search"
            width={25}
            height={26}
          />
          {showMe ? ( //use Modal for this
            <div className="search">
              <input type="text" placeholder="Search Peegin.." />
            </div>
          ) : null}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
