import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService {
    url: string = "https://target-app-e3f96-default-rtdb.firebaseio.com/my-info.json";
    constructor(private http:HttpClient) {
    }

        getUserInfo() {
            return this.http.get<UserInfo>(this.url);
        }
    
}