import React from "react";
import Card from "../components/Card";
import { useHttp } from "../hook/usehttp";

const Shows = (props) => {
  const [isLoading, fetchedData] = useHttp("https://api.tvmaze.com/shows", []);
  const shows = fetchedData ? fetchedData.data : [];

  if (isLoading) {
    return (
      <ul>
        {shows.map((show, index) => (
          <Card key={show.id} index={index} show={show} />
        ))}
      </ul>
    );
  }
};

export default React.memo(Shows);
