import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-bookslot',
    templateUrl: './bookslot.component.html',
    styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent implements OnInit {

    constructor(
        private fs: FireService,
        private router: Router,
        private ActivatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {

    console.log("firebase date: ",this.fs.getDate());
    console.log("local date: ",new Date().toISOString());
    
    console.log("local date in mili: ",new Date("2017-01-28T06:03:04.038Z") );


        this.ActivatedRoute.params
            .subscribe((data: any) => {
                console.log("Router params: ", data)
                this.booking.slot = data.slot
            });
        this.fs.getUser()
            .subscribe(auth => {
                console.log("this is auth: ", auth);
                this.booking.userUid = auth.uid;
                this.booking.userEmail = auth.auth.email;
            });

        this.fs.getData("parkings/" + localStorage.getItem("parkingUid"))
            .subscribe(parkingObject => {
                // console.log("parkingObject: ", parkingObject.name);
                this.booking.parkingAreaName = parkingObject.name
            })
    }

    booking = {
        from: null,
        till: null,
        parkingUid: "",
        parkingAreaName: "",
        slot: "",
        userUid: "",
        userEmail: "",
        createdAt: this.fs.getDate(),
    }

    bookSlot() {
        console.log("initial object: ", this.booking.toString());
        let currentDate = Date.now();
        
        console.log("from: "+this.booking.from)                
        console.log("till: "+this.booking.till)
        
        this.booking.parkingUid = localStorage.getItem("parkingUid");
        this.booking.from = new Date(this.booking.from.replace("T",":")).getTime();
        this.booking.till = new Date(this.booking.till.replace("T",":")).getTime();

        console.log("final object: ", this.booking);

        if (this.booking.from < currentDate) {
            alert("'from' date is already passed");
            return 1;
        } else if (this.booking.from > this.booking.till) {
            alert("'till' date must be greater then 'from' date ");
        } else {
            this.fs.getList('bookings', {
                query: {
                    orderByChild: 'parkingUid',
                    equalTo: this.booking.parkingUid
                }
            })
            .take(1)
            .subscribe(bookingData => {
                console.log("found bookings for this parking area: ", bookingData);
                for (let i = 0; i < bookingData.length; i++) {
                    if (bookingData[i].slot == this.booking.slot) {
                        //same slot, check if time is in between
                        console.log(i + ".same slot, check if time is in between");
                        if (
                            (this.booking.from >= bookingData[i].from &&
                                this.booking.from <= bookingData[i].till)
                            ||
                            (this.booking.till >= bookingData[i].from &&
                                this.booking.till <= bookingData[i].till)
                        ) {
                            console.log("in between, please block");
                        }
                    }
                }
                console.log("iteration ended, no booking found in matching time slot");
                this.fs.pushData("bookings", this.booking)
                    .then(done => {
                        alert("Booking Success");
                    });
            });
        }//else ended here
    }//function ended here
}
