import Head from "next/dist/shared/lib/head";
import AddWordModal from "../components/AddWordModal";
import BottomRightSideBar from "../components/BottomRightSideBar";
import TopRightSideBar from "../components/TopRightSideBar";
import LeftSideBar from "../components/LeftSideBar";
import ListOfRecents from "../components/ListOfRecents";
import AddPeeginForm from "../components/AddPeeginForm";

const ThePeegins = (props) => {
  const isOpen = props.data1;
  const setISOpen = props.data3;
  const open = props.addnew;
  const setOpen = props.addnew2;
  const submitbutton = props.submit;

  const title = props.title;
  const setTitle = props.setTitle;
  const meaning = props.meaning;
  const setMeaning = props.setMeaning;
  const example = props.example;
  const setExample = props.setExample;
  const origin = props.origin;
  const setOrigin = props.setOrigin;
  const name = props.name;
  const setName = props.setName;

  const peegins = props.data2;
  const loading = props.load;

  const peeginswod = props.data;

  const modalButton = () => {
    setISOpen(!isOpen);
    isOpen ? setOpen("Add New Word") : setOpen("Adding Peegin...");
  };

  return (
    <div className="permalink">
      <Head>
        <title>Peegin</title>
      </Head>
      <div className="thepeegins">
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
        ) : null}

        <div className="grid">
          <div className="leftsidebar">
            <div className="mobileaddword">
              <AddWordModal
                modalButton={modalButton}
                addnew={open}
                addnew2={setOpen}
                data1={isOpen}
                data3={setISOpen}
              />
            </div>
            {/* <LeftSideBar woday={peegins} /> */}
          </div>

          <div className="peegindisplay">
            <div className="preview">
              <h3>Single Peegin</h3>
              {console.log(peegins)}
            </div>
          </div>

          <div className="rightsidebar">
            <TopRightSideBar />
            <AddWordModal
              modalButton={modalButton}
              addnew={open}
              addnew2={setOpen}
              data1={isOpen}
              data3={setISOpen}
            />
            <BottomRightSideBar  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThePeegins;
