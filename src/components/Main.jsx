"use client";

import { useEffect, useState } from "react";
import RenderNestedExplorerCom from "../components/RenderNestedExplorerCom";

const Main = () => {
  const [explorerData, setExplorerData] = useState([]);

  const fetchExplorerData = async () => {
    const res = await fetch("/api/folderData");
    const { folderDataArr } = await res.json();
    setExplorerData(folderDataArr);
  };

  useEffect(() => {
    fetchExplorerData();
  }, []);

  return (
    <main>
      {explorerData.length > 0 ? (
        <RenderNestedExplorerCom explorer={explorerData[0]} />
      ) : (
        <h1 className="my-1.5">Loading...</h1>
      )}
    </main>
  );
};

export default Main;
