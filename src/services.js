const BASE_URL = 'https://restcountries.com/v2/';
const All_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';
const SPECIFIC_COUNTRY = BASE_URL + 'name/';

export class RCServices {
  async getAllCountries() {
    let a = await fetch(All_COUNTRIES);
    if (!a.ok){
      console.log('ERROR')
    } else {
      return a.json();
    }

  }

  async getCountry(country) {
    let a = await fetch(SPECIFIC_COUNTRY + country);
    if (!a.ok){
      console.log('ERROR')
    } else {
      return a.json();
    }
  }
  async filterByCodes(codes) {
    let a = await fetch(SPECIFIC_COUNTRY + 'alpha?codes=' + codes.join(','));
    if (!a.ok){
      console.log('ERROR')
    } else {
      return a.json();
    }
  }
}
