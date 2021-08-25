import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  function submit(event) {
    event.preventDefault();
    console.log("search sumitted");
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="site logo" width={170} height={53} />
          </a>
        </Link>
      </div>

      <div className="search">
        <form onSubmit={submit}>
          <input type="text" placeholder="Search Peegin.." /> &nbsp;
          <button className="submitsearchbutton" type="submit">
            Submit Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
