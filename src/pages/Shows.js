import React, { useContext } from "react";
import Card from "../components/Card";
import { DetailContext } from "../contexts/DetailProvider";

const Shows = (props) => {
  // const [isLoading, fetchedData] = useHttp("https://api.tvmaze.com/shows", []);
  // const shows = fetchedData ? fetchedData.data : [];

  const { series } = useContext(DetailContext);

  return (
    <div className="mainCont">
      <div className="box">
        {series.map((show, index) => (
          <Card key={show.id} index={index} show={show} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Shows);
