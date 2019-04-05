class ApiServices {
  public fetch(url: string) {
    return fetch(url).then(res => res.json());
  }
}

export default ApiServices;
