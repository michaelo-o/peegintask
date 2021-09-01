import Head from "next/dist/shared/lib/head";
import AddWordModal from "../components/AddWordModal";
import BottomRightSideBar from "../components/BottomRightSideBar";
import TopRightSideBar from "../components/TopRightSideBar";
import LeftSideBar from "../components/LeftSideBar";
import ListOfRecents from "../components/ListOfRecents";
import AddPeeginForm from "../components/AddPeeginForm";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import store from "../../store/store";
import { useRouter } from 'next/router'

// export const getStaticPaths = async () => {
//   const response = await fetch("https://peegin.com/api/public/peegins/recent"); //https://peegin.com/api/public/peegins/recent
//   const data = await response.json();
//   const paths = data.peegins.map((mapedData) => {
//     return {
//       params: { permalink: mapedData.permalink.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };


// export async function getStaticProps(context) {
//   const permalink = context.params.permalink;
//   const response = await fetch("https://peegin.com/api/public/peegins/recent/" + permalink); //https://peegin.com/api/public/peegins/recent
//   const data = await response.json();


//   return {
//     props: { data },
//   };
// }

const ThePeegins = () => {

  const peegins = useSnapshot(store)

  const router = useRouter()
  const { permalink } = router.query
  const perm = permalink



  useEffect(() => {
    console.log(peegins)
  }, [])


  // const search = props.search;
  // const setSearch = props.setSearch;


  // const isOpen = props.data1;
  // const setISOpen = props.data3;
  // const open = props.addnew;
  // const setOpen = props.addnew2;
  // const submitbutton = props.submit;

  // const title = props.title;
  // const setTitle = props.setTitle;
  // const meaning = props.meaning;
  // const setMeaning = props.setMeaning;
  // const example = props.example;
  // const setExample = props.setExample;
  // const origin = props.origin;
  // const setOrigin = props.setOrigin;
  // const name = props.name;
  // const setName = props.setName;

  // const loading = props.load;

  // const peeginswod = props.data;

  const modalButton = () => {
    setISOpen(!isOpen);
    isOpen ? setOpen("Add New Word") : setOpen("Adding Peegin...");
  };

  return (
    <div className="permalink">
      <Head>
        <title>Peegin</title>
      </Head>

      {/* <div className="thepeegins">
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
        ) : null} */}

      <div className="grid">
        <div className="leftsidebar">
          <div className="mobileaddword">
            {/* <AddWordModal
                modalButton={modalButton}
                addnew={open}
                addnew2={setOpen}
                data1={isOpen}
                data3={setISOpen}
              /> */}
          </div>
          {/* <LeftSideBar woday={peegins} /> */}
        </div>

        <div className="peegindisplay">
          <div className="preview">
            <h3>Single Peegin</h3>
            <p>The permalink for this particular peegin: {perm}</p>

            {/* {peegins.peegins.filter(peegin => {
              if (
                peegin?.permalink.toLowerCase().includes(perm.toLowerCase())
              ) {
                return peegin;
              }
            }) } */}

            {/* {peegins.peegins.map((peegin) => (
          <div className="preview" key={peegin?.permalink}>
            <Link href={"/peegins/" + peegin?.permalink}>
              <a>
                <h3 className="title">{peegin?.title}</h3>
              </a>
            </Link>
            <p>{peegin?.meaning}</p>
            <p className="example">Example</p>
            <p className="example-content">{peegin?.example}</p>
            <p className="origin">Origin: {peegin?.origin}</p>
            <div className="name">
              <h4>By</h4> &nbsp;
              <h4 className="namegreen">{peegin?.user?.name}</h4> &nbsp;
              <h4>{peegin?.created_at}</h4>
            </div>
            <div className="viewsandshare">
              <p className="views">{peegin?.views?.view} Views</p>
              <p className="share">
                Share &nbsp;
                <Link
                  className="shb"
                  href="http://www.facebook.com/sharer/sharer.php?u="
                >
                  <a target="_blank">
                    <Image
                      src="/fbshare.png"
                      alt="Submit Search"
                      width={20}
                      height={19}
                    />
                  </a>
                </Link>
                &nbsp;
                <Link href="https://twitter.com/intent/tweet?url=">
                  <a target="_blank">
                    <Image
                      src="/twittershare.png"
                      alt="Submit Search"
                      width={20}
                      height={19}
                    />
                  </a>
                </Link>
              </p>
            </div>
          </div>
        ))} */}
          </div>
        </div>

        <div className="rightsidebar">
          <TopRightSideBar />
          {/* <AddWordModal
              modalButton={modalButton}
              addnew={open}
              addnew2={setOpen}
              data1={isOpen}
              data3={setISOpen}
            /> */}
          <BottomRightSideBar />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ThePeegins;
