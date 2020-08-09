import {Injectable} from '@angular/core';
import Axios from 'axios';
import {Response} from '../ResponseInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  axios;

  constructor() {
    this.axios = Axios.create({
      params: {
        token: 'this is token'
      }
    });
  }

  getAxios() {
    return this.axios;
  }

  async get(url, params = null): Promise<Response> {
    return new Response(await this.getAxios().get(url, params));
  }

  async post(url, data): Promise<Response> {
    return new Response(await this.getAxios().post(url, data));
  }

}
