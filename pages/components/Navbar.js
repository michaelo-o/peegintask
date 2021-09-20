import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useContext, useState, useRef, useEffect } from 'react'
import AuthContext from "../../stores/authContext";

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



  //Auth stuff here 

  const { user, login, logout, authReady } = useContext(AuthContext) //context from the autthContext file
  // console.log(user)

  const outside = useRef()

  const [openProfile, setOpenProfile] = useState(false);
  const [loginModal, setloginModal] = useState(false)

  const handleClick = event => {
    if (outside.current.contains(event.target)) {  //.current is a method that useRef uses
      return
    }
    setloginModal(false)
  }

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick) //this watches for when we click outside so it will know to run the handleClick function
    //looks for a click event and calls handle click if we click it

    // return () => {
    //   getClick()
    // }
  }, [])



  function closeLogin() {
    setloginModal(false)
  }
  function openLogin() {
    setloginModal(!loginModal)
  }
  function closeProfile() {
    setOpenProfile(false)
  }


  return (
    <nav className="navbar" ref={outside}>
      <Head>
        <meta name="description" content="Clone of Peegin.com" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <div className="logo" >
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="site logo" width={170} height={53} />
          </a>
        </Link>
      </div>

      {showsbar ? ( //use Modal for this
        // <div className="fles">
        <div className="mobsearch1" >
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

      <div className="search" >
        <form onSubmit={submit} >
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
      {/* password 12lorem */}

      <div className="loginmodal">
        <button className="usericon" onClick={openLogin}>
          <Image
            src="/user1-removebg-preview.png"
            alt="Submit Search"
            width={60}
            height={40}
          />
        </button>

      </div>


      {loginModal && (
        <div>
          <div className="profilemodal">
            <button onClick={closeLogin} className="backbutton">
              Close
            </button>
            {user && <div className="loggedinas">
              <h1 className="h11"> Logged in as</h1>  <h1>{user.user_metadata.full_name}</h1>
            </div>
            }
            {!user && <h1 onClick={login} className="btn">Login/Signup</h1>}
            {user && <h1 onClick={logout} className="btn">Log Out</h1>}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
