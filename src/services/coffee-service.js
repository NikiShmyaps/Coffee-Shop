export default class Service {
  async getItems (url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could no fetch ${url} received ${res.status}`);
    }
    return await res.json();
  }

  getBestsellers = async () => {
    return await this.getItems('/bestsellers');
  };
  getCoffee = async () => {
    return await this.getItems('/coffee');
  }
  getGoods = async () => {
    return await this.getItems('/goods');
  }
}