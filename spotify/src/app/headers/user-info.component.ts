import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

@Component({
    selector: 'user-info',
    templateUrl: './user-info.component.html'
})
export class UserInfoComponent {
    myInfo: UserInfo | undefined;

    constructor(private infoService: UserInfoService) {
    }

    ngOnInit(): void {
        console.log('showing data');
        this.showUserInfo();
    }

    showUserInfo() {
        this.infoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}