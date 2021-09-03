import { useEffect, useState } from "react";
import Link from "next/link";


const LeftSideBar = (props) => {
  const peeginswod = props.woday;

  const [wods, SetWods] = useState();

  useEffect(() => {
    SetWods(peeginswod[Math.floor(Math.random() * peeginswod.length)]);
  }, [peeginswod]);

  return (
    <>
      <div className="wordofday" key={wods?.permalink}>
        <div className="wodhead">
          <h2>Word of the day</h2>
          <h4>(Actually just a Random Peegin)</h4>
        </div>
        <Link href={"/peegins/" + wods?.permalink}>
              <a>
                <h3 className="title">{wods?.title}</h3>
              </a>
            </Link>
        <p className="example">Meaning</p>
        <p>
          {wods?.meaning} <br />
          <br />
        </p>
        <p className="example">Example</p>
        <p className="example-content">{wods?.example}</p>
      </div>
      
    </>
  );
};

export default LeftSideBar;
