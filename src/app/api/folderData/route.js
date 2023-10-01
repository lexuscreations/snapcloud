import fs from "fs";
import pathModule from "path";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

const traverseDirectory = (path = "./public/") => {
  path = pathModule.resolve(path);

  const filesAndFolders = [];

  const directory = fs.readdirSync(path);

  directory.forEach((item) => {
    const fullPath = path + "/" + item;
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      filesAndFolders.push({
        id: uuidv4(),
        name: item,
        isFolder: true,
        items: traverseDirectory(fullPath),
      });
    } else if (stats.isFile()) {
      filesAndFolders.push({
        id: uuidv4(),
        name: item,
        isFolder: false,
        items: [],
      });
    }
  });

  return filesAndFolders;
};

export async function GET() {
  return NextResponse.json({ folderDataArr: traverseDirectory() });
}
