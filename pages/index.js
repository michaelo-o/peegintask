import Head from "next/head";
import ListOfRecents from "./components/ListOfRecents";
import { useState, useEffect } from "react";
import AddWordModal from "./components/AddWordModal";
import AddPeeginForm from "./components/AddPeeginForm";
import TopRightSideBar from "./components/TopRightSideBar";
import LeftSideBar from "./components/LeftSideBar";
import BottomRightSideBar from "./components/BottomRightSideBar";

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

  const modalButton = () => {
    setISOpen(!isOpen);
    isOpen ? setOpen("Add New Word") : setOpen("Adding Peegin...");
  };

  return (
    <div className="content">
      <Head>
        <title>Peegin Recent</title>
      </Head>

      {isOpen ? (
        <AddPeeginForm
          title={title}
          meaning={meaning}
          origin={origin}
          example={example}
          name={name}
          data1={isOpen}
          data2={setISOpen}
          submit={handleSubmit}
          addnew={open}
          addnew2={setOpen}
          setTitle={setTitle}
          setName={setName}
          setMeaning={setMeaning}
          setOrigin={setOrigin}
          setExample={setExample}
        />
      ) : null}

      <div className="grid">
        <div className="leftsidebar">
          <div className="mobileaddword">
            <AddWordModal
              modalButton={modalButton}
              addnew={open}
              addnew2={setOpen}
              data1={isOpen}
              data2={setISOpen}
            />
          </div>
          <LeftSideBar data={peegins} />
        </div>

        <div className="peegindisplay">
          {/* <ListOfRecents data2={peegins} load={loading} /> */}
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

        <div className="rightsidebar">
          <TopRightSideBar />
          <AddWordModal
            modalButton={modalButton}
            addnew={open}
            addnew2={setOpen}
            data1={isOpen}
            data2={setISOpen}
          />
          <BottomRightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
