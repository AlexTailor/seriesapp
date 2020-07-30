import React from "react";
import Card from "../components/Card";
import { useHttp } from "../hook/usehttp";

const Shows = (props) => {
  const [isLoading, fetchedData] = useHttp("https://api.tvmaze.com/shows", []);
  const shows = fetchedData ? fetchedData.data : [];

  if (isLoading) {
    return (
      <div className="mainCont">
        <div className="box">
          {shows.map((show, index) => (
            <Card key={show.id} index={index} show={show} />
          ))}
        </div>
      </div>
    );
  }
};

export default React.memo(Shows);
