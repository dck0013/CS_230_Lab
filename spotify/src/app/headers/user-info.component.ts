import { HttpClient } from "@angular/common/http";
import {Component, Injectable} from "@angular/core";
import { OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable()
@Component({
    selector: 'user-info',
    templateUrl: './user-info.component.html'
})
export class UserInfoComponent {
    myInfo: UserInfo | undefined;

    constructor(private http:HttpClient) {
    }

ngOnInit(): void {
    console.log('Sending get request');
    this.getUserInfo();
    console.log('showing data');
    this.showUserInfo();
}

getUserInfo() {
    return this.http.get<UserInfo>("https://target-app-e3f96-default-rtdb.firebaseio.com/my-info.json")
}

showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) => {
        console.log(data);
        this.myInfo = data;
    })
}

}