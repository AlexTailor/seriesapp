import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";

export default function SearchedShows() {
  const { searchValue } = useContext(DetailContext);

  return <div>{searchValue}</div>;
}
