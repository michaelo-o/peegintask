import { useEffect, useState } from "react";

const LeftSideBar = (props) => {
  const peegins = props.data;

  const [wods, SetWods] = useState();

  useEffect(() => {
    SetWods(peegins[Math.floor(Math.random() * peegins.length)]);
  }, [peegins]);

  return (
    <>
      <h2>Word of the day</h2>
      <h4>(Actually just a Random Peegin)</h4>
      <div className="wordofday" key={wods?.permalink}>
        <h3 className="title">{wods?.title}</h3>
        <p className="example">Meaning</p>
        <p>
          {wods?.meaning} <br />
          <br />
        </p>
        <p className="example">Example</p>
        <p className="example-content">{wods?.example}</p>
      </div>
      <div className="browse">
        <h2>Browse</h2>
        <p>Edit This Later (Glossary)</p>
      </div>
    </>
  );
};

export default LeftSideBar;
