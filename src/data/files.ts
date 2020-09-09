import FileDto from "./FileDto";
import FileRegistry from "../components/system/FileRegistry";

// Images
import winxpbg from "../media/winxpbg.jpg";
import lenna from "../media/lenna.jpg";
import xd from "../media/xd.png";
import papa from "../media/yellowman.jpg";
import colorfullPixelsimg from "../media/random-pixels-wallpaper-big.jpg";
import lensimg from "../media/lens.jpg";
import treeimg from "../media/tree.jpg";
import eyeimg from "../media/eye.png";
import asiaimg from "../media/asia.jpg";
import earthimg from "../media/earth.jpg";
import img19 from "../media/19icon.png";

// Covers
import cafebelgacover from "../media/images/covers/cafe.jpg";
import europa from "../media/images/covers/europa.jpg";
import jarmark from "../media/images/covers/jarmark.jpg";
import pocztowkawwa from "../media/images/covers/pocztowkawwa.jpg";
import szprycer from "../media/images/covers/szprycer.jpg";

// Audio
const lancuch1 = require("../media/audio/songs/Taco Hemingway - Lancuch I Kiosk.mp3");
const lancuch2 = require("../media/audio/songs/Taco Hemingway - Lancuch II Korek.mp3");
const lancuch3 = require("../media/audio/songs/Taco Hemingway - Lancuch III Korpo.mp3");
const luxembourg = require("../media/audio/songs/Taco Hemingway - Luxembourg.mp3");
const mebp = require("../media/audio/songs/Taco Hemingway - Michael Essien Birthday Party.mp3");
const czlowiekz = require("../media/audio/songs/Taco Hemingway - Czlowiek z dziura zamiast krtani.mp3");
const alertrcb = require("../media/audio/songs/Taco Hemingway - Alert RCB feat. schafter.mp3");
const motorola = require("../media/audio/songs/Taco Hemingway - Motorola.mp3");
const cafebelga2031 = require("../media/audio/songs/Taco Hemingway - 2031.mp3");
const wszystkonaniby = require("../media/audio/songs/Taco Hemingway - Wszystko na niby.mp3");
const ztm = require("../media/audio/songs/Taco Hemingway - ZTM.mp3");
const nostalgia = require("../media/audio/songs/Taco Hemingway - Nostalgia.mp3");

const FilesDto: FileDto[] = [];
let id: number = 1;

//#region FOLDERS

// const driveC: FileDto = {
//     fileId: id++,
//     path: "Device/",
//     title: "Drive C",
//     componentId: FileRegistry.FileExlorer,
// };

const desktop: FileDto = {
    fileId: id++,
    path: "Drive C:/",
    title: "Desktop",
    componentId: FileRegistry.Desktop,
    prevFolderId: 2,
};

const thiscomp: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "This computer",
    componentId: FileRegistry.ThisComputer,
    prevFolderId: desktop.fileId,
};

const driveC: FileDto = {
    fileId: id++,
    path: "This computer/",
    title: "Drive C",
    componentId: FileRegistry.Drive,
    prevFolderId: thiscomp.fileId,
};

const imagesFolder: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "More images",
    componentId: FileRegistry.FileExplorer,
    prevFolderId: desktop.fileId,
};

const idontthinkso: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More images/",
    title: "+18",
    componentId: FileRegistry.FileExplorer,
    prevFolderId: imagesFolder.fileId,
};

const audioFolder: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "More sounds",
    componentId: FileRegistry.FileExplorer,
    prevFolderId: desktop.fileId,
};

//#endregion

//#region FILES

const paint: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Paint",
    componentId: FileRegistry.Paint,
    prevFolderId: desktop.fileId,
};

const snake: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Snake",
    componentId: FileRegistry.Snake,
    prevFolderId: desktop.fileId,
};

const hydra: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Hydra",
    componentId: FileRegistry.Hydra,
    prevFolderId: desktop.fileId,
};

const winamp: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Winamp",
    componentId: FileRegistry.Winamp,
    prevFolderId: desktop.fileId,
};

const robby: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Robby",
    componentId: FileRegistry.Robby,
    prevFolderId: desktop.fileId,
};

const impersonator: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Impersonator",
    componentId: FileRegistry.Impersonator,
    prevFolderId: desktop.fileId,
};

const herakles: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Herakles",
    componentId: FileRegistry.Herakles,
    prevFolderId: desktop.fileId,
};

const mineswepper: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Mineswepper",
    componentId: FileRegistry.Mineswepper,
    prevFolderId: desktop.fileId,
};

const resume: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Resume",
    componentId: FileRegistry.Resume,
    prevFolderId: desktop.fileId,
};

const wolfenstein: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Wolfenstein 3D",
    componentId: FileRegistry.Wolfenstein,
    prevFolderId: desktop.fileId,
};

//#endregion

//#region IMAGES

const lennaimg: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Lenna",
    componentId: FileRegistry.PhotoDisplay,
    prevFolderId: desktop.fileId,
    content: {
        source: lenna,
    },
};

const Wallpaper: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/",
    title: "Wallpaper",
    componentId: FileRegistry.PhotoDisplay,
    prevFolderId: desktop.fileId,
    content: {
        source: winxpbg,
    },
};

const colorfullPixels: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More images/",
    title: "Colorfull squares",
    componentId: FileRegistry.PhotoDisplay,
    prevFolderId: imagesFolder.fileId,
    content: {
        source: colorfullPixelsimg,
    },
};

const lens: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More images/",
    title: "Lens",
    componentId: FileRegistry.PhotoDisplay,
    prevFolderId: imagesFolder.fileId,
    content: {
        source: lensimg,
    },
};

const tree: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More images/",
    title: "Tree",
    componentId: FileRegistry.PhotoDisplay,
    prevFolderId: imagesFolder.fileId,
    content: {
        source: treeimg,
    },
};

const eye: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More images/",
    title: "AI eye",
    componentId: FileRegistry.PhotoDisplay,
    prevFolderId: imagesFolder.fileId,
    content: {
        source: eyeimg,
    },
};

const asia: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More images/",
    title: "Rocks",
    componentId: FileRegistry.PhotoDisplay,
    prevFolderId: imagesFolder.fileId,
    content: {
        source: asiaimg,
    },
};

const earth: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More images/",
    title: "Handful earth",
    componentId: FileRegistry.PhotoDisplay,
    prevFolderId: imagesFolder.fileId,
    content: {
        source: earthimg,
    },
};

const whyuopenthis: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More images/+18",
    title: "115648113331654",
    componentId: FileRegistry.PhotoDisplay,
    prevFolderId: idontthinkso.fileId,
    content: {
        source: img19,
    },
};

//#endregion

//#region AUDIO

const lancuch1audio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - Lancuch I Kiosk",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: jarmark,
        source: lancuch1,
    },
};

const lancuch2audio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - Lancuch 2 Korek",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: jarmark,
        source: lancuch2,
    },
};

const lancuch3audio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - Lancuch III Korpo",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: jarmark,
        source: lancuch3,
    },
};
const luxembourgaudio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - Luxembourg",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: europa,
        source: luxembourg,
    },
};
const mebpaudio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - Michael Essien Birthday Party",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: europa,
        source: mebp,
    },
};
const czlowiekzaudio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - Czlowiek z dziura zamiast krtani",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: pocztowkawwa,
        source: czlowiekz,
    },
};
const alertrcbaudio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - Alert RCB feat. schafter",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: pocztowkawwa,
        source: alertrcb,
    },
};

const motorolaaudio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - Motorola",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: cafebelgacover,
        source: motorola,
    },
};

const cafebelga2031audio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - 2031",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: cafebelgacover,
        source: cafebelga2031,
    },
};

const wszystkonanibyaudio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - Wszystko na niby",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: cafebelgacover,
        source: wszystkonaniby,
    },
};

const ztmaudio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - ZTM",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: cafebelgacover,
        source: ztm,
    },
};

const nostalgiaaudio: FileDto = {
    fileId: id++,
    path: "Drive C:/Desktop/More sounds/",
    title: "Taco Hemingway - Nostalgia",
    componentId: FileRegistry.Audio,
    prevFolderId: audioFolder.fileId,
    content: {
        cover: szprycer,
        source: nostalgia,
    },
};

//#endregion

FilesDto.push(
    driveC,
    thiscomp,
    desktop,
    mineswepper,
    resume,
    lennaimg,
    paint,
    hydra,
    winamp,
    robby,
    impersonator,
    herakles,
    snake,
    Wallpaper,
    wolfenstein,
    imagesFolder,
    audioFolder,
    colorfullPixels,
    lens,
    tree,
    eye,
    asia,
    earth,
    idontthinkso,
    whyuopenthis,

    lancuch1audio,
    lancuch2audio,
    lancuch3audio,
    luxembourgaudio,
    mebpaudio,
    czlowiekzaudio,
    alertrcbaudio,
    motorolaaudio,
    cafebelga2031audio,
    wszystkonanibyaudio,
    ztmaudio,
    nostalgiaaudio,
);

export default FilesDto;