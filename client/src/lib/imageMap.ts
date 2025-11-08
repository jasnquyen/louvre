import egyptMask from "@assets/generated_images/Egyptian_golden_death_mask_9873c96b.png";
import egyptScarab from "@assets/generated_images/Egyptian_scarab_amulet_11b78e63.png";
import egyptJar from "@assets/generated_images/Egyptian_canopic_jar_4ac82dfa.png";
import frenchWatch from "@assets/generated_images/French_Rococo_pocket_watch_7cdb8bf3.png";
import frenchCrown from "@assets/generated_images/French_royal_crown_fcfc6e81.png";
import frenchMirror from "@assets/generated_images/French_gilded_mirror_frame_db294e65.png";
import italianBust from "@assets/generated_images/Italian_Roman_marble_bust_7703dd80.png";
import italianDagger from "@assets/generated_images/Venetian_ceremonial_dagger_d0af75d6.png";
import italianWreath from "@assets/generated_images/Roman_golden_laurel_wreath_5e01e714.png";

const map: Record<string, string> = {
  "Egyptian_golden_death_mask_9873c96b.png": egyptMask,
  "Egyptian_scarab_amulet_11b78e63.png": egyptScarab,
  "Egyptian_canopic_jar_4ac82dfa.png": egyptJar,
  "French_Rococo_pocket_watch_7cdb8bf3.png": frenchWatch,
  "French_royal_crown_fcfc6e81.png": frenchCrown,
  "French_gilded_mirror_frame_db294e65.png": frenchMirror,
  "Italian_Roman_marble_bust_7703dd80.png": italianBust,
  "Venetian_ceremonial_dagger_d0af75d6.png": italianDagger,
  "Roman_golden_laurel_wreath_5e01e714.png": italianWreath,
};

export function getImageUrl(filename?: string | null) {
  if (!filename) return undefined;
  return map[filename] ?? undefined;
}

export default map;
