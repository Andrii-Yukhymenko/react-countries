const BASE_URL = 'https://restcountries.com/v2/';
const All_COUNTRIES = BASE_URL + 'all';
const SPECIFIC_COUNTRY = BASE_URL + 'name/';

export class RCService {
  getAllCountries() {
    fetch(All_COUNTRIES).then((response) => {
      return response.json();
    });
  }
  getCountry(c) {
    fetch(SPECIFIC_COUNTRY + c).then((response) => {
      return response.json();
    });
  }
}
