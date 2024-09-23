import { CreationWindowType } from "./types/WindowType";
import About from "./window-contents/About.vue";
import GamingISUFolder from "./window-contents/folder/GamingISUFolder.vue";
import IPLFolder from "./window-contents/folder/IPLFolder.vue";
import Level1Folder from "./window-contents/folder/Level1Folder.vue";
import PersonalFolder from "./window-contents/folder/PersonalFolder.vue";
import CharityStream from "./window-contents/gamingISU/CharityStream.vue";
import GEOpen from "./window-contents/gamingISU/GEOpen.vue";
import Tempest from "./window-contents/gamingISU/Tempest.vue";
import IPLVs from "./window-contents/ipl/IPLVs.vue";
import LowInk from "./window-contents/ipl/LowInk.vue";
import MapsIplabsInk from "./window-contents/ipl/MapsIplabsInk.vue";
import MediaCreator from "./window-contents/ipl/MediaCreator.vue";
import ProvingGrounds from "./window-contents/ipl/ProvingGrounds.vue";
import Sendouq from "./window-contents/ipl/Sendouq.vue";
import SwimOrSink from "./window-contents/ipl/SwimOrSink.vue";
import BattleOfBc5 from "./window-contents/level1/BattleOfBc5.vue";
import BattleOfBc6 from "./window-contents/level1/BattleOfBc6.vue";
import EggdogInv2024 from "./window-contents/level1/EggdogInv2024.vue";
import FullBloom2024 from "./window-contents/level1/FullBloom2024.vue";
import SmashCamp2024 from "./window-contents/level1/SmashCamp2024.vue";
import Riptide from "./window-contents/personal/Riptide.vue";

export const aboutWindow: CreationWindowType = {
    title: "About",
    component: About
}

export const level1FolderWindow: CreationWindowType = {
    title: "Level 1 Projects",
    component: Level1Folder
}

export const eggdogInv2024Window: CreationWindowType = {
    title: "Eggdog Invitational 2024",
    component: EggdogInv2024
}

export const smashCamp2024Window: CreationWindowType = {
    title: "Smash Camp: New Lands 2024",
    component: SmashCamp2024
}

export const battleOfBC6Window: CreationWindowType = {
    title: "Battle of BC 6",
    component: BattleOfBc6
}

export const fullBloom2024Window: CreationWindowType = {
    title: "Full Bloom 2024 + Genesis X",
    component: FullBloom2024
}

export const battleOfBC5Window: CreationWindowType = {
    title: "Battle of BC 5",
    component: BattleOfBc5
}

export const iplFolderWindow: CreationWindowType = {
    title: "Inkling Performance Labs Projects",
    component: IPLFolder
}

export const iplVsWindow: CreationWindowType = {
    title: "IPL VS",
    component: IPLVs
}

export const sendouqWindow: CreationWindowType = {
    title: "SendouQ Season Finale Stream",
    component: Sendouq
}

export const provingGroundsWindow: CreationWindowType = {
    title: "Proving Grounds",
    component: ProvingGrounds
}

export const swimOrSinkWindow: CreationWindowType = {
    title: "Swim or Sink",
    component: SwimOrSink
}

export const mapsIplabsInkWindow: CreationWindowType = {
    title: "maps.iplabs.ink",
    component: MapsIplabsInk
}

export const mediaCreatorWindow: CreationWindowType = {
    title: "IPL Media Creator",
    component: MediaCreator
}

export const lowInkWindow: CreationWindowType = {
    title: "Low Ink",
    component: LowInk
}

export const gamingISUFolderWindow: CreationWindowType = {
    title: "Gaming and Esports at ISU Projects",
    component: GamingISUFolder
}

export const geOpenWindow: CreationWindowType = {
    title: "GE Open",
    component: GEOpen
}

export const charityStreamWindow: CreationWindowType = {
    title: "Charity Stream 2023",
    component: CharityStream
}

export const tempestWindow: CreationWindowType = {
    title: "Tempest",
    component: Tempest
}

export const personalFolderWindow: CreationWindowType = {
    title: "Personal Projects",
    component: PersonalFolder
}

export const riptideWindow: CreationWindowType = {
    title: "Riptide",
    component: Riptide
}