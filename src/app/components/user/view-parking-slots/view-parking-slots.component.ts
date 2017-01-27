import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-view-parking-slots',
    templateUrl: './view-parking-slots.component.html',
    styleUrls: ['./view-parking-slots.component.css']
})
export class ViewParkingSlotsComponent implements OnInit {

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

                localStorage.setItem("parkingUid", data.uid)

                console.log(this.parking);
                this.slots = this.fs.getList("parkings/" + data.uid + "/slots")
                this.slots
                .take(1)
                    .subscribe(slots => {
                        console.log("slots: ", slots);
                        this.fs.getList('bookings', {
                            query: {
                                orderByChild: 'parkingUid',
                                equalTo: data.uid //only get booking of following parking area
                            }
                        })
                            .take(1)
                            .subscribe(bookingData => {
                                console.log("found bookings for this parking area: ", bookingData);
                                for (let i = 0; i < bookingData.length; i++) {

                                    console.log("booking: ", bookingData[i]);
                                    if (Date().slice(0, 15) == new Date(bookingData[i].till).toString().slice(0, 15)) {
                                        console.log("booking till today, mark it as booked");
                                        this.fs.setData('parkings/' + bookingData[i].parkingUid + "/slots/" + bookingData[i].slot, bookingData[i].till)

                                    } else {
                                        this.fs.setData('parkings/' + bookingData[i].parkingUid + "/slots/" + bookingData[i].slot, false)
                                    }
                                }
                            });
                    })
            });
    }
    parking;
    slots;
}
