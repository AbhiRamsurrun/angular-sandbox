import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://test-marketplace-api.herokuapp.com/api/";
  constructor(public http: HttpClient) { }

  endPoints: any = {
    carList: `${this.baseUrl}car/list`,
    addCar: `${this.baseUrl}car/add-car`,
    signIn: `${this.baseUrl}user/signin`,
    carDetails: (slug) => `${this.baseUrl}car/${slug}`,
    editCar: (slug) => `${this.baseUrl}car/edit/${slug}`,
    imageUpload: `${this.baseUrl}car/img-upload`

  };

  getCarList() {
    return this.http.get(`${this.baseUrl}car/list`);
  }

  // addCar(carDetail){
  //   return this.http.post(`${this.baseUrl}car/add-car`,carDetail);
  // }

  request(url: endPointType, method, urlParams?, payload?) {
    const requestUrl = (!urlParams) ? this.endPoints[url] : this.endPoints[url](urlParams);

    if (!payload) {
      return this.http[method](requestUrl);
    }
    return this.http[method](requestUrl, payload);

  }
}


export type endPointType = "carList" | "addCar" | "signIn" | "carDetails" | "editCar" | "imageUpload";
