import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-view-parking-area',
    templateUrl: './view-parking-area.component.html',
    styleUrls: ['./view-parking-area.component.css']
})
export class ViewParkingAreaComponent implements OnInit {

    constructor(
        private fs: FireService,
        private router: Router,
        private ActivatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.ActivatedRoute.params
            .subscribe((data: any) => {
                console.log("Router params: ", data)
                this.parking = this.fs.getData("parkings/" + data.uid)
                console.log(this.parking);
                this.bookingsList = this.fs.getList('bookings', {
                            query: {
                                orderByChild: 'parkingUid',
                                equalTo: data.uid //only get booking of following parking area
                            }
                        });
                this.slots = this.fs.getList("parkings/" + data.uid + "/slots")
            });

            
    }
    parking;
    slots;
    bookingsList;
}
