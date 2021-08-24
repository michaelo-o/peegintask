import Image from "next/dist/client/image";
const Navbar = () => {
  function submit(event) {
    event.preventDefault();
    console.log("search sumitted");
  }

  return (
    <nav className="navbar">
        <div className="logo"><Image
              src="/logo.png"
              alt="site logo"
              width={170}
              height={53}
            /></div>

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
