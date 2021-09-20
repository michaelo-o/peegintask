import AddWordModal from "./AddWordModal";
import { useEffect, useContext, useState } from 'react'
import AuthContext from "../../stores/authContext";

const AddPeeginForm = (props) => {
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

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     const newPeegin = { title, meaning, example, origin, user: { name } };

  //     console.log("new word added");
  //     console.log(newPeegin);
  //     setISOpen(false);
  //     setOpen("Add New Word");

  //     peegins.unshift(newPeegin); //to add to the top of the array

  //     console.log(peegins);
  //   };

  // fetch(npg, {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newPeegin)
  // }).then(() => {
  //     })

  const backButton = () => {
    setISOpen(!isOpen);
    setOpen("Add New Word");
  };

  //Auth stuff here
  const { user, authReady, login } = useContext(AuthContext)
  const [peegins, setpeegins] = useState(null)
  const [error, seterror] = useState(null)

  useEffect(() => {
    if (authReady) { //this is so that it can be sure if we are signed in or not before sending the fetch request
      fetch('/.netlify/functions/peegins', user && //so that this only runs of there is a user avialable, if it runs when there is no user, we get an error
      {
        headers: {
          Authorization: 'Bearer ' + user.token.access_token //what needs to be sent to netlify so they know a user is logged in
          //if the user token is not sent in when we make the fetch request, it would not know we are logged in
        }
      })
        .then(res => {
          if (!res.ok) { //if response is not ok, i.e if it is false, we should show an error message, because it means we are not authenticated
            login()
            throw Error('You gotta Log in to view the cool Lorem Ipsums')
          }
          return res.json() // if the reesponse is okay, we do not see an error message, and we return the json data we can actually use and carry on with the rest of the function, that is setting the state of lorems to be the data we get
        }) //turns it into json,something we can actually use
        .then(data =>
          setpeegins(data), // if there is no error, then set the state of lorems to be the data we recieved
          seterror(null) //then make this null since there is no error
        )
        .catch(err => {
          seterror(err.message)
          setpeegins(null) //when they log out, this should be re set back to null
        })
    }

  }, [user, authReady]) //so ths functions runs automatically if the user changes or our authentication status changes



  return (
    <>

      {error && (
        <div>  {/* if we have an error, i.e, user is not logged in, display the error here. the if statement checks if there is an error first */}
          <p>{error}</p>
        </div>
      )}

      {/* Latstly, if we are logged in and there is no error, show the data */}

      {peegins && (
        <div className="modal">
          <div className="contentof">
            <div className="addpeegin">
              <div className="formclosebutton">
                <button onClick={backButton} className="backbutton">
                  Close Form
                </button>
              </div>

              <h2>Add a New Peegin</h2>
              <form onSubmit={submitbutton}>
                <label>Enter The Word Your Want To Define</label> <br />
                <input
                  placeholder="eg. Epp"
                  type="text"
                  required
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                <br />
                <label>Enter The Meaning Of Your Word</label> <br />
                <textarea
                  placeholder="Means help, either to help some or ask for help"
                  required
                  value={meaning}
                  onChange={(event) => setMeaning(event.target.value)}
                ></textarea>
                <br />
                <br />
                <label>Make a Sentence With Your Word</label> <br />
                <textarea
                  placeholder="Aunty please epp me."
                  required
                  value={example}
                  onChange={(event) => setExample(event.target.value)}
                ></textarea>
                <br />
                <br />
                <label>
                  English Words That Are Synonymous With Your Word
                </label>
                <br />
                <input placeholder="eg. Help, Please" type="text" required />{" "}
                <br />
                <br />
                <label>
                  Where Did The Meaning Of This Word Originate From?
                </label>
                <br />
                <input
                  placeholder="eg. Lagos"
                  type="text"
                  required
                  value={origin}
                  onChange={(event) => setOrigin(event.target.value)}
                />
                <br />
                <br />
                <label>Let Others Know You Added this Peegin</label> <br />
                <input
                  placeholder="Drop your name for here"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <br />
                <br />
                <input
                  type="submit"
                  className="submitbutton"
                  value="Submit Your Peegin"
                />
                &nbsp;
                <button onClick={backButton} className="backbutton">
                  Back
                </button>
                <br />
              </form>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default AddPeeginForm;
