import { useState } from "react";
import AddPeeginForm from "./../components/AddPeeginForm";

const AddWordModal = (props) => {
  const isOpen = props.data1;
  const setISOpen = props.data2;
  const open = props.addnew;
  const setOpen = props.addnew2;

  const modalButton = () => {
    setISOpen(!isOpen);
    isOpen ? setOpen("Add New Word") : setOpen("Adding Peegin...");
  };

  return (
    <>
      <div className="addNewWord">
        <button onClick={modalButton}>{open}</button>
      </div>
    </>
  );
};

export default AddWordModal;
