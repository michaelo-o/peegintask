import Link from "next/link";
import Head from "next/head";
import TopRightSideBar from "./components/TopRightSideBar";

const PageNotFound = () => {
  return (
    <>
    <Head >
        <title>This Page no dey oh</title>
    </Head>
      <div className="pagenotfound">
        <div className="pnf">
          <h1>Ah!</h1>
          <h3>Omo, e be like say this page wey you dey find no dey ohh! 🙅‍♂️ 🤕</h3>
          <h3>Just commot for here return go <Link href="/"><a>Homepage 💁‍♂️</a></Link></h3>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
