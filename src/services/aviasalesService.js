/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-await */
export default class AviasalesServise {
  _apiBase = 'https://aviasales-test-api.kata.academy/';

  getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `Запрос ${url} завершился ошибкой. Код ошибки ${res.status}`
      );
    }

    return await res.json();
  };

  getSearchId = () => {
    return this.getResourse(`${this._apiBase}search`);
  };

  getTickets = (searchId) => {
    return this.getResourse(`${this._apiBase}tickets?searchId=${searchId}`);
  };
}
