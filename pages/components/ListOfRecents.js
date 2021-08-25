import Link from "next/link";
const ListOfRecents = (props) => {
  const peegins = props.data2;
  const loading = props.load;

  return (
    <div>
      <h1>Recent 100 Peegin</h1>
      {loading && <h1 className="loading">Loading...</h1>}
      {peegins &&
        peegins.map((peegin) => (
          <div className="preview" key={peegin?.permalink}>
            <Link href={"/" + peegin?.permalink}>
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
            <p className="views">{peegin?.views?.view} Views</p>
          </div>
        ))}
    </div>
  );
};

export default ListOfRecents;
