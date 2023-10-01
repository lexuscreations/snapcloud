import { VscFilePdf } from "react-icons/vsc";
import { GrDocumentZip } from "react-icons/gr";
import { SiJpeg, SiJavascript } from "react-icons/si";
import { TbBrandPython, TbBrandTypescript } from "react-icons/tb";
import { AiOutlineFileJpg, AiOutlineFileGif } from "react-icons/ai";
import { PiFolderNotchFill, PiFolderNotchOpenFill } from "react-icons/pi";
import {
  BsFiletypeMp3,
  BsFiletypePng,
  BsFiletypeMp4,
  BsFiletypeDocx,
  BsFiletypeXlsx,
  BsFiletypePptx,
  BsFiletypeHtml,
  BsFiletypeCss,
  BsFiletypeJava,
  BiLogoCPlusPlus,
  BsFiletypePhp,
  BsFiletypeSql,
  BsFiletypeJson,
  BsFiletypeXml,
  BsFiletypeTxt,
  BsFiletypeCsv,
  BsFiletypeSvg,
  BsFiletypeBmp,
} from "react-icons/bs";

export const IconMapFn = (extension) => {
  const map = {
    jpeg: SiJpeg,
    openfolder: PiFolderNotchOpenFill,
    closefolder: PiFolderNotchFill,
    mp3: BsFiletypeMp3,
    jpg: AiOutlineFileJpg,
    png: BsFiletypePng,
    mp4: BsFiletypeMp4,
    avi: () => "📄",
    gif: AiOutlineFileGif,
    pdf: VscFilePdf,
    docx: BsFiletypeDocx,
    xlsx: BsFiletypeXlsx,
    pptx: BsFiletypePptx,
    html: BsFiletypeHtml,
    css: BsFiletypeCss,
    js: SiJavascript,
    ts: TbBrandTypescript,
    py: TbBrandPython,
    java: BsFiletypeJava,
    cpp: BiLogoCPlusPlus,
    php: BsFiletypePhp,
    sql: BsFiletypeSql,
    json: BsFiletypeJson,
    xml: BsFiletypeXml,
    txt: BsFiletypeTxt,
    log: () => "📄",
    csv: BsFiletypeCsv,
    zip: GrDocumentZip,
    rar: () => "📄",
    tar: () => "📄",
    gz: () => "📄",
    bmp: BsFiletypeBmp,
    svg: BsFiletypeSvg,
  };

  return map[extension];
};

export const at = (arr, index) => {
  if (index < 0) index = arr.length + index;
  return index >= 0 && index < arr.length ? arr[index] : undefined;
};

export const findPathByName = (data, targetName, currentPath = []) => {
  for (const item of data) {
    const newPath = [...currentPath, item.name];

    if (item.name === targetName)
      return `${window.location.origin}/${newPath.join("/")}`;

    if (item.isFolder && item.items) {
      const result = findPathByName(item.items, targetName, newPath);
      if (result) return result;
    }
  }

  return null;
};
