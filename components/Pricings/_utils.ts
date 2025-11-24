// components/pricing/PricingUtils.ts

export const vodOffers = [
  { name: 'Essential', price: 50 },
  { name: 'Standard', price: 150 },
  { name: 'Advanced', price: 250 },
]

export const pricingGrid: Record<number, Record<number, number>> = {
  100: { 1: 99, 2: 146, 3: 190, 4: 204, 5: 230, 6: 251, 7: 265, 8: 274 },
  200: { 1: 127, 2: 196, 3: 260, 4: 282, 5: 321, 6: 351, 7: 372, 8: 385 },
  300: { 1: 155, 2: 246, 3: 331, 4: 360, 5: 411, 6: 451, 7: 479, 8: 496 },
  400: { 1: 183, 2: 296, 3: 402, 4: 437, 5: 501, 6: 551, 7: 586, 8: 607 },
  500: { 1: 210, 2: 346, 3: 473, 4: 515, 5: 591, 6: 651, 7: 693, 8: 718 },
  600: { 1: 226, 2: 374, 3: 512, 4: 558, 5: 642, 6: 706, 7: 752, 8: 780 },
  700: { 1: 252, 2: 421, 3: 579, 4: 631, 5: 726, 6: 800, 7: 853, 8: 884 },
  800: { 1: 278, 2: 467, 3: 645, 4: 704, 5: 811, 6: 894, 7: 953, 8: 988 },
  900: { 1: 304, 2: 514, 3: 711, 4: 777, 5: 895, 6: 987, 7: 1053, 8: 1093 },
  1000: { 1: 330, 2: 561, 3: 778, 4: 850, 5: 980, 6: 1081, 7: 1153, 8: 1197 },
  1500: {
    1: 432,
    2: 745,
    3: 1039,
    4: 1136,
    5: 1312,
    6: 1449,
    7: 1547,
    8: 1606,
  },
  2000: {
    1: 554,
    2: 964,
    3: 1348,
    4: 1477,
    5: 1707,
    6: 1887,
    7: 2015,
    8: 2092,
  },
  2500: {
    1: 675,
    2: 1183,
    3: 1658,
    4: 1817,
    5: 2102,
    6: 2324,
    7: 2483,
    8: 2578,
  },
  3000: {
    1: 797,
    2: 1401,
    3: 1968,
    4: 2157,
    5: 2497,
    6: 2762,
    7: 2950,
    8: 3064,
  },
  3500: {
    1: 918,
    2: 1620,
    3: 2278,
    4: 2497,
    5: 2892,
    6: 3199,
    7: 3418,
    8: 3550,
  },
  4000: {
    1: 1040,
    2: 1839,
    3: 2588,
    4: 2837,
    5: 3287,
    6: 3636,
    7: 3886,
    8: 4036,
  },
  4500: {
    1: 1161,
    2: 2057,
    3: 2898,
    4: 3178,
    5: 3682,
    6: 4074,
    7: 4354,
    8: 4522,
  },
  5000: {
    1: 1283,
    2: 2276,
    3: 3207,
    4: 3518,
    5: 4077,
    6: 4511,
    7: 4822,
    8: 5008,
  },
}

// Define numeric values for steps
export const viewerStepsValues = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000,
  -1,
]

export const hoursStepsValues = [1, 2, 3, 4, 5, 6, 7, 8, -1]

// Define display labels for steps
export const viewerStepsLabels = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '1000',
  '1500',
  '2000',
  '2500',
  '3000',
  '3500',
  '4000',
  '4500',
  '5000',
  '+ de 5000',
]

export const hoursStepsLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '+ de 8 heures']

// For backward compatibility and easier component usage
export const viewerSteps = viewerStepsLabels
export const hoursSteps = hoursStepsLabels

/**
 * Calculate the live price based on viewer count and hours
 * @param viewerIndex Index of the selected viewer count
 * @param hoursIndex Index of the selected hours
 * @returns The price as a number or "Nous contacter" string for special cases
 */
export function calculateLivePrice(viewerIndex: number, hoursIndex: number): number {
  const viewers = viewerStepsValues[viewerIndex]
  const hours = hoursStepsValues[hoursIndex]

  // If either value is -1 (the "+ de X" option), return "Nous contacter"
  if (viewers === -1 || hours === -1) {
    return -1
  }

  // Return the price from the grid or "Nous contacter" if not found
  return pricingGrid[viewers]?.[hours]
}

/**
 * Calculate the total price including VOD and live components
 * @param vodName Name of the selected VOD offer
 * @param viewerIndex Index of the selected viewer count
 * @param hoursIndex Index of the selected hours
 * @returns The total price or "Nous contacter" string for special cases
 */
export function calculateTotalPrice(
  vodName: string,
  viewerIndex: number,
  hoursIndex: number
): number {
  const vodOffer = vodOffers.find((offer) => offer.name === vodName)
  const vodPrice = vodOffer?.price || 0

  const livePrice = calculateLivePrice(viewerIndex, hoursIndex)

  if (livePrice === -1) {
    return -1
  }

  return vodPrice + livePrice
}

/**
 * Format a price value for display
 * @param price The price to format (number or "Nous contacter")
 * @param roundToTens Whether to round the price to the nearest ten
 * @returns Formatted price string
 */
export function formatPrice(price: number, roundToTens = true): string {
  const roundedPrice = roundToTens ? Math.ceil(price / 10) * 10 : price
  return `${roundedPrice}€`
}
