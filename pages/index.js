import Head from "next/head";
import Navbar from "../pages/components/Navbar";
// import PeeginsDisplay from "../pages/components/PeeginsDisplay";
import { useState, useEffect } from "react";
import AddWordModal from "./components/AddWordModal";
import AddPeeginForm from "./components/AddPeeginForm";
import TopRightSideBar from "./components/TopRightSideBar";
import LeftSideBar from "./components/LeftSideBar";

export async function getStaticProps() {
  const response = await fetch("https://peegin.com/api/public/peegins/recent");
  const data = await response.json();

  return {
    props: { data },
  };
}

const Homepage = ({ data }) => {
  const [peegins, SetPeegins] = useState([]);
  const [loading, SetLoading] = useState(true);

  const [isOpen, setISOpen] = useState(false);
  const [open, setOpen] = useState("Add New Word");

  useEffect(() => {
    SetPeegins(data.peegins), //is == data.peegins when using real api- this is due to the fact that data is an object and peeging is a property with the array of objects that has our data
      SetLoading(false);
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
    setOpen("Add New Word");

    peegins.unshift(newPeegin); //to add to the top of the array

    console.log(peegins);
  };

  // const [addedPeegin, setAddedPeegin] = useState([])

  // useEffect(() => {
  //   setAddedPeegin(data.peegins)
  // }, [peegins]);

  const backButton = () => {
    setISOpen(!isOpen);
    setOpen("Add New Word");
  };

  const modalButton = () => {
    setISOpen(!isOpen);
    isOpen ? setOpen("Add New Word") : setOpen("Adding Peegin...");
  };

  return (
    <div className="content">
      <Head>
        <title>Peegin Recent</title>
      </Head>
      <Navbar />

      {isOpen ? (
        <div className="modal">
          <div className="contentof">
            <div className="addpeegin">
              <div className="formclosebutton">
                <button onClick={backButton} className="backbutton">
                  Close Form
                </button>
              </div>

              <h2>Add a New Peegin</h2>
              <form onSubmit={handleSubmit}>
                <label>Enter The Word Your Want To Define</label> <br />
                <input
                  placeholder="eg. Epp"
                  type="text"
                  required
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />{" "}
                <br />
                <br />
                <label>Enter The Meaning Of Your Word</label> <br />
                <textarea
                  placeholder="Means help, either to help some or ask for help"
                  required
                  value={meaning}
                  onChange={(event) => setMeaning(event.target.value)}
                ></textarea>{" "}
                <br />
                <br />
                <label>Make a Sentence With Your Word</label> <br />
                <textarea
                  placeholder="Aunty please epp me."
                  required
                  value={example}
                  onChange={(event) => setExample(event.target.value)}
                ></textarea>{" "}
                <br />
                <br />
                <label>
                  English Words That Are Synonymous With Your Word
                </label>{" "}
                <br />
                <input
                  placeholder="eg. Help, Please"
                  type="text"
                  required
                />{" "}
                <br />
                <br />
                <label>
                  Where Did The Meaning Of This Word Originate From?
                </label>{" "}
                <br />
                <input
                  placeholder="eg. Lagos"
                  type="text"
                  required
                  value={origin}
                  onChange={(event) => setOrigin(event.target.value)}
                />{" "}
                <br />
                <br />
                <label>Let Others Know You Added this Peegin</label> <br />
                <input
                  placeholder="Drop your name for here"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />{" "}
                <br />
                <br />
                <input
                  type="submit"
                  className="submitbutton"
                  value="Submit Your Peegin"
                />{" "}
                &nbsp;{" "}
                <button onClick={backButton} className="backbutton">
                  Back
                </button>
                <br />
              </form>
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid">
        <div className="leftsidebar">
          <LeftSideBar data={peegins} />
        </div>

        <div className="peegindisplay">
          {/* <PeeginsDisplay data2={peegins} load={loading} /> */}
          <div>
            <h1>Recent Peegin</h1>
            {loading && <h1 className="loading">Loading...</h1>}
            {peegins.map((peegin) => (
              <div className="preview" key={peegin?.permalink}>
                <h3 className="title">{peegin?.title}</h3>
                <p>{peegin?.meaning}</p>
                <p className="example">Example</p>
                <p className="example-content">{peegin?.example}</p>
                {/* <p className="origin">Origin: {peegin?.origin}</p> */}
                <div className="name">
                  <h4>By</h4> &nbsp;
                  <h4 className="namegreen">{peegin?.user?.name}</h4> &nbsp;
                  <h4>{peegin?.created_at}</h4>
                </div>
                <p className="views">{peegin?.views?.view} Views</p>
              </div>
            ))}
          </div>
        </div>

        <div className="toprightsidebar">
          <TopRightSideBar />
          <div className="addNewWord">
            <button onClick={modalButton}>{open}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
