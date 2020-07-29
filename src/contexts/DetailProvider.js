import React, { useState } from "react";

export const DetailContext = React.createContext();

export function DetailProvider(props) {
  const [main, setMain] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [cast, setCast] = useState([]);
  const addMain = (main) => {
    setMain({ main });
  };
  const addEpisodes = (episodes) => {
    setEpisodes({ episodes });
  };
  const addCast = (cast) => {
    setCast({ cast });
  };

  return (
    <DetailContext.Provider
      value={{
        main,
        addMain,
        episodes,
        addEpisodes,
        cast,
        addCast,
      }}
    >
      {props.children}
    </DetailContext.Provider>
  );
}
