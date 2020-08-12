import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";

export default function SearchResult() {
  const { searchValue } = useContext(DetailContext);

  return <div>{searchValue}</div>;
}
