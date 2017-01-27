import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';

@Component({
    selector: 'app-view-all-bookings',
    templateUrl: './view-all-bookings.component.html',
    styleUrls: ['./view-all-bookings.component.css']
})
export class ViewAllBookingsComponent implements OnInit {

    constructor(private fs: FireService, ) { }

    ngOnInit() {
        this.bookingsList = this.fs.getList('bookings')
    }
    bookingsList;
    cancelReservation(item) {
        if (confirm("Are you sure to delete reservation of " + item.parkingAreaName + " Slot: " + item.slot)) {
            this.fs.setData("bookings/" + item.$key, null).then(deleted => {
                console.log("reservation is cancelled: ", deleted);
            })
        }
    }
}
