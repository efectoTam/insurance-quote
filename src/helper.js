// Year difference
export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

// Calculate the result according to the brand
export function calculateBrand(brand) {
  let increase;
  switch(brand) {
    case 'europeo':
      increase = 1.30;
      break;
    case 'americano':
      increase = 1.15;
      break;
    case 'asiatico':
      increase = 1.05;
      break;
    default:
      break;
  }
  return increase;
}

// Calculate the insurance type
export function getPlan(plan) {
  return(plan === 'basico') ? 1.20 : 1.50;
}

// Show first caracter as uppercase
export function uppercaseFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}