import ITEM_STAT_NAMES from './itemStatNames'
import ITEM_STAT_TYPES from './itemStatTypes'
import ATTRIBUTES from './attributes'

export default {
  [ITEM_STAT_NAMES.BERSERKER]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [[ATTRIBUTES.POWER], [ATTRIBUTES.PRECISION, ATTRIBUTES.FEROCITY]],
  },
  [ITEM_STAT_NAMES.ZEALOT]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.POWER],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.HEALING_POWER],
    ],
  },
  [ITEM_STAT_NAMES.SOLDIER]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [[ATTRIBUTES.POWER], [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.VITALITY]],
  },
  [ITEM_STAT_NAMES.FORSAKEN]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.POWER],
      [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.HEALING_POWER],
    ],
  },
  [ITEM_STAT_NAMES.VALKYRIE]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [[ATTRIBUTES.POWER], [ATTRIBUTES.VITALITY, ATTRIBUTES.FEROCITY]],
  },
  [ITEM_STAT_NAMES.HARRIER]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.POWER],
      [ATTRIBUTES.HEALING_POWER, ATTRIBUTES.CONCENTRATION],
    ],
  },
  [ITEM_STAT_NAMES.PALADIN]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION],
      [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.VITALITY],
    ],
  },
  [ITEM_STAT_NAMES.COMMANDER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION],
      [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.CONCENTRATION],
    ],
  },
  [ITEM_STAT_NAMES.DEMOLISHER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION],
      [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.FEROCITY],
    ],
  },
  [ITEM_STAT_NAMES.SWASHBUCKLER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION],
      [ATTRIBUTES.VITALITY, ATTRIBUTES.CONDITION_DAMAGE],
    ],
  },
  [ITEM_STAT_NAMES.MARAUDER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION],
      [ATTRIBUTES.VITALITY, ATTRIBUTES.FEROCITY],
    ],
  },
  [ITEM_STAT_NAMES.AVATAR]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION],
      [ATTRIBUTES.VITALITY, ATTRIBUTES.HEALING_POWER],
    ],
  },
  [ITEM_STAT_NAMES.SEEKER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION],
      [ATTRIBUTES.CONCENTRATION, ATTRIBUTES.FEROCITY],
    ],
  },
  [ITEM_STAT_NAMES.DESTROYER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION],
      [ATTRIBUTES.CONDITION_DAMAGE, ATTRIBUTES.FEROCITY],
    ],
  },
  [ITEM_STAT_NAMES.VIGILANT]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.TOUGHNESS],
      [ATTRIBUTES.CONCENTRATION, ATTRIBUTES.EXPERTISE],
    ],
  },
  [ITEM_STAT_NAMES.CRUSADER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.TOUGHNESS],
      [ATTRIBUTES.FEROCITY, ATTRIBUTES.HEALING_POWER],
    ],
  },
  [ITEM_STAT_NAMES.WANDERER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.VITALITY],
      [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.CONCENTRATION],
    ],
  },
  [ITEM_STAT_NAMES.DIVINER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.CONCENTRATION],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.FEROCITY],
    ],
  },
  [ITEM_STAT_NAMES.WIZARD]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.VITALITY],
    ],
  },
  [ITEM_STAT_NAMES.VIPER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.EXPERTISE],
    ],
  },
  [ITEM_STAT_NAMES.GRIEVING]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.FEROCITY],
    ],
  },
  [ITEM_STAT_NAMES.SAGE]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.VITALITY, ATTRIBUTES.HEALING_POWER],
    ],
  },
  [ITEM_STAT_NAMES.MARSHAL]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.HEALING_POWER],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.CONDITION_DAMAGE],
    ],
  },
  [ITEM_STAT_NAMES.MENDER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.POWER, ATTRIBUTES.HEALING_POWER],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.VITALITY],
    ],
  },
  [ITEM_STAT_NAMES.CAPTAIN]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [[ATTRIBUTES.PRECISION], [ATTRIBUTES.POWER, ATTRIBUTES.TOUGHNESS]],
  },
  [ITEM_STAT_NAMES.RAMPAGER]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.PRECISION],
      [ATTRIBUTES.POWER, ATTRIBUTES.CONDITION_DAMAGE],
    ],
  },
  [ITEM_STAT_NAMES.ASSASSIN]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [[ATTRIBUTES.PRECISION], [ATTRIBUTES.POWER, ATTRIBUTES.FEROCITY]],
  },
  [ITEM_STAT_NAMES.DEADSHOT]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.PRECISION, ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.VITALITY, ATTRIBUTES.EXPERTISE],
    ],
  },
  [ITEM_STAT_NAMES.SERAPH]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.PRECISION, ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.CONCENTRATION, ATTRIBUTES.HEALING_POWER],
    ],
  },
  [ITEM_STAT_NAMES.KNIGHT]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [[ATTRIBUTES.TOUGHNESS], [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION]],
  },
  [ITEM_STAT_NAMES.CAVALIER]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [[ATTRIBUTES.TOUGHNESS], [ATTRIBUTES.POWER, ATTRIBUTES.FEROCITY]],
  },
  [ITEM_STAT_NAMES.NOMAD]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.TOUGHNESS],
      [ATTRIBUTES.VITALITY, ATTRIBUTES.HEALING_POWER],
    ],
  },
  [ITEM_STAT_NAMES.SETTLER]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.TOUGHNESS],
      [ATTRIBUTES.CONDITION_DAMAGE, ATTRIBUTES.HEALING_POWER],
    ],
  },
  [ITEM_STAT_NAMES.GIVER]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.TOUGHNESS],
      [ATTRIBUTES.HEALING_POWER, ATTRIBUTES.CONCENTRATION],
    ],
  },
  [ITEM_STAT_NAMES.TRAILBLAZER]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.VITALITY, ATTRIBUTES.EXPERTISE],
    ],
  },
  [ITEM_STAT_NAMES.MINSTREL]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.HEALING_POWER],
      [ATTRIBUTES.VITALITY, ATTRIBUTES.CONCENTRATION],
    ],
  },
  [ITEM_STAT_NAMES.BARBARIAN]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [[ATTRIBUTES.VITALITY], [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION]],
  },
  [ITEM_STAT_NAMES.SENTINEL]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [[ATTRIBUTES.VITALITY], [ATTRIBUTES.POWER, ATTRIBUTES.TOUGHNESS]],
  },
  [ITEM_STAT_NAMES.SHAMAN]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.VITALITY],
      [ATTRIBUTES.CONDITION_DAMAGE, ATTRIBUTES.HEALING_POWER],
    ],
  },
  [ITEM_STAT_NAMES.SINISTER]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.POWER, ATTRIBUTES.PRECISION],
    ],
  },
  [ITEM_STAT_NAMES.CARRION]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.POWER],
    ],
  },
  [ITEM_STAT_NAMES.RABID]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.TOUGHNESS],
    ],
  },
  [ITEM_STAT_NAMES.DIRE]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.VITALITY],
    ],
  },
  [ITEM_STAT_NAMES.APOSTATE]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.CONDITION_DAMAGE],
      [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.HEALING_POWER],
    ],
  },
  [ITEM_STAT_NAMES.PLAGUEDOCTOR]: {
    type: ITEM_STAT_TYPES.QUADRUPLE,
    bonuses: [
      [ATTRIBUTES.CONDITION_DAMAGE, ATTRIBUTES.VITALITY],
      [ATTRIBUTES.HEALING_POWER, ATTRIBUTES.CONCENTRATION],
    ],
  },
  [ITEM_STAT_NAMES.BRINGER]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.EXPERTISE],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.VITALITY],
    ],
  },
  [ITEM_STAT_NAMES.CLERIC]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.HEALING_POWER],
      [ATTRIBUTES.POWER, ATTRIBUTES.TOUGHNESS],
    ],
  },
  [ITEM_STAT_NAMES.MAGI]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.HEALING_POWER],
      [ATTRIBUTES.PRECISION, ATTRIBUTES.VITALITY],
    ],
  },
  [ITEM_STAT_NAMES.APOTHECARY]: {
    type: ITEM_STAT_TYPES.TRIPLE,
    bonuses: [
      [ATTRIBUTES.HEALING_POWER],
      [ATTRIBUTES.TOUGHNESS, ATTRIBUTES.CONDITION_DAMAGE],
    ],
  },
  [ITEM_STAT_NAMES.CELESTIAL]: {
    type: ITEM_STAT_TYPES.ALL,
    bonuses: [
      [
        ATTRIBUTES.POWER,
        ATTRIBUTES.TOUGHNESS,
        ATTRIBUTES.VITALITY,
        ATTRIBUTES.PRECISION,
        ATTRIBUTES.FEROCITY,
        ATTRIBUTES.CONDITION_DAMAGE,
        ATTRIBUTES.HEALING_POWER,
        ATTRIBUTES.CONCENTRATION,
        ATTRIBUTES.EXPERTISE,
      ],
    ],
  },
}
