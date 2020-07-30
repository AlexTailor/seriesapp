import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";
import Episode from "../components/Episode";

export default function Episodes() {
  const { episodes } = useContext(DetailContext);

  return (
    <div className="mainCont">
      <div>
        {episodes.episodes.map((episode, index) => (
          <Episode key={episode.id} index={index} episode={episode} />
        ))}
      </div>
    </div>
  );
}
