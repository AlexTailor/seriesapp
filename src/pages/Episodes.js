import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";
import Episode from "../components/Episode";

const Episodes = () => {
  const { episodes } = useContext(DetailContext);
  console.log(episodes);
  return (
    <ul>
      {episodes.episodes.map((episode, index) => (
        <Episode key={episode.id} index={index} episode={episode} />
      ))}
    </ul>
  );
};
export default Episodes;
