import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const ListOfRecents = (props) => {
  const peegins = props.data2;
  const loading = props.load;

  const search = props.search;
  const setSearch = props.setSearch;

  const [nores, SetNoRes] = useState('Recent 100 Peegin')

  useEffect(() => {
    setSearch("")
  }, [peegins])

  //everything paginate here
  // const peeginsSliced = peegins.slice(0, 50)

  const [pageNumber, setpageNumber] = useState(0)
  const peeginsPerPage = 20
  const pagesVisited = pageNumber * peeginsPerPage

  const displayPeegins = peegins.slice(pagesVisited, pagesVisited + peeginsPerPage).filter((peegin) => {
    if (search === "") {
      return peegin;
    } else if (
      peegin?.title.toLowerCase().includes(search.toLowerCase())
    ) {
      return peegin;
    } else if (
      peegin?.title.toLowerCase().includes(search.toLowerCase())
    ) return SetNoRes('No Results')
  })
    .map((peegin) => (
      <div className="preview" key={peegin?.permalink}>
        <Link href={"/peegins/" + peegin?.permalink}>
          <a>
            <h3 className="title">{peegin?.title}</h3>
          </a>
        </Link>
        <p>{peegin?.meaning}</p>
        <p className="example">Example</p>
        <p className="example-content">{peegin?.example}</p>
        {/* <p className="origin">Origin: {peegin?.origin}</p> */}
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
    ))

  const pageCount = Math.ceil(peegins.length / peeginsPerPage)
  const changePage = ({ selected }) => { //selected is a ReactPaginate object-it is the number for the page we want to move to
    { setpageNumber(selected) };
  }


  return (
    <div>
      <h1>{nores}</h1>
      {loading && <h1 className="loading">Loading...</h1>}

      {displayPeegins}

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}

        //this is where the classname for the styles go
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default ListOfRecents;
