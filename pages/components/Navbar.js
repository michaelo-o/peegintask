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
  const [dangerzone, setdangerzone] = useState(false)

  const handleClick = event => {
    if (outside.current.contains(event.target)) {  //.current is a method that useRef uses
      return
    }
    setOpenProfile(false)
  }

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick) //this watches for when we click outside so it will know to run the handleClick function
    //looks for a click event and calls handle click if we click it

    // return () => {
    //   getClick()
    // }
  }, [])


  function profile() {
    setOpenProfile(!openProfile)
  }
  function danger() {
    setdangerzone(!dangerzone)
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

        {authReady &&
          <div className="links">
            {!user && <p onClick={login} className="btn">Login/Signup</p>}
            {/* password 12lorem */}

            {user && <p className="textBeforeProfile">Logged in as <span onClick={profile} className="profileName">{user.user_metadata.full_name}</span></p>}


            {user && openProfile ? (

              <div>
                <div className="profilemodal">
                  <button onClick={closeProfile} className="backbutton">
                    Close
                  </button>
                  <h2>Profile Info</h2>
                  <p>Username: {user.user_metadata.full_name}</p>
                  <p>Email: {user.email}</p>
                  <p>Date Created: {user.created_at}</p>
                  <p onClick={logout} className="btn">Log Out</p>

                </div>
              </div>

            ) : null
            }

            {/* {user && <p onClick={logout} className="btn">Log Out</p>} */}
          </div>


        }

      </div>
    </nav>
  );
};

export default Navbar;
