import { useState } from "react";
import AddPeeginForm from "./../components/AddPeeginForm";

const AddWordModal = (props) => {
  //   const isOpen = props.isOpen
    const peegins = props.peegin

  const [open, SetOpen] = useState(props.whenOpen)
  const [isOpen, SetISOpen] = useState(props.isOpen);

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
    SetISOpen(false);
    SetOpen("Add New Word");

    peegins.unshift(newPeegin); //to add to the top of the array

    console.log(peegins);
  };

  const backButton = () => {
    SetISOpen(!isOpen);
    SetOpen("Add New Word");
  };

  const modalButton = () => {
    SetISOpen(!isOpen);
    isOpen ? SetOpen("Add New Word") : SetOpen("Adding Peegin...");
  };

  return (
    <>
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

      <div className="addNewWord">
        <button onClick={modalButton}>{open}</button>
      </div>
    </>
  );
};

export default AddWordModal;
