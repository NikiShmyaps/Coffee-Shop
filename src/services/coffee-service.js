export default class Service {
  getItems = async (url) => {
    const res = await fetch(`http://localhost:3001${url}`);
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