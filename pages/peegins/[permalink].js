import Head from "next/dist/shared/lib/head";
import AddWordModal from "../components/AddWordModal";
import BottomRightSideBar from "../components/BottomRightSideBar";
import TopRightSideBar from "../components/TopRightSideBar";
import LeftSideBar from "../components/LeftSideBar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import store from "../../store/store";
import { useRouter } from 'next/router'
import SideInfo from "../components/SideInfo";
import HowToUse from "../components/HowToUse";
import BottomLeftSideBar from "../components/BottomLeftSidebar";



const ThePeegins = () => {

  const peegins = useSnapshot(store.peegins)

  const router = useRouter()
  const { permalink } = router.query
  const perm = permalink



  useEffect(() => {
    console.log(peegins)
  }, [])

  const angle = "<"

  var newArray = peegins.filter(function (el) {
    return el.permalink === perm; // Changed this so a peegin would match
  });
  console.log(newArray);



  const [isOpen, setISOpen] = useState(false);
  const [addbutton, setAddButton] = useState("Add Your Own Word");

  const modalButton = () => {
    setISOpen(!isOpen);
    isOpen ? setAddButton("Adding Peegin...") : setAddButton("Add Your Own Word");
  };

  // const search = props.search;
  // const setSearch = props.setSearch;


  // const isOpen = props.data1;
  // const setISOpen = props.data3;
  // const open = props.addnew;
  // const setOpen = props.addnew2;
  // const submitbutton = props.submit;

  // const title = props.title;
  // const setTitle = props.setTitle;
  // const meaning = props.meaning;
  // const setMeaning = props.setMeaning;
  // const example = props.example;
  // const setExample = props.setExample;
  // const origin = props.origin;
  // const setOrigin = props.setOrigin;
  // const name = props.name;
  // const setName = props.setName;

  // const loading = props.load;

  // const peeginswod = props.data;

  const [toggleuse, settoggleuse] = useState(false)

  const useButton = () => {
    settoggleuse(!toggleuse);
  };



  return (
    <div className="content">

      {/* <div className="thepeegins">
        {isOpen ? (
          <AddPeeginForm
            title={title}
            meaning={meaning}
            origin={origin}
            example={example}
            name={name}
            data1={isOpen}
            data3={setISOpen}
            submit={handleSubmit}
            addnew={open}
            addnew2={setOpen}
            setTitle={setTitle}
            setName={setName}
            setMeaning={setMeaning}
            setOrigin={setOrigin}
            setExample={setExample}
          />
        ) : null} */}
      {toggleuse ? (
        <div className="usemethodbg">
          <div className="usemethod">
            <button onClick={useButton} className="backbutton">
              Close
            </button>
            <h2>How To Use</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      ) : null
      }

      <div className="grid">
        <div className="leftsidebar">
          <div className="singwoday">
            <LeftSideBar woday={peegins} />
          </div>
          <div className="singusemethod">
            <HowToUse toggleuse={toggleuse} settoggleuse={settoggleuse} />
          </div>
          <BottomLeftSideBar />
        </div>

        <div className="peegindisplay">
          <div className="singaddNewWord">
            <button onClick={modalButton}>
              <div>
                <Image
                  src="/pencil.png"
                  alt="Submit Search"
                  width={25}
                  height={25}
                />
                &nbsp;
              </div>
              <p>{addbutton}</p>
            </button>
          </div>


          {newArray.map((peegin) => (
            <div className="preview" key={peegin?.permalink}>
              <Head /*header of the page */>
                <title>{peegin.title} - Meaning in Pidgin English | Peegin.com Clone By Michael</title>
              </Head>
              <div className="bbuton"><Link href="/"><a><p>{angle} Back</p></a></Link></div>
              <h3 className="title">{peegin?.title}</h3>
              <p>{peegin?.meaning}</p>
              <p className="example">Example</p>
              <p className="example-content">{peegin?.example}</p>
              <p className="origin">Origin: {peegin?.origin}</p>
              <div className="name">
                <h4>By</h4> &nbsp;
                <h4 className="namegreen">{peegin?.user?.name}</h4> &nbsp;
                <h4>{peegin?.created_at}</h4>
              </div>
              <div className="viewsandshare">
                <p className="views">{peegin?.views?.view} Views</p>
                <p className="share">
                  Share &nbsp;
                  <Link
                    className="shb"
                    href="http://www.facebook.com/sharer/sharer.php?u="
                  >
                    <a target="_blank">
                      <Image
                        src="/fbshare.png"
                        alt="Submit Search"
                        width={20}
                        height={19}
                      />
                    </a>
                  </Link>
                  &nbsp;
                  <Link href="https://twitter.com/intent/tweet?url=">
                    <a target="_blank">
                      <Image
                        src="/twittershare.png"
                        alt="Submit Search"
                        width={20}
                        height={19}
                      />
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="rightsidebar">
          <TopRightSideBar />

          <BottomRightSideBar trend={peegins} />

          <SideInfo />
        </div>
      </div>


    </div>
    // </div>
  );
};

export default ThePeegins;
