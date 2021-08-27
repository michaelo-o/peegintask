import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
const Navbar = () => {
  function submit(event) {
    event.preventDefault();
    console.log("search sumitted");
  }

  const [showsbar, setSshowSBar] = useState(false);
  const [buttonC, setButtonC] = useState(true);

  function toggleSearch() {
    console.log("mobsearch");
    setSshowSBar(!showsbar);
    setButtonC(!buttonC);
  }
  function closeSearch() {
    setSshowSBar(!showsbar);
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

      {showsbar ? ( //use Modal for this
        <div className="mobsearch1">
          <form onSubmit={submit}>
            <input type="text" placeholder="Search Peegin.." />
            <button className="mobsubmit" type="submit">
              <Image
                src="/search icon.png"
                alt="Submit Search"
                width={20}
                height={19}
              />
            </button>
          </form>
        </div>
      ) : null}

      <div className="search">
        <form onSubmit={submit}>
          <input type="text" placeholder="Search Peegin.." />
          <button className="submitsearchbutton" type="submit">
            <Image
              src="/search icon.png"
              alt="Submit Search"
              width={20}
              height={19}
            />
          </button>
        </form>
        <button className="mobilesearch" onClick={toggleSearch}>
          {buttonC}
        </button>
        {buttonC ? (
          <div className="bx">
            <Image
              src="/search icon.png"
              alt="Submit Search"
              width={20}
              height={19}
            />
          </div>
        ) : (
          <button>X</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
