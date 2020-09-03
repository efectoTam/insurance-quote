// Year difference
export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

// Calculate the result according to the brand
export function calculateBrand(brand) {
  let increase;
  switch(brand) {
    case 'european':
      increase = 1.30;
      break;
    case 'american':
      increase = 1.15;
      break;
    case 'asian':
      increase = 1.05;
      break;
    default:
      break;
  }
  return increase;
}