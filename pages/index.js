import Head from "next/head";
import Link from "next/link";
import ListOfRecents from "./components/ListOfRecents";
import { useState, useEffect } from "react";
import AddWordModal from "./components/AddWordModal";
import AddPeeginForm from "./components/AddPeeginForm";
import TopRightSideBar from "./components/TopRightSideBar";
import LeftSideBar from "./components/LeftSideBar";
import BottomRightSideBar from "./components/BottomRightSideBar";
import Image from "next/image";
import Navbar from "./components/Navbar";
import store from "../store/store"
import { useSnapshot } from "valtio";
import SideInfo from "./components/SideInfo";
import HowToUse from "./components/HowToUse";
import BottomLeftSideBar from "./components/BottomLeftSidebar";

export async function getStaticProps() {
  const response = await fetch("https://peegin.com/api/public/peegins/recent"); //https://peegin.com/api/public/peegins/recent
  const data = await response.json();

  return {
    props: { data },
  };
}

const Homepage = ({ data }) => {
  const [peegins, SetPeegins] = useState([]);
  const [loading, SetLoading] = useState(true);



  const [search, setSearch] = useState("");

  const [isOpen, setISOpen] = useState(false);
  const [addbutton, setAddButton] = useState("Add A New Word");

  useEffect(() => {
    SetPeegins(data.peegins)
    //is == data.peegins when using real api- this is due to the fact that data is an object and peeging is a property with the array of objects that has our data
    SetLoading(false);
    store.peegins = data.peegins
  }, [data]); //run anytime data changes

  const [title, setTitle] = useState("");
  const [meaning, setMeaning] = useState("");
  const [example, setExample] = useState("");
  const [origin, setOrigin] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPeegin = { title, meaning, example, origin, user: { name } };

    console.log("new word added");
    console.log(newPeegin);
    setISOpen(false);
    setAddButton("Add New Word");

    peegins.unshift(newPeegin); //to add to the top of the array

    console.log(peegins);
  };
  const [toggleuse, settoggleuse] = useState(false)

  const useButton = () => {
    settoggleuse(!toggleuse);
  };

  const modalButton = () => {
    setISOpen(!isOpen);
  };

  return (
    <div className="content">
      <Head>
        <title>Peegin Recent | Peegin.com Clone By Michael</title>
      </Head>
      <Navbar search={search} setSearch={setSearch} />
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
          addnew={addbutton}
          addnew2={setAddButton}
          setTitle={setTitle}
          setName={setName}
          setMeaning={setMeaning}
          setOrigin={setOrigin}
          setExample={setExample}
        />
      ) : null}
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
        <div className="mobileaddword">
          <h2> The Official Pidgin English Dictionary</h2>
          <AddWordModal
            modalButton={modalButton}
            addnew={addbutton}
            addnew2={setAddButton}
            data1={isOpen}
            data3={setISOpen}
          />
        </div>
        <div className="leftsidebar">
          <LeftSideBar woday={peegins} />
          <HowToUse toggleuse={toggleuse} settoggleuse={settoggleuse} />
          <BottomLeftSideBar />
        </div>

        <div className="peegindisplay">
          <ListOfRecents data2={peegins} load={loading} search={search} setSearch={setSearch} />
        </div>

        <div className="rightsidebar">
          <TopRightSideBar />
          <AddWordModal
            modalButton={modalButton}
            addnew={addbutton}
            addnew2={setAddButton}
            data1={isOpen}
            data3={setISOpen}
          />
          <BottomRightSideBar trend={peegins} />

          <SideInfo />

        </div>
        {/* <div className="backtop">
          <div>
            <Image
              src="/shuffle button.png"
              alt="Random Peegin"
              width={40}
              height={40}
            />
          </div>
        </div> */}
      </div>
    </div >
  );
};

export default Homepage;
