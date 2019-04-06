class Api {
  public fetch(url: string) {
    return fetch(url).then(res => res.json());
  }
}

const Client = new Api();

export default Client;
