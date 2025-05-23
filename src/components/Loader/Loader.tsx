import BarLoader from "react-spinners/BarLoader";
import { FC } from "react";

const override: React.CSSProperties = {
  display: "block",
  margin: "30px auto",
};

const Loader: FC = () => {
  return (
    <>
      <BarLoader
        color="#5f99c9"
        height={4}
        loading={true}
        speedMultiplier={0.5}
        width={465}
        cssOverride={override}
      />
    </>
  );
};

export default Loader;
