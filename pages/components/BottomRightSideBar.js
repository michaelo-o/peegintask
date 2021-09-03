import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const BottomRightSideBar = (props) => {
  const peeginstrend = props.trend;

  const [trend, SetTrends] = useState();
  const [trend2, SetTrends2] = useState();
  const [trend3, SetTrends3] = useState();
  const [trend4, SetTrends4] = useState();
  const [trend5, SetTrends5] = useState();
  const [trend6, SetTrends6] = useState();


  useEffect(() => {
    SetTrends(peeginstrend[Math.floor(Math.random() * peeginstrend.length)]);
    SetTrends2(peeginstrend[Math.floor(Math.random() * peeginstrend.length)])
    SetTrends3(peeginstrend[Math.floor(Math.random() * peeginstrend.length)])
    SetTrends4(peeginstrend[Math.floor(Math.random() * peeginstrend.length)])
    SetTrends5(peeginstrend[Math.floor(Math.random() * peeginstrend.length)])
    SetTrends6(peeginstrend[Math.floor(Math.random() * peeginstrend.length)])

  }, [peeginstrend]);
  return (
    <>
      <div className="bottomrightsidebar">
        <h2>Trending Words</h2>
        <p>(Actually just a bunch of random peegins)</p>
        <p><Link href={"/peegins/" + trend?.permalink}>
          <a
            className="trend">{trend?.title}
          </a>
        </Link>
        </p>
        <p><Link href={"/peegins/" + trend2?.permalink}>
          <a
            className="trend">{trend2?.title}
          </a>
        </Link></p>

        <p><Link href={"/peegins/" + trend3?.permalink}>
          <a
            className="trend">{trend3?.title}
          </a>
        </Link></p>

        <p><Link href={"/peegins/" + trend4?.permalink}>
          <a
            className="trend">{trend4?.title}
          </a>
        </Link></p>

        <p>
          <Link href={"/peegins/" + trend5?.permalink}>
            <a
              className="trend">{trend5?.title}
            </a>
          </Link>
        </p>
        <p>
          <Link href={"/peegins/" + trend6?.permalink}>
            <a
              className="trend">{trend6?.title}
            </a>
          </Link>
        </p>
      </div>

    </>
  );
};

export default BottomRightSideBar;
