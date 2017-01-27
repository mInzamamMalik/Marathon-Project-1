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
            });
    }


    // this.router.navigate(['/login']);
    parking;
    slots;

}
