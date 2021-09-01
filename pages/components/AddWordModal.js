import { useState } from "react";
import AddPeeginForm from "./../components/AddPeeginForm";
import Image from "next/image";

const AddWordModal = (props) => {
  const isOpen = props.data1;
  const setISOpen = props.data3;
  const addbutton = props.addnew;
  const setAddButton = props.addnew2;

  const modalButton = () => {
    setISOpen(!isOpen);
    isOpen ? setAddButton("Adding Peegin...") : setAddButton("Add A New Word");
  };

  return (
    <div>
      <div className="addNewWord">
        <button onClick={modalButton}>
          <div className="pencil">
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
    </div>
  );
};

export default AddWordModal;
