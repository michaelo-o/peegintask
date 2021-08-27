import Image from "next/image";

const RightSideBar = () => {
  return (
    <>
      <div className="brandlogo">
        <div className="imgb">
          <Image
            src="/peegin-brand.png"
            alt="site logo"
            width={210}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
