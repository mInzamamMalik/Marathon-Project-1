import { Component } from '@angular/core';
import { FireService } from './providers/fire.service';
declare let emailjs: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private fs: FireService) { }
    
    title = 'Parking System!';
    
    ngOnInit() {

        // if(!this.fs.getUser()){
        //     this.fs.logout();
        // }

        // emailjs.send("gmail", "abc", {
        //     name: "James",
        //     notes: "Check this out!",
        //     email: "a@a.com",
        //     content: "this is text of email"

        // }).then(function (response) {
        //     console.log("SUCCESS", response);
        // }, function (error) {
        //     console.log("FAILED", error);
        // });
    }
}
