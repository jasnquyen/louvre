import { type Artifact } from "@shared/schema";
import egyptMask from "@assets/generated_images/Egyptian_golden_death_mask_9873c96b.png";
import egyptScarab from "@assets/generated_images/Egyptian_scarab_amulet_11b78e63.png";
import egyptJar from "@assets/generated_images/Egyptian_canopic_jar_4ac82dfa.png";
import frenchWatch from "@assets/generated_images/French_Rococo_pocket_watch_7cdb8bf3.png";
import frenchCrown from "@assets/generated_images/French_royal_crown_fcfc6e81.png";
import frenchMirror from "@assets/generated_images/French_gilded_mirror_frame_db294e65.png";
import italianBust from "@assets/generated_images/Italian_Roman_marble_bust_7703dd80.png";
import italianDagger from "@assets/generated_images/Venetian_ceremonial_dagger_d0af75d6.png";
import italianWreath from "@assets/generated_images/Roman_golden_laurel_wreath_5e01e714.png";

export const mockArtifacts: Artifact[] = [
  {
    id: "1",
    name: "Golden Death Mask of Pharaoh",
    description: "An exquisite golden funerary mask adorned with lapis lazuli inlays. Believed to be from the New Kingdom period, this artifact represents the pinnacle of ancient Egyptian craftsmanship.",
    exhibit: "Egypt",
    imageUrl: egyptMask,
    visitorEngagement: 8750,
    riskPercentage: 92,
    value: "Priceless",
  },
  {
    id: "2",
    name: "Sacred Scarab Amulet",
    description: "A rare turquoise and gold scarab beetle amulet, symbol of rebirth and protection. The intricate craftsmanship suggests royal ownership.",
    exhibit: "Egypt",
    imageUrl: egyptScarab,
    visitorEngagement: 3200,
    riskPercentage: 58,
    value: "$2.4M",
  },
  {
    id: "3",
    name: "Canopic Jar with Jackal Head",
    description: "One of four ceremonial vessels used to store internal organs during mummification. This jar bears the head of Duamutef, guardian of the stomach.",
    exhibit: "Egypt",
    imageUrl: egyptJar,
    visitorEngagement: 5100,
    riskPercentage: 71,
    value: "$850K",
  },
  {
    id: "4",
    name: "Louis XIV Rococo Pocket Watch",
    description: "An ornate golden timepiece with intricate blue enamel work and diamond accents. Commissioned by the Sun King himself, this watch represents the height of French luxury.",
    exhibit: "France",
    imageUrl: frenchWatch,
    visitorEngagement: 6800,
    riskPercentage: 79,
    value: "$3.2M",
  },
  {
    id: "5",
    name: "Crown of the Bourbon Dynasty",
    description: "A magnificent royal crown encrusted with sapphires, diamonds, and precious gold. Worn during coronation ceremonies of French monarchs.",
    exhibit: "France",
    imageUrl: frenchCrown,
    visitorEngagement: 9200,
    riskPercentage: 95,
    value: "Priceless",
  },
  {
    id: "6",
    name: "Baroque Gilded Mirror Frame",
    description: "An elaborate golden frame featuring acanthus leaves and cherub motifs. Originally adorned the Palace of Versailles.",
    exhibit: "France",
    imageUrl: frenchMirror,
    visitorEngagement: 4100,
    riskPercentage: 64,
    value: "$1.1M",
  },
  {
    id: "7",
    name: "Imperial Roman Marble Bust",
    description: "A pristine marble sculpture depicting a Roman emperor. The exceptional preservation and detailed craftsmanship make this a museum centerpiece.",
    exhibit: "Italy",
    imageUrl: italianBust,
    visitorEngagement: 7300,
    riskPercentage: 83,
    value: "$4.7M",
  },
  {
    id: "8",
    name: "Venetian Ceremonial Dagger",
    description: "A Renaissance-era weapon featuring a jewel-encrusted handle and gold filigree. Used in state ceremonies by Venetian nobles.",
    exhibit: "Italy",
    imageUrl: italianDagger,
    visitorEngagement: 5600,
    riskPercentage: 73,
    value: "$1.8M",
  },
  {
    id: "9",
    name: "Roman Golden Laurel Wreath",
    description: "A delicate crown of golden laurel leaves, awarded to victorious generals and emperors. Symbol of triumph and glory in ancient Rome.",
    exhibit: "Italy",
    imageUrl: italianWreath,
    visitorEngagement: 6400,
    riskPercentage: 77,
    value: "$2.9M",
  },
];
