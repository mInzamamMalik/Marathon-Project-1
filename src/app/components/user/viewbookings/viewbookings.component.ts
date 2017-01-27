import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';

@Component({
    selector: 'app-viewbookings',
    templateUrl: './viewbookings.component.html',
    styleUrls: ['./viewbookings.component.css']
})
export class ViewbookingsComponent implements OnInit {

    constructor(private fs: FireService, ) { }

    ngOnInit() {
        this.fs.getUser()
            .subscribe(auth => {
                console.log("this is auth: ", auth);
                this.bookingsList = this.fs.getList('bookings', {
                    query: {
                        orderByChild: 'userUid',
                        equalTo: auth.uid
                    }
                })
            });
    }
    bookingsList;
    cancelReservation(item) {
        if (confirm("Are you sure to delete reservation of " + item.parkingAreaName + " Slot: " + item.slot)) {
            this.fs.setData("bookings/" + item.$key, null).then(deleted => {
                console.log("reservation is cancelled: ", deleted);
            })
        }
    }
    print() {
        window.print();
    }

}
