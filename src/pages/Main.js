import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";

const Main = () => {
  const { main } = useContext(DetailContext);
  return (
    <div>
      <p>{main.main.name}</p>
      {/* <img alt={main.main.name} src={main.main.image.medium} /> */}
    </div>
  );
};

export default React.memo(Main);
