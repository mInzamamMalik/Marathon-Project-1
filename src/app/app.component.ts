import { Component } from '@angular/core';
declare let emailjs: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Parking System!';
    ngOnInit() {
        emailjs.send("gmail", "abc", {
            name: "James",
            notes: "Check this out!",
            email: "a@a.com",
            content: "this is text of email"

        }).then(function (response) {
            console.log("SUCCESS", response);
        }, function (error) {
            console.log("FAILED", error);
        });
    }
}
