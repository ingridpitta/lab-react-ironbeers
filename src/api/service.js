import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
    });
  }

  listAllBeers = async () => {
    try {
      const { data } = await this.api.get('/');
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  listOneBeer = async id => {
    try {
      const { data } = await this.api.get(`/${id}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  listRandomBeer = async () => {
    try {
      const { data } = await this.api.get('/random');
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  seacrhBeer = async query => {
    try {
      const { data } = await this.api.get(`/search?q=${query}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  addBeer = async beer => {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewer_tips,
      attenuation_level,
      contributed_by
    } = beer;
    try {
      const { data } = await this.api.post('/new', {
        name,
        tagline,
        description,
        first_brewed,
        brewer_tips,
        attenuation_level,
        contributed_by
      });
      return data.message;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new ApiService();
