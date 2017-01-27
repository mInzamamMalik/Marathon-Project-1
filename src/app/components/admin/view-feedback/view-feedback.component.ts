import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';

@Component({
    selector: 'app-view-feedback',
    templateUrl: './view-feedback.component.html',
    styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

    constructor(private fs: FireService) { }

    ngOnInit() {
        this.feedbacks = this.fs.getList('feedback')
        this.feedbacks.subscribe(console.log)
    }
    feedbacks;
    reply = "";

    sendReply(key) {
        this.fs.setData("feedback/" + key + "/reply", this.reply)
            .catch(error => {
                console.log("Error is: ", error);
                alert(error);
            })
            .then(data => {
                
            });
    }

}
