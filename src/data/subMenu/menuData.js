const slugify = (slug) => {
  return (slug.toLowerCase().replace(/\s+/g,"-"))
}

const createSubmenu = (arr) =>
  arr.map((value, index) => ({
    modelId: index,
    modelName: value,
    slug: slugify(value),
  }));

const iphoneSubmenu = createSubmenu([
  // 2020
  "iPhone SE (2nd Gen)",
  "iPhone 12",
  "iPhone 12 Mini",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",

  // 2021
  "iPhone 13",
  "iPhone 13 Mini",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",

  // 2022
  "iPhone SE (3rd Gen)",
  "iPhone 14",
  "iPhone 14 Plus",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",

  // 2023
  "iPhone 15",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",

  // 2024 (Expected)
  "iPhone 16",
  "iPhone 16 Plus",
  "iPhone 16 Pro",
  "iPhone 16 Pro Max",

  // 2025 (Expected)
  "iPhone 17",
  "iPhone 17 Plus",
  "iPhone 17 Pro",
  "iPhone 17 Pro Max",
]);

const samsungSubmenu = createSubmenu([
  // 2022
  "Galaxy S22",
  "Galaxy S22+",
  "Galaxy S22 Ultra",
  "Galaxy Z Fold 4",
  "Galaxy Z Flip 4",
  "Galaxy A53",
  "Galaxy A33",
  "Galaxy M13",
  "Galaxy F13",

  // 2023
  "Galaxy S23",
  "Galaxy S23+",
  "Galaxy S23 Ultra",
  "Galaxy S23 FE",
  "Galaxy Z Fold 5",
  "Galaxy Z Flip 5",
  "Galaxy A54",
  "Galaxy A34",
  "Galaxy M14",
  "Galaxy A14",

  // 2024
  "Galaxy S24",
  "Galaxy S24+",
  "Galaxy S24 Ultra",
  "Galaxy Z Fold 6",
  "Galaxy Z Flip 6",
  "Galaxy A55",
  "Galaxy A35",
  "Galaxy M15",
  "Galaxy F15",
  "Galaxy A05",
  "Galaxy A04s",

  // 2025 (expected/upcoming, can update later)
  "Galaxy S25",
  "Galaxy S25+",
  "Galaxy S25 Ultra",
  "Galaxy Z Fold 7",
  "Galaxy Z Flip 7",
]);

const pixelSubmenu = createSubmenu([
  // 2020
  "Pixel 5",

  // 2021
  "Pixel 6",
  "Pixel 6 Pro",
  "Pixel 5a",

  // 2022
  "Pixel 6a",
  "Pixel 7",
  "Pixel 7 Pro",

  // 2023
  "Pixel 7a",
  "Pixel 8",
  "Pixel 8 Pro",
  "Pixel Fold",

  // 2024
  "Pixel 8a",

  // 2025 (expected/upcoming)
  "Pixel 9",
  "Pixel 9 Pro",
  "Pixel 9 Pro XL",
]);


export { iphoneSubmenu, samsungSubmenu, pixelSubmenu };
