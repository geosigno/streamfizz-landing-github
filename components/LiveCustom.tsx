'use client';
import React, { useState } from 'react';

const vodOffers = [
  { name: 'Essential', price: 50 },
  { name: 'Standard', price: 150 },
  { name: 'Advanced', price: 250 },
];

const pricingGrid: Record<number, Record<number, string | number>> = {
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
  1500: { 1: 432, 2: 745, 3: 1039, 4: 1136, 5: 1312, 6: 1449, 7: 1547, 8: 1606 },
  2000: { 1: 554, 2: 964, 3: 1348, 4: 1477, 5: 1707, 6: 1887, 7: 2015, 8: 2092 },
  2500: { 1: 675, 2: 1183, 3: 1658, 4: 1817, 5: 2102, 6: 2324, 7: 2483, 8: 2578 },
  3000: { 1: 797, 2: 1401, 3: 1968, 4: 2157, 5: 2497, 6: 2762, 7: 2950, 8: 3064 },
  3500: { 1: 918, 2: 1620, 3: 2278, 4: 2497, 5: 2892, 6: 3199, 7: 3418, 8: 3550 },
  4000: { 1: 1040, 2: 1839, 3: 2588, 4: 2837, 5: 3287, 6: 3636, 7: 3886, 8: 4036 },
  4500: { 1: 1161, 2: 2057, 3: 2898, 4: 3178, 5: 3682, 6: 4074, 7: 4354, 8: 4522 },
  5000: { 1: 1283, 2: 2276, 3: 3207, 4: 3518, 5: 4077, 6: 4511, 7: 4822, 8: 5008 },
};

const PricingPayAsYouGoCard = () => {
  const [selectedVod, setSelectedVod] = useState(vodOffers[0].name);
  
  // Définir les paliers pour le slider
  const viewerSteps = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, '+ de 5000'];
  const hoursSteps = [1, 2, 3, 4, 5, 6, 7, 8, '+ de 8 heures'];

  // Utiliser l'index pour le slider
  const [viewerIndex, setViewerIndex] = useState(0);
  const [hoursIndex, setHoursIndex] = useState(0);

  // Obtenir les valeurs sélectionnées
  const selectedViewersValue = viewerSteps[viewerIndex];
  const selectedHoursValue = hoursSteps[hoursIndex];

  const vodPrice = vodOffers.find((offer) => offer.name === selectedVod)?.price;

  const livePrice =
    typeof selectedViewersValue === 'number' && typeof selectedHoursValue === 'number'
      ? pricingGrid[selectedViewersValue]?.[selectedHoursValue] ?? 'Nous contacter'
      : 'Nous contacter';

  return (
    <div className="pricing-payg-card space-y-4 text-sm text-gray-700">
      <p className="text-gray-500">
      Estimez facilement le tarif de votre abonnement adapté à vos besoins récurrents.
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <label className="block font-medium whitespace-nowrap">Choisissez une offre VOD :</label>
          <select
            value={selectedVod}
            onChange={(e) => setSelectedVod(e.target.value)}
            className="block w-full rounded-md border border-gray-200 bg-white py-2 px-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {vodOffers.map((offer) => (
              <option key={offer.name} value={offer.name}>
                {offer.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Slider pour le nombre d'heures de live */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="block font-medium whitespace-nowrap">Nombre d’heures de live :</label>
          <span className="text-sm text-gray-600 whitespace-nowrap">{hoursSteps[hoursIndex]}</span>
        </div>
        <input
          type="range"
          min={0}
          max={hoursSteps.length - 1}
          step={1}
          value={hoursIndex}
          onChange={(e) => setHoursIndex(parseInt(e.target.value))}
          className="w-full cursor-pointer accent-orange-500"
        />
      </div>

      {/* Slider pour le nombre de spectateurs */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="block font-medium whitespace-nowrap">Nombre de spectateurs :</label>
          <span className="text-sm text-gray-600 whitespace-nowrap">{viewerSteps[viewerIndex]}</span>
        </div>
        <input
          type="range"
          min={0}
          max={viewerSteps.length - 1}
          step={1}
          value={viewerIndex}
          onChange={(e) => setViewerIndex(parseInt(e.target.value))}
          className="w-full cursor-pointer accent-orange-500"
        />
      </div>

      <div className="pt-2">
        <h3 className="text-base font-semibold mb-2">Estimation de prix</h3>
        <div className="text-gray-800 text-sm leading-relaxed">
          {typeof livePrice === 'number' && vodPrice ? (
            <>
              <p className="text-3xl font-bold">
                {Math.ceil((vodPrice + livePrice) / 10) * 10}€<span className="text-base font-medium"> HT/mois</span>
              </p>
              <p className="mt-1">soit {(Math.ceil((vodPrice + livePrice) / 10) * 10) * 12}€ HT facturé annuellement</p>
              <p>ou {Math.round((Math.ceil((vodPrice + livePrice) / 10) * 10) * 1.20)}€ HT/mois facturé mensuellement</p>
            </>
          ) : (
            <p className="text-3xl font-bold">Nous contacter</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingPayAsYouGoCard;