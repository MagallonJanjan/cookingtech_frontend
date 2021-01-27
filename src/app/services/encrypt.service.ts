import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() { }
  
  encrypt(value:string) {
    return CryptoJS.AES.encrypt(value, environment.SECRET_KEY).toString();
  }

  decrypt(cipherText:string) {
    let bytes = CryptoJS.AES.decrypt(cipherText, environment.SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
