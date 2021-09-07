import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  
  const search = props.search;
  const setSearch = props.setSearch;
  console.log(search)

  const [showsbar, setSshowSBar] = useState(false);
  const [buttonC, setButtonC] = useState(true);

  function submit(event) {
    event.preventDefault();
    setSearch(search)
    console.log("search sumitted");
  }
  
  function toggleSearch() {
    console.log("mobsearch");
    setSshowSBar(!showsbar);
    setButtonC(!buttonC);
  }
  // function closeSearch() {
  //   setSshowSBar(!showsbar);
  // }
  return (
    <nav className="navbar">
      <Head>
        <meta name="description" content="Clone of Peegin.com" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="site logo" width={170} height={53} />
          </a>
        </Link>
      </div>

      {showsbar ? ( //use Modal for this
        // <div className="fles">
        <div className="mobsearch1">
          <button className="closmobs" onClick={toggleSearch}>
            X
          </button>
          &nbsp;
          <form onSubmit={submit}>
            <input
              type="text"
              placeholder="Search Peegin.."
              onChange={(event) => setSearch(event.target.value)}
            />
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
      ) : // </div>
      null}

      <div className="search">
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Search Peegin.."
            onChange={(event) => setSearch(event.target.value)}
          />
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
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
