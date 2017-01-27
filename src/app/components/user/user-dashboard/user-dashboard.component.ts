import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

    constructor(private fs: FireService) { }

    ngOnInit() {
        this.parkings = this.fs.getList('parkings');
    }
    parkings;

}
