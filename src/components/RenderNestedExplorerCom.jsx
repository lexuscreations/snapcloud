"use client";

import { useState } from "react";
import { IconMapFn, at, findPathByName } from "../utils/index.jsx";

let explorerCached;

function RenderNestedExplorerCom({ explorer }) {
  const [expand, setExpand] = useState(false);

  explorerCached ??= explorer;

  const FNameHOC = ({ fName, iconMapKey }) => {
    const Icon = IconMapFn(iconMapKey);
    return (
      <span className="flex items-center gap-2.5 p-1">
        <Icon /> {fName}
      </span>
    );
  };

  const SingleFileNameCom = ({ expData }) => {
    const fExt = at(expData.name.split("."), -1);
    return (
      <a
        href={findPathByName([explorerCached], expData.name)}
        target="_blank"
        className="block transition transition-all ease-in-out transition-duration-300 active:scale-95 hover:bg-slate-200"
      >
        <FNameHOC fName={expData.name} iconMapKey={fExt} />
      </a>
    );
  };

  const SingleFolderNameCom = ({ fName }) => {
    const iconMapKey = expand ? "openfolder" : "closefolder";
    return <FNameHOC fName={fName} iconMapKey={iconMapKey} />;
  };

  return explorer.isFolder ? (
    <div className="mt-1.5">
      <div
        onClick={() => setExpand((prev) => !prev)}
        className="flex items-center justify-between py-1 px-2 cursor-pointer w-max gap-8 bg-slate-300"
      >
        <SingleFolderNameCom fName={explorer.name} />
      </div>

      <div className={`w-min ${expand ? "block" : "hidden"} pl-6`}>
        {explorer.items.map((exp) => (
          <RenderNestedExplorerCom key={exp.id} explorer={exp} />
        ))}
      </div>
    </div>
  ) : (
    <SingleFileNameCom expData={explorer} />
  );
}

export default RenderNestedExplorerCom;
