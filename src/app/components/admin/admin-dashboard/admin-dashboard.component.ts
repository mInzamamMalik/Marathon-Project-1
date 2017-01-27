import { Component, OnInit } from '@angular/core';
import { FireService } from '../../../providers/fire.service';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

    constructor(private fs: FireService) { }
    ngOnInit() {
        this.parkings = this.fs.getList('parkings');
    }
    parkings;
    parking = {
        name: "",
        slots: [],
        slotCount: 5
    }

    addParkingArea() {
        for (let i = 0; i < this.parking.slotCount; i++) {
            this.parking.slots[i] = false;
        }
        this.fs.pushData("parkings", this.parking)
            .catch(error => {
                console.log("Error is: ", error);
            })
            .then(data => {
                //this.router.navigate(['/login']);
            });
    }    

}
