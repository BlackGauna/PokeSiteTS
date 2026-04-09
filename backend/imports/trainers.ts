type AIFlags =
  | "AI-SCRIPT-CHECK-BAD-MOVE"
  | "AI-SCRIPT-TRY-TO-FAINT"
  | "AI-SCRIPT-CHECK-VIABILITY"
  | "AI-SCRIPT-SETUP-FIRST-TURN"
  | "AI-SCRIPT-RISKY"

export const trainers: {
  [key: string]: {
    trainerClass: string
    trainerName: string
    items: any
    doubleBattle: boolean
    aiFlags: AIFlags[]
  }
} = {
  Sawyer1: {
    trainerClass: "HIKER",
    trainerName: "SAWYER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  GruntAquaHideout1: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntAquaHideout2: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntAquaHideout3: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntAquaHideout4: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSeafloorCavern1: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSeafloorCavern2: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSeafloorCavern3: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Gabrielle1: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "GABRIELLE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntPetalburgWoods: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Marcel: {
    trainerClass: "COOLTRAINER",

    trainerName: "MARCEL",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Alberto: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "ALBERTO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ed: {
    trainerClass: "COLLECTOR",

    trainerName: "ED",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSeafloorCavern4: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Declan: {
    trainerClass: "SWIMMER-M",

    trainerName: "DECLAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntRusturfTunnel: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntWeatherInst1: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntWeatherInst2: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntWeatherInst3: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMuseum1: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMuseum2: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSpaceCenter1: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMtPyre1: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMtPyre2: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMtPyre3: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntWeatherInst4: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntAquaHideout5: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntAquaHideout6: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Fredrick: {
    trainerClass: "EXPERT",

    trainerName: "FREDRICK",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Matt: {
    trainerClass: "AQUA-ADMIN",

    trainerName: "MATT",
    items: ["super-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Zander: {
    trainerClass: "BLACK-BELT",

    trainerName: "ZANDER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  ShellyWeatherInstitute: {
    trainerClass: "AQUA-ADMIN",

    trainerName: "SHELLY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  ShellySeafloorCavern: {
    trainerClass: "AQUA-ADMIN",

    trainerName: "SHELLY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Archie: {
    trainerClass: "AQUA-LEADER",

    trainerName: "ARCHIE",
    items: ["super-potion", "super-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Leah: {
    trainerClass: "HEX-MANIAC",

    trainerName: "LEAH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Daisy: {
    trainerClass: "AROMA-LADY",

    trainerName: "DAISY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Rose1: {
    trainerClass: "AROMA-LADY",

    trainerName: "ROSE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Felix: {
    trainerClass: "COOLTRAINER",

    trainerName: "FELIX",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Violet: {
    trainerClass: "AROMA-LADY",

    trainerName: "VIOLET",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Rose2: {
    trainerClass: "AROMA-LADY",

    trainerName: "ROSE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Rose3: {
    trainerClass: "AROMA-LADY",

    trainerName: "ROSE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Rose4: {
    trainerClass: "AROMA-LADY",

    trainerName: "ROSE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Rose5: {
    trainerClass: "AROMA-LADY",

    trainerName: "ROSE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dusty1: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "DUSTY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Chip: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "CHIP",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Foster: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "FOSTER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dusty2: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "DUSTY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dusty3: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "DUSTY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dusty4: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "DUSTY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dusty5: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "DUSTY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GabbyAndTy1: {
    trainerClass: "INTERVIEWER",

    trainerName: "GABBY & TY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GabbyAndTy2: {
    trainerClass: "INTERVIEWER",

    trainerName: "GABBY & TY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GabbyAndTy3: {
    trainerClass: "INTERVIEWER",

    trainerName: "GABBY & TY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GabbyAndTy4: {
    trainerClass: "INTERVIEWER",

    trainerName: "GABBY & TY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GabbyAndTy5: {
    trainerClass: "INTERVIEWER",

    trainerName: "GABBY & TY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GabbyAndTy6: {
    trainerClass: "INTERVIEWER",

    trainerName: "GABBY & TY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lola1: {
    trainerClass: "TUBER-F",

    trainerName: "LOLA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Austina: {
    trainerClass: "TUBER-F",

    trainerName: "AUSTINA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Gwen: {
    trainerClass: "TUBER-F",

    trainerName: "GWEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lola2: {
    trainerClass: "TUBER-F",

    trainerName: "LOLA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lola3: {
    trainerClass: "TUBER-F",

    trainerName: "LOLA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lola4: {
    trainerClass: "TUBER-F",

    trainerName: "LOLA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lola5: {
    trainerClass: "TUBER-F",

    trainerName: "LOLA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ricky1: {
    trainerClass: "TUBER-M",

    trainerName: "RICKY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Simon: {
    trainerClass: "TUBER-M",

    trainerName: "SIMON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Charlie: {
    trainerClass: "TUBER-M",

    trainerName: "CHARLIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ricky2: {
    trainerClass: "TUBER-M",

    trainerName: "RICKY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ricky3: {
    trainerClass: "TUBER-M",

    trainerName: "RICKY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ricky4: {
    trainerClass: "TUBER-M",

    trainerName: "RICKY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ricky5: {
    trainerClass: "TUBER-M",

    trainerName: "RICKY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Randall: {
    trainerClass: "COOLTRAINER",

    trainerName: "RANDALL",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Parker: {
    trainerClass: "COOLTRAINER",

    trainerName: "PARKER",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  George: {
    trainerClass: "COOLTRAINER",

    trainerName: "GEORGE",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Berke: {
    trainerClass: "COOLTRAINER",

    trainerName: "BERKE",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Braxton: {
    trainerClass: "COOLTRAINER",

    trainerName: "BRAXTON",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Vincent: {
    trainerClass: "COOLTRAINER",

    trainerName: "VINCENT",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Leroy: {
    trainerClass: "COOLTRAINER",

    trainerName: "LEROY",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Wilton1: {
    trainerClass: "COOLTRAINER",

    trainerName: "WILTON",
    items: ["super-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Edgar: {
    trainerClass: "COOLTRAINER",

    trainerName: "EDGAR",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Albert: {
    trainerClass: "COOLTRAINER",

    trainerName: "ALBERT",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Samuel: {
    trainerClass: "COOLTRAINER",

    trainerName: "SAMUEL",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Vito: {
    trainerClass: "COOLTRAINER",

    trainerName: "VITO",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Owen: {
    trainerClass: "COOLTRAINER",

    trainerName: "OWEN",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Wilton2: {
    trainerClass: "COOLTRAINER",

    trainerName: "WILTON",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Wilton3: {
    trainerClass: "COOLTRAINER",

    trainerName: "WILTON",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Wilton4: {
    trainerClass: "COOLTRAINER",

    trainerName: "WILTON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Wilton5: {
    trainerClass: "COOLTRAINER",

    trainerName: "WILTON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Warren: {
    trainerClass: "COOLTRAINER",

    trainerName: "WARREN",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Mary: {
    trainerClass: "COOLTRAINER",

    trainerName: "MARY",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Alexia: {
    trainerClass: "COOLTRAINER",

    trainerName: "ALEXIA",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Jody: {
    trainerClass: "COOLTRAINER",

    trainerName: "JODY",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  Wendy: {
    trainerClass: "COOLTRAINER",

    trainerName: "WENDY",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  Keira: {
    trainerClass: "COOLTRAINER",

    trainerName: "KEIRA",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  Brooke1: {
    trainerClass: "COOLTRAINER",

    trainerName: "BROOKE",
    items: ["super-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Jennifer: {
    trainerClass: "COOLTRAINER",

    trainerName: "JENNIFER",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Hope: {
    trainerClass: "COOLTRAINER",

    trainerName: "HOPE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Shannon: {
    trainerClass: "COOLTRAINER",

    trainerName: "SHANNON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Michelle: {
    trainerClass: "COOLTRAINER",

    trainerName: "MICHELLE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Caroline: {
    trainerClass: "COOLTRAINER",

    trainerName: "CAROLINE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Julie: {
    trainerClass: "COOLTRAINER",

    trainerName: "JULIE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Brooke2: {
    trainerClass: "COOLTRAINER",

    trainerName: "BROOKE",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Brooke3: {
    trainerClass: "COOLTRAINER",

    trainerName: "BROOKE",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Brooke4: {
    trainerClass: "COOLTRAINER",

    trainerName: "BROOKE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Brooke5: {
    trainerClass: "COOLTRAINER",

    trainerName: "BROOKE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Patricia: {
    trainerClass: "HEX-MANIAC",

    trainerName: "PATRICIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kindra: {
    trainerClass: "HEX-MANIAC",

    trainerName: "KINDRA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tammy: {
    trainerClass: "HEX-MANIAC",

    trainerName: "TAMMY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Valerie1: {
    trainerClass: "HEX-MANIAC",

    trainerName: "VALERIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tasha: {
    trainerClass: "HEX-MANIAC",

    trainerName: "TASHA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Valerie2: {
    trainerClass: "HEX-MANIAC",

    trainerName: "VALERIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Valerie3: {
    trainerClass: "HEX-MANIAC",

    trainerName: "VALERIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Valerie4: {
    trainerClass: "HEX-MANIAC",

    trainerName: "VALERIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Valerie5: {
    trainerClass: "HEX-MANIAC",

    trainerName: "VALERIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cindy1: {
    trainerClass: "LADY",

    trainerName: "CINDY",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Daphne: {
    trainerClass: "LADY",

    trainerName: "DAPHNE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSpaceCenter2: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cindy2: {
    trainerClass: "LADY",

    trainerName: "CINDY",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Brianna: {
    trainerClass: "LADY",

    trainerName: "BRIANNA",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Naomi: {
    trainerClass: "LADY",

    trainerName: "NAOMI",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cindy3: {
    trainerClass: "LADY",

    trainerName: "CINDY",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cindy4: {
    trainerClass: "LADY",

    trainerName: "CINDY",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cindy5: {
    trainerClass: "LADY",

    trainerName: "CINDY",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cindy6: {
    trainerClass: "LADY",

    trainerName: "CINDY",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Melissa: {
    trainerClass: "BEAUTY",

    trainerName: "MELISSA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Sheila: {
    trainerClass: "BEAUTY",

    trainerName: "SHEILA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Shirley: {
    trainerClass: "BEAUTY",

    trainerName: "SHIRLEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jessica1: {
    trainerClass: "BEAUTY",

    trainerName: "JESSICA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Connie: {
    trainerClass: "BEAUTY",

    trainerName: "CONNIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Bridget: {
    trainerClass: "BEAUTY",

    trainerName: "BRIDGET",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Olivia: {
    trainerClass: "BEAUTY",

    trainerName: "OLIVIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tiffany: {
    trainerClass: "BEAUTY",

    trainerName: "TIFFANY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jessica2: {
    trainerClass: "BEAUTY",

    trainerName: "JESSICA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jessica3: {
    trainerClass: "BEAUTY",

    trainerName: "JESSICA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jessica4: {
    trainerClass: "BEAUTY",

    trainerName: "JESSICA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jessica5: {
    trainerClass: "BEAUTY",

    trainerName: "JESSICA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Winston1: {
    trainerClass: "RICH-BOY",

    trainerName: "WINSTON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Mollie: {
    trainerClass: "EXPERT",

    trainerName: "MOLLIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Garret: {
    trainerClass: "RICH-BOY",

    trainerName: "GARRET",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Winston2: {
    trainerClass: "RICH-BOY",

    trainerName: "WINSTON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Winston3: {
    trainerClass: "RICH-BOY",

    trainerName: "WINSTON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Winston4: {
    trainerClass: "RICH-BOY",

    trainerName: "WINSTON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Winston5: {
    trainerClass: "RICH-BOY",

    trainerName: "WINSTON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Steve1: {
    trainerClass: "POKEMANIAC",

    trainerName: "STEVE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Thalia1: {
    trainerClass: "BEAUTY",

    trainerName: "THALIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Mark: {
    trainerClass: "POKEMANIAC",

    trainerName: "MARK",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMtChimney1: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Steve2: {
    trainerClass: "POKEMANIAC",

    trainerName: "STEVE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Steve3: {
    trainerClass: "POKEMANIAC",

    trainerName: "STEVE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Steve4: {
    trainerClass: "POKEMANIAC",

    trainerName: "STEVE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Steve5: {
    trainerClass: "POKEMANIAC",

    trainerName: "STEVE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Luis: {
    trainerClass: "SWIMMER-M",

    trainerName: "LUIS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dominik: {
    trainerClass: "SWIMMER-M",

    trainerName: "DOMINIK",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Douglas: {
    trainerClass: "SWIMMER-M",

    trainerName: "DOUGLAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Darrin: {
    trainerClass: "SWIMMER-M",

    trainerName: "DARRIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tony1: {
    trainerClass: "SWIMMER-M",

    trainerName: "TONY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jerome: {
    trainerClass: "SWIMMER-M",

    trainerName: "JEROME",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Matthew: {
    trainerClass: "SWIMMER-M",

    trainerName: "MATTHEW",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  David: {
    trainerClass: "SWIMMER-M",

    trainerName: "DAVID",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Spencer: {
    trainerClass: "SWIMMER-M",

    trainerName: "SPENCER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Roland: {
    trainerClass: "SWIMMER-M",

    trainerName: "ROLAND",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nolen: {
    trainerClass: "SWIMMER-M",

    trainerName: "NOLEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Stan: {
    trainerClass: "SWIMMER-M",

    trainerName: "STAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Barry: {
    trainerClass: "SWIMMER-M",

    trainerName: "BARRY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dean: {
    trainerClass: "SWIMMER-M",

    trainerName: "DEAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Rodney: {
    trainerClass: "SWIMMER-M",

    trainerName: "RODNEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Richard: {
    trainerClass: "SWIMMER-M",

    trainerName: "RICHARD",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Herman: {
    trainerClass: "SWIMMER-M",

    trainerName: "HERMAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Santiago: {
    trainerClass: "SWIMMER-M",

    trainerName: "SANTIAGO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Gilbert: {
    trainerClass: "SWIMMER-M",

    trainerName: "GILBERT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Franklin: {
    trainerClass: "SWIMMER-M",

    trainerName: "FRANKLIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kevin: {
    trainerClass: "SWIMMER-M",

    trainerName: "KEVIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jack: {
    trainerClass: "SWIMMER-M",

    trainerName: "JACK",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dudley: {
    trainerClass: "SWIMMER-M",

    trainerName: "DUDLEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Chad: {
    trainerClass: "SWIMMER-M",

    trainerName: "CHAD",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tony2: {
    trainerClass: "SWIMMER-M",

    trainerName: "TONY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tony3: {
    trainerClass: "SWIMMER-M",

    trainerName: "TONY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tony4: {
    trainerClass: "SWIMMER-M",

    trainerName: "TONY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tony5: {
    trainerClass: "SWIMMER-M",

    trainerName: "TONY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Takao: {
    trainerClass: "BLACK-BELT",

    trainerName: "TAKAO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Hitoshi: {
    trainerClass: "BLACK-BELT",

    trainerName: "HITOSHI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kiyo: {
    trainerClass: "BLACK-BELT",

    trainerName: "KIYO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Koichi: {
    trainerClass: "BLACK-BELT",

    trainerName: "KOICHI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nob1: {
    trainerClass: "BLACK-BELT",

    trainerName: "NOB",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nob2: {
    trainerClass: "BLACK-BELT",

    trainerName: "NOB",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nob3: {
    trainerClass: "BLACK-BELT",

    trainerName: "NOB",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nob4: {
    trainerClass: "BLACK-BELT",

    trainerName: "NOB",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nob5: {
    trainerClass: "BLACK-BELT",

    trainerName: "NOB",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Yuji: {
    trainerClass: "BLACK-BELT",

    trainerName: "YUJI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Daisuke: {
    trainerClass: "BLACK-BELT",

    trainerName: "DAISUKE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Atsushi: {
    trainerClass: "BLACK-BELT",

    trainerName: "ATSUSHI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kirk: {
    trainerClass: "GUITARIST",

    trainerName: "KIRK",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntAquaHideout7: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntAquaHideout8: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Shawn: {
    trainerClass: "GUITARIST",

    trainerName: "SHAWN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Fernando1: {
    trainerClass: "GUITARIST",

    trainerName: "FERNANDO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dalton1: {
    trainerClass: "GUITARIST",

    trainerName: "DALTON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dalton2: {
    trainerClass: "GUITARIST",

    trainerName: "DALTON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dalton3: {
    trainerClass: "GUITARIST",

    trainerName: "DALTON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dalton4: {
    trainerClass: "GUITARIST",

    trainerName: "DALTON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dalton5: {
    trainerClass: "GUITARIST",

    trainerName: "DALTON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cole: {
    trainerClass: "KINDLER",

    trainerName: "COLE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jeff: {
    trainerClass: "KINDLER",

    trainerName: "JEFF",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Axle: {
    trainerClass: "KINDLER",

    trainerName: "AXLE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jace: {
    trainerClass: "KINDLER",

    trainerName: "JACE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Keegan: {
    trainerClass: "KINDLER",

    trainerName: "KEEGAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Bernie1: {
    trainerClass: "KINDLER",

    trainerName: "BERNIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Bernie2: {
    trainerClass: "KINDLER",

    trainerName: "BERNIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Bernie3: {
    trainerClass: "KINDLER",

    trainerName: "BERNIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Bernie4: {
    trainerClass: "KINDLER",

    trainerName: "BERNIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Bernie5: {
    trainerClass: "KINDLER",

    trainerName: "BERNIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Drew: {
    trainerClass: "CAMPER",

    trainerName: "DREW",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Beau: {
    trainerClass: "CAMPER",

    trainerName: "BEAU",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Larry: {
    trainerClass: "CAMPER",

    trainerName: "LARRY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Shane: {
    trainerClass: "CAMPER",

    trainerName: "SHANE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Justin: {
    trainerClass: "CAMPER",

    trainerName: "JUSTIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ethan1: {
    trainerClass: "CAMPER",

    trainerName: "ETHAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Autumn: {
    trainerClass: "PICNICKER",

    trainerName: "AUTUMN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Travis: {
    trainerClass: "CAMPER",

    trainerName: "TRAVIS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ethan2: {
    trainerClass: "CAMPER",

    trainerName: "ETHAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ethan3: {
    trainerClass: "CAMPER",

    trainerName: "ETHAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ethan4: {
    trainerClass: "CAMPER",

    trainerName: "ETHAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ethan5: {
    trainerClass: "CAMPER",

    trainerName: "ETHAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Brent: {
    trainerClass: "BUG-MANIAC",

    trainerName: "BRENT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Donald: {
    trainerClass: "BUG-MANIAC",

    trainerName: "DONALD",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Taylor: {
    trainerClass: "BUG-MANIAC",

    trainerName: "TAYLOR",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jeffrey1: {
    trainerClass: "BUG-MANIAC",

    trainerName: "JEFFREY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Derek: {
    trainerClass: "BUG-MANIAC",

    trainerName: "DEREK",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jeffrey2: {
    trainerClass: "BUG-MANIAC",

    trainerName: "JEFFREY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jeffrey3: {
    trainerClass: "BUG-MANIAC",

    trainerName: "JEFFREY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jeffrey4: {
    trainerClass: "BUG-MANIAC",

    trainerName: "JEFFREY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jeffrey5: {
    trainerClass: "BUG-MANIAC",

    trainerName: "JEFFREY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Edward: {
    trainerClass: "PSYCHIC",

    trainerName: "EDWARD",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Preston: {
    trainerClass: "PSYCHIC",

    trainerName: "PRESTON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Virgil: {
    trainerClass: "PSYCHIC",

    trainerName: "VIRGIL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Blake: {
    trainerClass: "PSYCHIC",

    trainerName: "BLAKE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  William: {
    trainerClass: "PSYCHIC",

    trainerName: "WILLIAM",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Joshua: {
    trainerClass: "PSYCHIC",

    trainerName: "JOSHUA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cameron1: {
    trainerClass: "PSYCHIC",

    trainerName: "CAMERON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cameron2: {
    trainerClass: "PSYCHIC",

    trainerName: "CAMERON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cameron3: {
    trainerClass: "PSYCHIC",

    trainerName: "CAMERON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cameron4: {
    trainerClass: "PSYCHIC",

    trainerName: "CAMERON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cameron5: {
    trainerClass: "PSYCHIC",

    trainerName: "CAMERON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jaclyn: {
    trainerClass: "PSYCHIC",

    trainerName: "JACLYN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Hannah: {
    trainerClass: "PSYCHIC",

    trainerName: "HANNAH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Samantha: {
    trainerClass: "PSYCHIC",

    trainerName: "SAMANTHA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Maura: {
    trainerClass: "PSYCHIC",

    trainerName: "MAURA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kayla: {
    trainerClass: "PSYCHIC",

    trainerName: "KAYLA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Alexis: {
    trainerClass: "PSYCHIC",

    trainerName: "ALEXIS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jacki1: {
    trainerClass: "PSYCHIC",

    trainerName: "JACKI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jacki2: {
    trainerClass: "PSYCHIC",

    trainerName: "JACKI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jacki3: {
    trainerClass: "PSYCHIC",

    trainerName: "JACKI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jacki4: {
    trainerClass: "PSYCHIC",

    trainerName: "JACKI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jacki5: {
    trainerClass: "PSYCHIC",

    trainerName: "JACKI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Walter1: {
    trainerClass: "GENTLEMAN",

    trainerName: "WALTER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Micah: {
    trainerClass: "GENTLEMAN",

    trainerName: "MICAH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Thomas: {
    trainerClass: "GENTLEMAN",

    trainerName: "THOMAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Walter2: {
    trainerClass: "GENTLEMAN",

    trainerName: "WALTER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Walter3: {
    trainerClass: "GENTLEMAN",

    trainerName: "WALTER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Walter4: {
    trainerClass: "GENTLEMAN",

    trainerName: "WALTER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Walter5: {
    trainerClass: "GENTLEMAN",

    trainerName: "WALTER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Sidney: {
    trainerClass: "ELITE-FOUR",

    trainerName: "SIDNEY",
    items: ["full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: [
      "AI-SCRIPT-CHECK-BAD-MOVE",
      "AI-SCRIPT-TRY-TO-FAINT",
      "AI-SCRIPT-CHECK-VIABILITY",
      "AI-SCRIPT-SETUP-FIRST-TURN",
    ],
  },

  Phoebe: {
    trainerClass: "ELITE-FOUR",

    trainerName: "PHOEBE",
    items: ["full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Glacia: {
    trainerClass: "ELITE-FOUR",

    trainerName: "GLACIA",
    items: ["full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Drake: {
    trainerClass: "ELITE-FOUR",

    trainerName: "DRAKE",
    items: ["full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Roxanne1: {
    trainerClass: "LEADER",

    trainerName: "ROXANNE",
    items: ["potion", "potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Brawly1: {
    trainerClass: "LEADER",

    trainerName: "BRAWLY",
    items: ["super-potion", "super-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Wattson1: {
    trainerClass: "LEADER",

    trainerName: "WATTSON",
    items: ["super-potion", "super-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Flannery1: {
    trainerClass: "LEADER",

    trainerName: "FLANNERY",
    items: ["hyper-potion", "hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Norman1: {
    trainerClass: "LEADER",

    trainerName: "NORMAN",
    items: ["hyper-potion", "hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Winona1: {
    trainerClass: "LEADER",

    trainerName: "WINONA",
    items: ["hyper-potion", "hyper-potion"],
    doubleBattle: false,
    aiFlags: [
      "AI-SCRIPT-CHECK-BAD-MOVE",
      "AI-SCRIPT-TRY-TO-FAINT",
      "AI-SCRIPT-CHECK-VIABILITY",
      "AI-SCRIPT-RISKY",
    ],
  },

  TateAndLiza1: {
    trainerClass: "LEADER",

    trainerName: "TATE&LIZA",
    items: ["hyper-potion", "hyper-potion", "hyper-potion", "hyper-potion"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Juan1: {
    trainerClass: "LEADER",

    trainerName: "JUAN",
    items: ["hyper-potion", "hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Jerry1: {
    trainerClass: "SCHOOL-KID",

    trainerName: "JERRY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ted: {
    trainerClass: "SCHOOL-KID",

    trainerName: "TED",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Paul: {
    trainerClass: "SCHOOL-KID",

    trainerName: "PAUL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jerry2: {
    trainerClass: "SCHOOL-KID",

    trainerName: "JERRY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jerry3: {
    trainerClass: "SCHOOL-KID",

    trainerName: "JERRY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jerry4: {
    trainerClass: "SCHOOL-KID",

    trainerName: "JERRY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jerry5: {
    trainerClass: "SCHOOL-KID",

    trainerName: "JERRY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Karen1: {
    trainerClass: "SCHOOL-KID",

    trainerName: "KAREN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Georgia: {
    trainerClass: "SCHOOL-KID",

    trainerName: "GEORGIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Karen2: {
    trainerClass: "SCHOOL-KID",

    trainerName: "KAREN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Karen3: {
    trainerClass: "SCHOOL-KID",

    trainerName: "KAREN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Karen4: {
    trainerClass: "SCHOOL-KID",

    trainerName: "KAREN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Karen5: {
    trainerClass: "SCHOOL-KID",

    trainerName: "KAREN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  KateAndJoy: {
    trainerClass: "SR-AND-JR",

    trainerName: "KATE & JOY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AnnaAndMeg1: {
    trainerClass: "SR-AND-JR",

    trainerName: "ANNA & MEG",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AnnaAndMeg2: {
    trainerClass: "SR-AND-JR",

    trainerName: "ANNA & MEG",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AnnaAndMeg3: {
    trainerClass: "SR-AND-JR",

    trainerName: "ANNA & MEG",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AnnaAndMeg4: {
    trainerClass: "SR-AND-JR",

    trainerName: "ANNA & MEG",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AnnaAndMeg5: {
    trainerClass: "SR-AND-JR",

    trainerName: "ANNA & MEG",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Victor: {
    trainerClass: "WINSTRATE",

    trainerName: "VICTOR",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Miguel1: {
    trainerClass: "POKEFAN",

    trainerName: "MIGUEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Colton: {
    trainerClass: "POKEFAN",

    trainerName: "COLTON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Miguel2: {
    trainerClass: "POKEFAN",

    trainerName: "MIGUEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Miguel3: {
    trainerClass: "POKEFAN",

    trainerName: "MIGUEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Miguel4: {
    trainerClass: "POKEFAN",

    trainerName: "MIGUEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Miguel5: {
    trainerClass: "POKEFAN",

    trainerName: "MIGUEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Victoria: {
    trainerClass: "WINSTRATE",

    trainerName: "VICTORIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT"],
  },

  Vanessa: {
    trainerClass: "POKEFAN",

    trainerName: "VANESSA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Bethany: {
    trainerClass: "POKEFAN",

    trainerName: "BETHANY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isabel1: {
    trainerClass: "POKEFAN",

    trainerName: "ISABEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isabel2: {
    trainerClass: "POKEFAN",

    trainerName: "ISABEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isabel3: {
    trainerClass: "POKEFAN",

    trainerName: "ISABEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isabel4: {
    trainerClass: "POKEFAN",

    trainerName: "ISABEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isabel5: {
    trainerClass: "POKEFAN",

    trainerName: "ISABEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Timothy1: {
    trainerClass: "EXPERT",

    trainerName: "TIMOTHY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Timothy2: {
    trainerClass: "EXPERT",

    trainerName: "TIMOTHY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Timothy3: {
    trainerClass: "EXPERT",

    trainerName: "TIMOTHY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Timothy4: {
    trainerClass: "EXPERT",

    trainerName: "TIMOTHY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Timothy5: {
    trainerClass: "EXPERT",

    trainerName: "TIMOTHY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Vicky: {
    trainerClass: "WINSTRATE",

    trainerName: "VICKY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Shelby1: {
    trainerClass: "EXPERT",

    trainerName: "SHELBY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Shelby2: {
    trainerClass: "EXPERT",

    trainerName: "SHELBY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Shelby3: {
    trainerClass: "EXPERT",

    trainerName: "SHELBY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Shelby4: {
    trainerClass: "EXPERT",

    trainerName: "SHELBY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Shelby5: {
    trainerClass: "EXPERT",

    trainerName: "SHELBY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Calvin1: {
    trainerClass: "YOUNGSTER",

    trainerName: "CALVIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Billy: {
    trainerClass: "YOUNGSTER",

    trainerName: "BILLY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Josh: {
    trainerClass: "YOUNGSTER",

    trainerName: "JOSH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tommy: {
    trainerClass: "YOUNGSTER",

    trainerName: "TOMMY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Joey: {
    trainerClass: "YOUNGSTER",

    trainerName: "JOEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ben: {
    trainerClass: "YOUNGSTER",

    trainerName: "BEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Quincy: {
    trainerClass: "COOLTRAINER",

    trainerName: "QUINCY",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Katelynn: {
    trainerClass: "COOLTRAINER",

    trainerName: "KATELYNN",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Jaylen: {
    trainerClass: "YOUNGSTER",

    trainerName: "JAYLEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dillon: {
    trainerClass: "YOUNGSTER",

    trainerName: "DILLON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Calvin2: {
    trainerClass: "YOUNGSTER",

    trainerName: "CALVIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Calvin3: {
    trainerClass: "YOUNGSTER",

    trainerName: "CALVIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Calvin4: {
    trainerClass: "YOUNGSTER",

    trainerName: "CALVIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Calvin5: {
    trainerClass: "YOUNGSTER",

    trainerName: "CALVIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Eddie: {
    trainerClass: "YOUNGSTER",

    trainerName: "EDDIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Allen: {
    trainerClass: "YOUNGSTER",

    trainerName: "ALLEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Timmy: {
    trainerClass: "YOUNGSTER",

    trainerName: "TIMMY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Wallace: {
    trainerClass: "CHAMPION",

    trainerName: "WALLACE",
    items: ["full-restore", "full-restore", "full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Andrew: {
    trainerClass: "FISHERMAN",

    trainerName: "ANDREW",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ivan: {
    trainerClass: "FISHERMAN",

    trainerName: "IVAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Claude: {
    trainerClass: "FISHERMAN",

    trainerName: "CLAUDE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Elliot1: {
    trainerClass: "FISHERMAN",

    trainerName: "ELLIOT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ned: {
    trainerClass: "FISHERMAN",

    trainerName: "NED",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dale: {
    trainerClass: "FISHERMAN",

    trainerName: "DALE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nolan: {
    trainerClass: "FISHERMAN",

    trainerName: "NOLAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Barny: {
    trainerClass: "FISHERMAN",

    trainerName: "BARNY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Wade: {
    trainerClass: "FISHERMAN",

    trainerName: "WADE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Carter: {
    trainerClass: "FISHERMAN",

    trainerName: "CARTER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Elliot2: {
    trainerClass: "FISHERMAN",

    trainerName: "ELLIOT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Elliot3: {
    trainerClass: "FISHERMAN",

    trainerName: "ELLIOT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Elliot4: {
    trainerClass: "FISHERMAN",

    trainerName: "ELLIOT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Elliot5: {
    trainerClass: "FISHERMAN",

    trainerName: "ELLIOT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT"],
  },

  Ronald: {
    trainerClass: "FISHERMAN",

    trainerName: "RONALD",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jacob: {
    trainerClass: "TRIATHLETE",

    trainerName: "JACOB",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Anthony: {
    trainerClass: "TRIATHLETE",

    trainerName: "ANTHONY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Benjamin1: {
    trainerClass: "TRIATHLETE",

    trainerName: "BENJAMIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Benjamin2: {
    trainerClass: "TRIATHLETE",

    trainerName: "BENJAMIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Benjamin3: {
    trainerClass: "TRIATHLETE",

    trainerName: "BENJAMIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Benjamin4: {
    trainerClass: "TRIATHLETE",

    trainerName: "BENJAMIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Benjamin5: {
    trainerClass: "TRIATHLETE",

    trainerName: "BENJAMIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Abigail1: {
    trainerClass: "TRIATHLETE",

    trainerName: "ABIGAIL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jasmine: {
    trainerClass: "TRIATHLETE",

    trainerName: "JASMINE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Abigail2: {
    trainerClass: "TRIATHLETE",

    trainerName: "ABIGAIL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Abigail3: {
    trainerClass: "TRIATHLETE",

    trainerName: "ABIGAIL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Abigail4: {
    trainerClass: "TRIATHLETE",

    trainerName: "ABIGAIL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Abigail5: {
    trainerClass: "TRIATHLETE",

    trainerName: "ABIGAIL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dylan1: {
    trainerClass: "TRIATHLETE",

    trainerName: "DYLAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dylan2: {
    trainerClass: "TRIATHLETE",

    trainerName: "DYLAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dylan3: {
    trainerClass: "TRIATHLETE",

    trainerName: "DYLAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dylan4: {
    trainerClass: "TRIATHLETE",

    trainerName: "DYLAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dylan5: {
    trainerClass: "TRIATHLETE",

    trainerName: "DYLAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Maria1: {
    trainerClass: "TRIATHLETE",

    trainerName: "MARIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Maria2: {
    trainerClass: "TRIATHLETE",

    trainerName: "MARIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Maria3: {
    trainerClass: "TRIATHLETE",

    trainerName: "MARIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Maria4: {
    trainerClass: "TRIATHLETE",

    trainerName: "MARIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Maria5: {
    trainerClass: "TRIATHLETE",

    trainerName: "MARIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Camden: {
    trainerClass: "TRIATHLETE",

    trainerName: "CAMDEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Demetrius: {
    trainerClass: "YOUNGSTER",

    trainerName: "DEMETRIUS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isaiah1: {
    trainerClass: "TRIATHLETE",

    trainerName: "ISAIAH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Pablo1: {
    trainerClass: "TRIATHLETE",

    trainerName: "PABLO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Chase: {
    trainerClass: "TRIATHLETE",

    trainerName: "CHASE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isaiah2: {
    trainerClass: "TRIATHLETE",

    trainerName: "ISAIAH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isaiah3: {
    trainerClass: "TRIATHLETE",

    trainerName: "ISAIAH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isaiah4: {
    trainerClass: "TRIATHLETE",

    trainerName: "ISAIAH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isaiah5: {
    trainerClass: "TRIATHLETE",

    trainerName: "ISAIAH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isobel: {
    trainerClass: "TRIATHLETE",

    trainerName: "ISOBEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Donny: {
    trainerClass: "TRIATHLETE",

    trainerName: "DONNY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Talia: {
    trainerClass: "TRIATHLETE",

    trainerName: "TALIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Katelyn1: {
    trainerClass: "TRIATHLETE",

    trainerName: "KATELYN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Allison: {
    trainerClass: "TRIATHLETE",

    trainerName: "ALLISON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Katelyn2: {
    trainerClass: "TRIATHLETE",

    trainerName: "KATELYN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Katelyn3: {
    trainerClass: "TRIATHLETE",

    trainerName: "KATELYN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Katelyn4: {
    trainerClass: "TRIATHLETE",

    trainerName: "KATELYN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Katelyn5: {
    trainerClass: "TRIATHLETE",

    trainerName: "KATELYN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nicolas1: {
    trainerClass: "DRAGON-TAMER",

    trainerName: "NICOLAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nicolas2: {
    trainerClass: "DRAGON-TAMER",

    trainerName: "NICOLAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nicolas3: {
    trainerClass: "DRAGON-TAMER",

    trainerName: "NICOLAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nicolas4: {
    trainerClass: "DRAGON-TAMER",

    trainerName: "NICOLAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nicolas5: {
    trainerClass: "DRAGON-TAMER",

    trainerName: "NICOLAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Aaron: {
    trainerClass: "DRAGON-TAMER",

    trainerName: "AARON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Perry: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "PERRY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Hugh: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "HUGH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Phil: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "PHIL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jared: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "JARED",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Humberto: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "HUMBERTO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Presley: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "PRESLEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Edwardo: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "EDWARDO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Colin: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "COLIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Robert1: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "ROBERT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Benny: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "BENNY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Chester: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "CHESTER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Robert2: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "ROBERT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Robert3: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "ROBERT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Robert4: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "ROBERT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Robert5: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "ROBERT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Alex: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "ALEX",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Beck: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "BECK",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Yasu: {
    trainerClass: "NINJA-BOY",

    trainerName: "YASU",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT"],
  },

  Takashi: {
    trainerClass: "NINJA-BOY",

    trainerName: "TAKASHI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT"],
  },

  Dianne: {
    trainerClass: "COOLTRAINER",

    trainerName: "DIANNE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: [],
  },

  Jani: {
    trainerClass: "TUBER-F",

    trainerName: "JANI",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Lao1: {
    trainerClass: "NINJA-BOY",

    trainerName: "LAO",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Lung: {
    trainerClass: "NINJA-BOY",

    trainerName: "LUNG",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Lao2: {
    trainerClass: "NINJA-BOY",

    trainerName: "LAO",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Lao3: {
    trainerClass: "NINJA-BOY",

    trainerName: "LAO",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Lao4: {
    trainerClass: "NINJA-BOY",

    trainerName: "LAO",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Lao5: {
    trainerClass: "NINJA-BOY",

    trainerName: "LAO",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Jocelyn: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "JOCELYN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Laura: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "LAURA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cyndy1: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "CYNDY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cora: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "CORA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Paula: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "PAULA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cyndy2: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "CYNDY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cyndy3: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "CYNDY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cyndy4: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "CYNDY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cyndy5: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "CYNDY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Madeline1: {
    trainerClass: "PARASOL-LADY",

    trainerName: "MADELINE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Clarissa: {
    trainerClass: "PARASOL-LADY",

    trainerName: "CLARISSA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Angelica: {
    trainerClass: "PARASOL-LADY",

    trainerName: "ANGELICA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Madeline2: {
    trainerClass: "PARASOL-LADY",

    trainerName: "MADELINE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Madeline3: {
    trainerClass: "PARASOL-LADY",

    trainerName: "MADELINE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Madeline4: {
    trainerClass: "PARASOL-LADY",

    trainerName: "MADELINE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Madeline5: {
    trainerClass: "PARASOL-LADY",

    trainerName: "MADELINE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Beverly: {
    trainerClass: "SWIMMER-F",

    trainerName: "BEVERLY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Imani: {
    trainerClass: "SWIMMER-F",

    trainerName: "IMANI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kyla: {
    trainerClass: "SWIMMER-F",

    trainerName: "KYLA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Denise: {
    trainerClass: "SWIMMER-F",

    trainerName: "DENISE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Beth: {
    trainerClass: "SWIMMER-F",

    trainerName: "BETH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tara: {
    trainerClass: "SWIMMER-F",

    trainerName: "TARA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Missy: {
    trainerClass: "SWIMMER-F",

    trainerName: "MISSY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Alice: {
    trainerClass: "SWIMMER-F",

    trainerName: "ALICE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jenny1: {
    trainerClass: "SWIMMER-F",

    trainerName: "JENNY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Grace: {
    trainerClass: "SWIMMER-F",

    trainerName: "GRACE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tanya: {
    trainerClass: "SWIMMER-F",

    trainerName: "TANYA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Sharon: {
    trainerClass: "SWIMMER-F",

    trainerName: "SHARON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nikki: {
    trainerClass: "SWIMMER-F",

    trainerName: "NIKKI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Brenda: {
    trainerClass: "SWIMMER-F",

    trainerName: "BRENDA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Katie: {
    trainerClass: "SWIMMER-F",

    trainerName: "KATIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Susie: {
    trainerClass: "SWIMMER-F",

    trainerName: "SUSIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kara: {
    trainerClass: "SWIMMER-F",

    trainerName: "KARA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dana: {
    trainerClass: "SWIMMER-F",

    trainerName: "DANA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Sienna: {
    trainerClass: "SWIMMER-F",

    trainerName: "SIENNA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Debra: {
    trainerClass: "SWIMMER-F",

    trainerName: "DEBRA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Linda: {
    trainerClass: "SWIMMER-F",

    trainerName: "LINDA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kaylee: {
    trainerClass: "SWIMMER-F",

    trainerName: "KAYLEE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Laurel: {
    trainerClass: "SWIMMER-F",

    trainerName: "LAUREL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Carlee: {
    trainerClass: "SWIMMER-F",

    trainerName: "CARLEE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jenny2: {
    trainerClass: "SWIMMER-F",

    trainerName: "JENNY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jenny3: {
    trainerClass: "SWIMMER-F",

    trainerName: "JENNY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jenny4: {
    trainerClass: "SWIMMER-F",

    trainerName: "JENNY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jenny5: {
    trainerClass: "SWIMMER-F",

    trainerName: "JENNY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Heidi: {
    trainerClass: "PICNICKER",

    trainerName: "HEIDI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Becky: {
    trainerClass: "PICNICKER",

    trainerName: "BECKY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Carol: {
    trainerClass: "PICNICKER",

    trainerName: "CAROL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nancy: {
    trainerClass: "PICNICKER",

    trainerName: "NANCY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Martha: {
    trainerClass: "PICNICKER",

    trainerName: "MARTHA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Diana1: {
    trainerClass: "PICNICKER",

    trainerName: "DIANA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cedric: {
    trainerClass: "PSYCHIC",

    trainerName: "CEDRIC",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Irene: {
    trainerClass: "PICNICKER",

    trainerName: "IRENE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Diana2: {
    trainerClass: "PICNICKER",

    trainerName: "DIANA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Diana3: {
    trainerClass: "PICNICKER",

    trainerName: "DIANA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Diana4: {
    trainerClass: "PICNICKER",

    trainerName: "DIANA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Diana5: {
    trainerClass: "PICNICKER",

    trainerName: "DIANA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AmyAndLiv1: {
    trainerClass: "TWINS",

    trainerName: "AMY & LIV",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AmyAndLiv2: {
    trainerClass: "TWINS",

    trainerName: "AMY & LIV",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GinaAndMia1: {
    trainerClass: "TWINS",

    trainerName: "GINA & MIA",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  MiuAndYuki: {
    trainerClass: "TWINS",

    trainerName: "MIU & YUKI",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AmyAndLiv3: {
    trainerClass: "TWINS",

    trainerName: "AMY & LIV",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GinaAndMia2: {
    trainerClass: "TWINS",

    trainerName: "GINA & MIA",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AmyAndLiv4: {
    trainerClass: "TWINS",

    trainerName: "AMY & LIV",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AmyAndLiv5: {
    trainerClass: "TWINS",

    trainerName: "AMY & LIV",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  AmyAndLiv6: {
    trainerClass: "TWINS",

    trainerName: "AMY & LIV",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Huey: {
    trainerClass: "SAILOR",

    trainerName: "HUEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Edmond: {
    trainerClass: "SAILOR",

    trainerName: "EDMOND",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ernest1: {
    trainerClass: "SAILOR",

    trainerName: "ERNEST",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dwayne: {
    trainerClass: "SAILOR",

    trainerName: "DWAYNE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Phillip: {
    trainerClass: "SAILOR",

    trainerName: "PHILLIP",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Leonard: {
    trainerClass: "SAILOR",

    trainerName: "LEONARD",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Duncan: {
    trainerClass: "SAILOR",

    trainerName: "DUNCAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ernest2: {
    trainerClass: "SAILOR",

    trainerName: "ERNEST",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ernest3: {
    trainerClass: "SAILOR",

    trainerName: "ERNEST",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ernest4: {
    trainerClass: "SAILOR",

    trainerName: "ERNEST",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ernest5: {
    trainerClass: "SAILOR",

    trainerName: "ERNEST",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Eli: {
    trainerClass: "HIKER",

    trainerName: "ELI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Annika: {
    trainerClass: "POKEFAN",

    trainerName: "ANNIKA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jazmyn: {
    trainerClass: "COOLTRAINER-2",

    trainerName: "JAZMYN",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Jonas: {
    trainerClass: "NINJA-BOY",

    trainerName: "JONAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Kayley: {
    trainerClass: "PARASOL-LADY",

    trainerName: "KAYLEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Auron: {
    trainerClass: "EXPERT",

    trainerName: "AURON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kelvin: {
    trainerClass: "SAILOR",

    trainerName: "KELVIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Marley: {
    trainerClass: "COOLTRAINER",

    trainerName: "MARLEY",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Reyna: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "REYNA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Hudson: {
    trainerClass: "SAILOR",

    trainerName: "HUDSON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Conor: {
    trainerClass: "EXPERT",

    trainerName: "CONOR",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Edwin1: {
    trainerClass: "COLLECTOR",

    trainerName: "EDWIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Hector: {
    trainerClass: "COLLECTOR",

    trainerName: "HECTOR",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  TabithaMossdeep: {
    trainerClass: "MAGMA-ADMIN",

    trainerName: "TABITHA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Edwin2: {
    trainerClass: "COLLECTOR",

    trainerName: "EDWIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Edwin3: {
    trainerClass: "COLLECTOR",

    trainerName: "EDWIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Edwin4: {
    trainerClass: "COLLECTOR",

    trainerName: "EDWIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Edwin5: {
    trainerClass: "COLLECTOR",

    trainerName: "EDWIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  WallyVR1: {
    trainerClass: "RIVAL",

    trainerName: "WALLY",
    items: ["full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanRoute103Mudkip: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanRoute110Mudkip: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanRoute119Mudkip: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanRoute103Treecko: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  BrendanRoute110Treecko: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanRoute119Treecko: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanRoute103Torchic: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanRoute110Torchic: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanRoute119Torchic: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRoute103Mudkip: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRoute110Mudkip: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRoute119Mudkip: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRoute103Treecko: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRoute110Treecko: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRoute119Treecko: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRoute103Torchic: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRoute110Torchic: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRoute119Torchic: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Isaac1: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "ISAAC",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Davis: {
    trainerClass: "BUG-CATCHER",

    trainerName: "DAVIS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Mitchell: {
    trainerClass: "COOLTRAINER",

    trainerName: "MITCHELL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Isaac2: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "ISAAC",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isaac3: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "ISAAC",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isaac4: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "ISAAC",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isaac5: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "ISAAC",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lydia1: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "LYDIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Halle: {
    trainerClass: "COOLTRAINER",

    trainerName: "HALLE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Garrison: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "GARRISON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lydia2: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "LYDIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lydia3: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "LYDIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lydia4: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "LYDIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lydia5: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "LYDIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jackson1: {
    trainerClass: "PKMN-RANGER",

    trainerName: "JACKSON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Lorenzo: {
    trainerClass: "PKMN-RANGER",

    trainerName: "LORENZO",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Sebastian: {
    trainerClass: "PKMN-RANGER",

    trainerName: "SEBASTIAN",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Jackson2: {
    trainerClass: "PKMN-RANGER",

    trainerName: "JACKSON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  Jackson3: {
    trainerClass: "PKMN-RANGER",

    trainerName: "JACKSON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Jackson4: {
    trainerClass: "PKMN-RANGER",

    trainerName: "JACKSON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  Jackson5: {
    trainerClass: "PKMN-RANGER",

    trainerName: "JACKSON",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Catherine1: {
    trainerClass: "PKMN-RANGER",

    trainerName: "CATHERINE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  Jenna: {
    trainerClass: "PKMN-RANGER",

    trainerName: "JENNA",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  Sophia: {
    trainerClass: "PKMN-RANGER",

    trainerName: "SOPHIA",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Catherine2: {
    trainerClass: "PKMN-RANGER",

    trainerName: "CATHERINE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  Catherine3: {
    trainerClass: "PKMN-RANGER",

    trainerName: "CATHERINE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Catherine4: {
    trainerClass: "PKMN-RANGER",

    trainerName: "CATHERINE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  Catherine5: {
    trainerClass: "PKMN-RANGER",

    trainerName: "CATHERINE",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Julio: {
    trainerClass: "TRIATHLETE",

    trainerName: "JULIO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSeafloorCavern5: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntUnused: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMtPyre4: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntJaggedPass: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Marc: {
    trainerClass: "HIKER",

    trainerName: "MARC",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Brenden: {
    trainerClass: "SAILOR",

    trainerName: "BRENDEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lilith: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "LILITH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cristian: {
    trainerClass: "BLACK-BELT",

    trainerName: "CRISTIAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Sylvia: {
    trainerClass: "HEX-MANIAC",

    trainerName: "SYLVIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Leonardo: {
    trainerClass: "SWIMMER-M",

    trainerName: "LEONARDO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Athena: {
    trainerClass: "COOLTRAINER",

    trainerName: "ATHENA",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Harrison: {
    trainerClass: "SWIMMER-M",

    trainerName: "HARRISON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMtChimney2: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Clarence: {
    trainerClass: "SWIMMER-M",

    trainerName: "CLARENCE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Terry: {
    trainerClass: "PSYCHIC",

    trainerName: "TERRY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nate: {
    trainerClass: "GENTLEMAN",

    trainerName: "NATE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kathleen: {
    trainerClass: "HEX-MANIAC",

    trainerName: "KATHLEEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Clifford: {
    trainerClass: "GENTLEMAN",

    trainerName: "CLIFFORD",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Nicholas: {
    trainerClass: "PSYCHIC",

    trainerName: "NICHOLAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSpaceCenter3: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSpaceCenter4: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSpaceCenter5: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSpaceCenter6: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntSpaceCenter7: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Macey: {
    trainerClass: "PSYCHIC",

    trainerName: "MACEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  BrendanRustboroTreecko: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  BrendanRustboroMudkip: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Paxton: {
    trainerClass: "EXPERT",

    trainerName: "PAXTON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Isabella: {
    trainerClass: "TRIATHLETE",

    trainerName: "ISABELLA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntWeatherInst5: {
    trainerClass: "TEAM-AQUA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  TabithaMtChimney: {
    trainerClass: "MAGMA-ADMIN",

    trainerName: "TABITHA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Jonathan: {
    trainerClass: "COOLTRAINER",

    trainerName: "JONATHAN",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  BrendanRustboroTorchic: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRustboroMudkip: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  MaxieMagmaHideout: {
    trainerClass: "MAGMA-LEADER",

    trainerName: "MAXIE",
    items: ["super-potion", "super-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MaxieMtChimney: {
    trainerClass: "MAGMA-LEADER",

    trainerName: "MAXIE",
    items: ["super-potion", "super-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Tiana: {
    trainerClass: "LASS",

    trainerName: "TIANA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Haley1: {
    trainerClass: "LASS",

    trainerName: "HALEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Janice: {
    trainerClass: "LASS",

    trainerName: "JANICE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Vivi: {
    trainerClass: "WINSTRATE",

    trainerName: "VIVI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Haley2: {
    trainerClass: "LASS",

    trainerName: "HALEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Haley3: {
    trainerClass: "LASS",

    trainerName: "HALEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Haley4: {
    trainerClass: "LASS",

    trainerName: "HALEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Haley5: {
    trainerClass: "LASS",

    trainerName: "HALEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Sally: {
    trainerClass: "LASS",

    trainerName: "SALLY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Robin: {
    trainerClass: "LASS",

    trainerName: "ROBIN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Andrea: {
    trainerClass: "LASS",

    trainerName: "ANDREA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Crissy: {
    trainerClass: "LASS",

    trainerName: "CRISSY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Rick: {
    trainerClass: "BUG-CATCHER",

    trainerName: "RICK",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lyle: {
    trainerClass: "BUG-CATCHER",

    trainerName: "LYLE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jose: {
    trainerClass: "BUG-CATCHER",

    trainerName: "JOSE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Doug: {
    trainerClass: "BUG-CATCHER",

    trainerName: "DOUG",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Greg: {
    trainerClass: "BUG-CATCHER",

    trainerName: "GREG",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kent: {
    trainerClass: "BUG-CATCHER",

    trainerName: "KENT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  James1: {
    trainerClass: "BUG-CATCHER",

    trainerName: "JAMES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  James2: {
    trainerClass: "BUG-CATCHER",

    trainerName: "JAMES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  James3: {
    trainerClass: "BUG-CATCHER",

    trainerName: "JAMES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  James4: {
    trainerClass: "BUG-CATCHER",

    trainerName: "JAMES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  James5: {
    trainerClass: "BUG-CATCHER",

    trainerName: "JAMES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Brice: {
    trainerClass: "HIKER",

    trainerName: "BRICE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Trent1: {
    trainerClass: "HIKER",

    trainerName: "TRENT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lenny: {
    trainerClass: "HIKER",

    trainerName: "LENNY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lucas1: {
    trainerClass: "HIKER",

    trainerName: "LUCAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Alan: {
    trainerClass: "HIKER",

    trainerName: "ALAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Clark: {
    trainerClass: "HIKER",

    trainerName: "CLARK",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Eric: {
    trainerClass: "HIKER",

    trainerName: "ERIC",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lucas2: {
    trainerClass: "HIKER",

    trainerName: "LUCAS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Mike1: {
    trainerClass: "HIKER",

    trainerName: "MIKE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Mike2: {
    trainerClass: "HIKER",

    trainerName: "MIKE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Trent2: {
    trainerClass: "HIKER",

    trainerName: "TRENT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Trent3: {
    trainerClass: "HIKER",

    trainerName: "TRENT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Trent4: {
    trainerClass: "HIKER",

    trainerName: "TRENT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Trent5: {
    trainerClass: "HIKER",

    trainerName: "TRENT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  DezAndLuke: {
    trainerClass: "YOUNG-COUPLE",

    trainerName: "DEZ & LUKE",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  LeaAndJed: {
    trainerClass: "YOUNG-COUPLE",

    trainerName: "LEA & JED",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  KiraAndDan1: {
    trainerClass: "YOUNG-COUPLE",

    trainerName: "KIRA & DAN",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  KiraAndDan2: {
    trainerClass: "YOUNG-COUPLE",

    trainerName: "KIRA & DAN",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  KiraAndDan3: {
    trainerClass: "YOUNG-COUPLE",

    trainerName: "KIRA & DAN",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  KiraAndDan4: {
    trainerClass: "YOUNG-COUPLE",

    trainerName: "KIRA & DAN",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  KiraAndDan5: {
    trainerClass: "YOUNG-COUPLE",

    trainerName: "KIRA & DAN",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Johanna: {
    trainerClass: "BEAUTY",

    trainerName: "JOHANNA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Gerald: {
    trainerClass: "COOLTRAINER",

    trainerName: "GERALD",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Vivian: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "VIVIAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Danielle: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "DANIELLE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Hideo: {
    trainerClass: "NINJA-BOY",

    trainerName: "HIDEO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT"],
  },

  Keigo: {
    trainerClass: "NINJA-BOY",

    trainerName: "KEIGO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT"],
  },

  Riley: {
    trainerClass: "NINJA-BOY",

    trainerName: "RILEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT"],
  },

  Flint: {
    trainerClass: "CAMPER",

    trainerName: "FLINT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Ashley: {
    trainerClass: "PICNICKER",

    trainerName: "ASHLEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  WallyMauville: {
    trainerClass: "RIVAL",

    trainerName: "WALLY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  WallyVR2: {
    trainerClass: "RIVAL",

    trainerName: "WALLY",
    items: ["full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  WallyVR3: {
    trainerClass: "RIVAL",

    trainerName: "WALLY",
    items: ["full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  WallyVR4: {
    trainerClass: "RIVAL",

    trainerName: "WALLY",
    items: ["full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  WallyVR5: {
    trainerClass: "RIVAL",

    trainerName: "WALLY",
    items: ["full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanLilycoveMudkip: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanLilycoveTreecko: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  BrendanLilycoveTorchic: {
    trainerClass: "RIVAL",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayLilycoveMudkip: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayLilycoveTreecko: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayLilycoveTorchic: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Jonah: {
    trainerClass: "FISHERMAN",

    trainerName: "JONAH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Henry: {
    trainerClass: "FISHERMAN",

    trainerName: "HENRY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Roger: {
    trainerClass: "FISHERMAN",

    trainerName: "ROGER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Alexa: {
    trainerClass: "COOLTRAINER",

    trainerName: "ALEXA",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Ruben: {
    trainerClass: "COOLTRAINER",

    trainerName: "RUBEN",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Koji1: {
    trainerClass: "BLACK-BELT",

    trainerName: "KOJI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Wayne: {
    trainerClass: "FISHERMAN",

    trainerName: "WAYNE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Aidan: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "AIDAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Reed: {
    trainerClass: "SWIMMER-M",

    trainerName: "REED",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tisha: {
    trainerClass: "SWIMMER-F",

    trainerName: "TISHA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  ToriAndTia: {
    trainerClass: "TWINS",

    trainerName: "TORI & TIA",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  KimAndIris: {
    trainerClass: "SR-AND-JR",

    trainerName: "KIM & IRIS",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  TyraAndIvy: {
    trainerClass: "SR-AND-JR",

    trainerName: "TYRA & IVY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  MelAndPaul: {
    trainerClass: "YOUNG-COUPLE",

    trainerName: "MEL & PAUL",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  JohnAndJay1: {
    trainerClass: "OLD-COUPLE",

    trainerName: "JOHN & JAY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  JohnAndJay2: {
    trainerClass: "OLD-COUPLE",

    trainerName: "JOHN & JAY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  JohnAndJay3: {
    trainerClass: "OLD-COUPLE",

    trainerName: "JOHN & JAY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  JohnAndJay4: {
    trainerClass: "OLD-COUPLE",

    trainerName: "JOHN & JAY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-SETUP-FIRST-TURN"],
  },

  JohnAndJay5: {
    trainerClass: "OLD-COUPLE",

    trainerName: "JOHN & JAY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  ReliAndIan: {
    trainerClass: "SIS-AND-BRO",

    trainerName: "RELI & IAN",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  LilaAndRoy1: {
    trainerClass: "SIS-AND-BRO",

    trainerName: "LILA & ROY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  LilaAndRoy2: {
    trainerClass: "SIS-AND-BRO",

    trainerName: "LILA & ROY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  LilaAndRoy3: {
    trainerClass: "SIS-AND-BRO",

    trainerName: "LILA & ROY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  LilaAndRoy4: {
    trainerClass: "SIS-AND-BRO",

    trainerName: "LILA & ROY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  LilaAndRoy5: {
    trainerClass: "SIS-AND-BRO",

    trainerName: "LILA & ROY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  LisaAndRay: {
    trainerClass: "SIS-AND-BRO",

    trainerName: "LISA & RAY",
    items: [],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Chris: {
    trainerClass: "FISHERMAN",

    trainerName: "CHRIS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dawson: {
    trainerClass: "RICH-BOY",

    trainerName: "DAWSON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Sarah: {
    trainerClass: "LADY",

    trainerName: "SARAH",
    items: ["full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Darian: {
    trainerClass: "FISHERMAN",

    trainerName: "DARIAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Hailey: {
    trainerClass: "TUBER-F",

    trainerName: "HAILEY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Chandler: {
    trainerClass: "TUBER-M",

    trainerName: "CHANDLER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kaleb: {
    trainerClass: "POKEFAN",

    trainerName: "KALEB",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Joseph: {
    trainerClass: "GUITARIST",

    trainerName: "JOSEPH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Alyssa: {
    trainerClass: "TRIATHLETE",

    trainerName: "ALYSSA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Marcos: {
    trainerClass: "GUITARIST",

    trainerName: "MARCOS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Rhett: {
    trainerClass: "BLACK-BELT",

    trainerName: "RHETT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Tyron: {
    trainerClass: "CAMPER",

    trainerName: "TYRON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Celina: {
    trainerClass: "AROMA-LADY",

    trainerName: "CELINA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Bianca: {
    trainerClass: "PICNICKER",

    trainerName: "BIANCA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Hayden: {
    trainerClass: "KINDLER",

    trainerName: "HAYDEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Sophie: {
    trainerClass: "PICNICKER",

    trainerName: "SOPHIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Coby: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "COBY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Lawrence: {
    trainerClass: "CAMPER",

    trainerName: "LAWRENCE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Wyatt: {
    trainerClass: "POKEMANIAC",

    trainerName: "WYATT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Angelina: {
    trainerClass: "PICNICKER",

    trainerName: "ANGELINA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kai: {
    trainerClass: "FISHERMAN",

    trainerName: "KAI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Charlotte: {
    trainerClass: "PICNICKER",

    trainerName: "CHARLOTTE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Deandre: {
    trainerClass: "YOUNGSTER",

    trainerName: "DEANDRE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout1: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout2: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout3: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout4: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout5: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout6: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout7: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout8: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout9: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout10: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout11: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout12: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout13: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout14: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout15: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  GruntMagmaHideout16: {
    trainerClass: "TEAM-MAGMA",

    trainerName: "GRUNT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  TabithaMagmaHideout: {
    trainerClass: "MAGMA-ADMIN",

    trainerName: "TABITHA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Darcy: {
    trainerClass: "COOLTRAINER",

    trainerName: "DARCY",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MaxieMossdeep: {
    trainerClass: "MAGMA-LEADER",

    trainerName: "MAXIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Pete: {
    trainerClass: "SWIMMER-M",

    trainerName: "PETE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Isabelle: {
    trainerClass: "SWIMMER-F",

    trainerName: "ISABELLE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Andres1: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "ANDRES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Josue: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "JOSUE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Camron: {
    trainerClass: "TRIATHLETE",

    trainerName: "CAMRON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cory1: {
    trainerClass: "SAILOR",

    trainerName: "CORY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Carolina: {
    trainerClass: "COOLTRAINER",

    trainerName: "CAROLINA",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Elijah: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "ELIJAH",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Celia: {
    trainerClass: "PICNICKER",

    trainerName: "CELIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Bryan: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "BRYAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Branden: {
    trainerClass: "CAMPER",

    trainerName: "BRANDEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Bryant: {
    trainerClass: "KINDLER",

    trainerName: "BRYANT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Shayla: {
    trainerClass: "AROMA-LADY",

    trainerName: "SHAYLA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Kyra: {
    trainerClass: "TRIATHLETE",

    trainerName: "KYRA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Jaiden: {
    trainerClass: "NINJA-BOY",

    trainerName: "JAIDEN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Alix: {
    trainerClass: "PSYCHIC",

    trainerName: "ALIX",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Helene: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "HELENE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Marlene: {
    trainerClass: "PSYCHIC",

    trainerName: "MARLENE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Devan: {
    trainerClass: "HIKER",

    trainerName: "DEVAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Johnson: {
    trainerClass: "YOUNGSTER",

    trainerName: "JOHNSON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Melina: {
    trainerClass: "TRIATHLETE",

    trainerName: "MELINA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Brandi: {
    trainerClass: "PSYCHIC",

    trainerName: "BRANDI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Aisha: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "AISHA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Makayla: {
    trainerClass: "EXPERT",

    trainerName: "MAKAYLA",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Fabian: {
    trainerClass: "GUITARIST",

    trainerName: "FABIAN",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Dayton: {
    trainerClass: "KINDLER",

    trainerName: "DAYTON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Rachel: {
    trainerClass: "PARASOL-LADY",

    trainerName: "RACHEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Leonel: {
    trainerClass: "COOLTRAINER",

    trainerName: "LEONEL",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Callie: {
    trainerClass: "BATTLE-GIRL",

    trainerName: "CALLIE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cale: {
    trainerClass: "BUG-MANIAC",

    trainerName: "CALE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Myles: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "MYLES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Pat: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "PAT",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cristin1: {
    trainerClass: "COOLTRAINER",

    trainerName: "CRISTIN",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRustboroTreecko: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  MayRustboroTorchic: {
    trainerClass: "RIVAL",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Roxanne2: {
    trainerClass: "LEADER",

    trainerName: "ROXANNE",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Roxanne3: {
    trainerClass: "LEADER",

    trainerName: "ROXANNE",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Roxanne4: {
    trainerClass: "LEADER",

    trainerName: "ROXANNE",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Roxanne5: {
    trainerClass: "LEADER",

    trainerName: "ROXANNE",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Brawly2: {
    trainerClass: "LEADER",

    trainerName: "BRAWLY",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Brawly3: {
    trainerClass: "LEADER",

    trainerName: "BRAWLY",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Brawly4: {
    trainerClass: "LEADER",

    trainerName: "BRAWLY",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Brawly5: {
    trainerClass: "LEADER",

    trainerName: "BRAWLY",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Wattson2: {
    trainerClass: "LEADER",

    trainerName: "WATTSON",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Wattson3: {
    trainerClass: "LEADER",

    trainerName: "WATTSON",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Wattson4: {
    trainerClass: "LEADER",

    trainerName: "WATTSON",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Wattson5: {
    trainerClass: "LEADER",

    trainerName: "WATTSON",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Flannery2: {
    trainerClass: "LEADER",

    trainerName: "FLANNERY",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Flannery3: {
    trainerClass: "LEADER",

    trainerName: "FLANNERY",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Flannery4: {
    trainerClass: "LEADER",

    trainerName: "FLANNERY",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Flannery5: {
    trainerClass: "LEADER",

    trainerName: "FLANNERY",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Norman2: {
    trainerClass: "LEADER",

    trainerName: "NORMAN",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Norman3: {
    trainerClass: "LEADER",

    trainerName: "NORMAN",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Norman4: {
    trainerClass: "LEADER",

    trainerName: "NORMAN",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Norman5: {
    trainerClass: "LEADER",

    trainerName: "NORMAN",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Winona2: {
    trainerClass: "LEADER",

    trainerName: "WINONA",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: [
      "AI-SCRIPT-CHECK-BAD-MOVE",
      "AI-SCRIPT-TRY-TO-FAINT",
      "AI-SCRIPT-CHECK-VIABILITY",
      "AI-SCRIPT-RISKY",
    ],
  },

  Winona3: {
    trainerClass: "LEADER",

    trainerName: "WINONA",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: [
      "AI-SCRIPT-CHECK-BAD-MOVE",
      "AI-SCRIPT-TRY-TO-FAINT",
      "AI-SCRIPT-CHECK-VIABILITY",
      "AI-SCRIPT-RISKY",
    ],
  },

  Winona4: {
    trainerClass: "LEADER",

    trainerName: "WINONA",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: [
      "AI-SCRIPT-CHECK-BAD-MOVE",
      "AI-SCRIPT-TRY-TO-FAINT",
      "AI-SCRIPT-CHECK-VIABILITY",
      "AI-SCRIPT-RISKY",
    ],
  },

  Winona5: {
    trainerClass: "LEADER",

    trainerName: "WINONA",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: [
      "AI-SCRIPT-CHECK-BAD-MOVE",
      "AI-SCRIPT-TRY-TO-FAINT",
      "AI-SCRIPT-CHECK-VIABILITY",
      "AI-SCRIPT-RISKY",
    ],
  },

  TateAndLiza2: {
    trainerClass: "LEADER",

    trainerName: "TATE&LIZA",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  TateAndLiza3: {
    trainerClass: "LEADER",

    trainerName: "TATE&LIZA",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  TateAndLiza4: {
    trainerClass: "LEADER",

    trainerName: "TATE&LIZA",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  TateAndLiza5: {
    trainerClass: "LEADER",

    trainerName: "TATE&LIZA",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Juan2: {
    trainerClass: "LEADER",

    trainerName: "JUAN",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Juan3: {
    trainerClass: "LEADER",

    trainerName: "JUAN",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Juan4: {
    trainerClass: "LEADER",

    trainerName: "JUAN",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Juan5: {
    trainerClass: "LEADER",

    trainerName: "JUAN",
    items: ["full-restore", "full-restore", "full-restore"],
    doubleBattle: true,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Angelo: {
    trainerClass: "BUG-MANIAC",

    trainerName: "ANGELO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Darius: {
    trainerClass: "BIRD-KEEPER",

    trainerName: "DARIUS",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Steven: {
    trainerClass: "RIVAL",

    trainerName: "STEVEN",
    items: ["full-restore", "full-restore", "full-restore", "full-restore"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Anabel: {
    trainerClass: "SALON-MAIDEN",

    trainerName: "ANABEL",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Tucker: {
    trainerClass: "DOME-ACE",

    trainerName: "TUCKER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Spenser: {
    trainerClass: "PALACE-MAVEN",

    trainerName: "SPENSER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Greta: {
    trainerClass: "ARENA-TYCOON",

    trainerName: "GRETA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Noland: {
    trainerClass: "FACTORY-HEAD",

    trainerName: "NOLAND",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Lucy: {
    trainerClass: "PIKE-QUEEN",

    trainerName: "LUCY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Brandon: {
    trainerClass: "PYRAMID-KING",

    trainerName: "BRANDON",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Andres2: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "ANDRES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Andres3: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "ANDRES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Andres4: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "ANDRES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Andres5: {
    trainerClass: "RUIN-MANIAC",

    trainerName: "ANDRES",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cory2: {
    trainerClass: "SAILOR",

    trainerName: "CORY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cory3: {
    trainerClass: "SAILOR",

    trainerName: "CORY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cory4: {
    trainerClass: "SAILOR",

    trainerName: "CORY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cory5: {
    trainerClass: "SAILOR",

    trainerName: "CORY",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Pablo2: {
    trainerClass: "TRIATHLETE",

    trainerName: "PABLO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Pablo3: {
    trainerClass: "TRIATHLETE",

    trainerName: "PABLO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Pablo4: {
    trainerClass: "TRIATHLETE",

    trainerName: "PABLO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Pablo5: {
    trainerClass: "TRIATHLETE",

    trainerName: "PABLO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Koji2: {
    trainerClass: "BLACK-BELT",

    trainerName: "KOJI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Koji3: {
    trainerClass: "BLACK-BELT",

    trainerName: "KOJI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Koji4: {
    trainerClass: "BLACK-BELT",

    trainerName: "KOJI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Koji5: {
    trainerClass: "BLACK-BELT",

    trainerName: "KOJI",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Cristin2: {
    trainerClass: "COOLTRAINER",

    trainerName: "CRISTIN",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Cristin3: {
    trainerClass: "COOLTRAINER",

    trainerName: "CRISTIN",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Cristin4: {
    trainerClass: "COOLTRAINER",

    trainerName: "CRISTIN",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Cristin5: {
    trainerClass: "COOLTRAINER",

    trainerName: "CRISTIN",
    items: ["hyper-potion"],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Fernando2: {
    trainerClass: "GUITARIST",

    trainerName: "FERNANDO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Fernando3: {
    trainerClass: "GUITARIST",

    trainerName: "FERNANDO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Fernando4: {
    trainerClass: "GUITARIST",

    trainerName: "FERNANDO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Fernando5: {
    trainerClass: "GUITARIST",

    trainerName: "FERNANDO",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Sawyer2: {
    trainerClass: "HIKER",

    trainerName: "SAWYER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Sawyer3: {
    trainerClass: "HIKER",

    trainerName: "SAWYER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Sawyer4: {
    trainerClass: "HIKER",

    trainerName: "SAWYER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Sawyer5: {
    trainerClass: "HIKER",

    trainerName: "SAWYER",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE", "AI-SCRIPT-TRY-TO-FAINT", "AI-SCRIPT-CHECK-VIABILITY"],
  },

  Gabrielle2: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "GABRIELLE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Gabrielle3: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "GABRIELLE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Gabrielle4: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "GABRIELLE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Gabrielle5: {
    trainerClass: "PKMN-BREEDER",

    trainerName: "GABRIELLE",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Thalia2: {
    trainerClass: "BEAUTY",

    trainerName: "THALIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Thalia3: {
    trainerClass: "BEAUTY",

    trainerName: "THALIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Thalia4: {
    trainerClass: "BEAUTY",

    trainerName: "THALIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Thalia5: {
    trainerClass: "BEAUTY",

    trainerName: "THALIA",
    items: [],
    doubleBattle: false,
    aiFlags: ["AI-SCRIPT-CHECK-BAD-MOVE"],
  },

  Mariela: {
    trainerClass: "PSYCHIC",

    trainerName: "MARIELA",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Alvaro: {
    trainerClass: "PSYCHIC",

    trainerName: "ALVARO",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Everett: {
    trainerClass: "GENTLEMAN",

    trainerName: "EVERETT",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Red: {
    trainerClass: "RIVAL",

    trainerName: "RED",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  Leaf: {
    trainerClass: "RIVAL",

    trainerName: "LEAF",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  BrendanPlaceholder: {
    trainerClass: "RS-PROTAG",

    trainerName: "BRENDAN",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },

  MayPlaceholder: {
    trainerClass: "RS-PROTAG",

    trainerName: "MAY",
    items: [],
    doubleBattle: false,
    aiFlags: [],
  },
}
