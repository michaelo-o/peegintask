import { useEffect, useState } from "react"
import AddWordModal from "./AddWordModal"
import PeeginsDisplay from "./PeeginsDisplay"




const AddPeeginForm = (props) => {
    const closeModal = props.data1
    const setCloseModal = props.data2

    const [data4, setData4] = useState(props.data3)


    const [title, setTitle] = useState('')
    const [meaning, setMeaning] = useState('')
    const [example, setExample] = useState('')
    const [origin, setOrigin] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const newPeegin = { title, meaning, example, origin };

        setData4(data4.push(newPeegin))


        // fetch(npg, {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(newPeegin)
        // }).then(() => {
        //     })

        console.log('new word added')
        console.log(newPeegin)
        setCloseModal(!closeModal)
        // console.log(data)
        console.log(data4)

    }


    const backButton = () => {
        setCloseModal(!closeModal)
    }


    return (
        <>
            <div className="contentof">
                <div className="addpeegin">

                    <h2>Add a New Peegin</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Enter The Word Your Want To Define</label> <br />
                        <input placeholder="eg. Epp" type="text" required value={title}
                            onChange={(event) => setTitle(event.target.value)} /> <br />
                        <br />
                        <label>Enter The Meaning Of Your Word</label> <br />
                        <textarea placeholder="Means help, either to help some or ask for help" required value={meaning}
                            onChange={(event) => setMeaning(event.target.value)}></textarea> <br />
                        <br />
                        <label>Make a Sentence With Your Word</label> <br />
                        <textarea placeholder="Aunty please epp me." required value={example}
                            onChange={(event) => setExample(event.target.value)}></textarea> <br />
                        <br />
                        <label>English Words That Are Synonymous With Your Word</label> <br />
                        <input placeholder="eg. Help, Please" type="text" required /> <br />
                        <br />
                        <label>Where Did The Meaning Of This Word Originate From?</label> <br />
                        <input placeholder="eg. Lagos" type="text" required value={origin}
                            onChange={(event) => setOrigin(event.target.value)} /> <br />
                        <br />
                        <input type="submit" value="Submit Your Peegin" /> &nbsp; <button onClick={backButton} className="backbutton">Back</button>
                        <br />


                    </form>
                </div>
            </div>



        </>
    );
}

export default AddPeeginForm;