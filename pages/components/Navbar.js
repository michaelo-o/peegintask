import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const Navbar = () => {
  function submit(event) {
    event.preventDefault();
    console.log("search sumitted");
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
          <Image src="/search icon.png" alt="Submit Search" width={30} height={30} />
          </button>
          {/* <button className="mobilesearchsumbit" type="submit"> S </button> */}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
