import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http : HttpClient ) { }

  getuerreg(params : any){

    let url = "https://reqres.in/api/users";
    return this.http.post(url,params);

  }

  getuserlist(){
    let url = "https://reqres.in/api/users";
    return this.http.get(url);
  }

  getuserdata(id:any){
    let url = "https://reqres.in/api/users/"+id;
    return this.http.get(url);
  }
}
