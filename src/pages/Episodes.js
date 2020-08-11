import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";
import Episode from "../components/Episode";
import SubNavBar from "../components/SubNavBar";

const Episodes = () => {
  const { episodes } = useContext(DetailContext);
  console.log(episodes);
  return (
    <div className="mainCont">
      <SubNavBar />
      <div>
        {episodes.episodes.map((episode, index) => (
          <Episode key={episode.id} index={index} episode={episode} />
        ))}
      </div>
    </div>
  );
};
export default Episodes;
