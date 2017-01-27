import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

    constructor(private fs: FireService) { }

    ngOnInit() {
        this.fs.getUser()
            .take(1)
            .subscribe(auth => {
                this.feedback.sender = auth.uid;
                this.feedbacks = this.fs.getList('feedback', {
                    query: {
                        orderByChild: 'sender',
                        equalTo: this.feedback.sender
                    }
                })
            })
    }
    feedbacks;
    feedback = {
        subject: "",
        message: "",
        sender: ""
    }

    sendFeedback() {
        this.fs.pushData("feedback", this.feedback)
            .then(done => {
                console.log("push done");                
            })
    }



}
