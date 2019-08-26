import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripsService } from 'src/app/core/services/trips.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss']
})
export class TripsListComponent implements OnInit {
  trips: Observable<any>;

  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.trips = this.tripsService.getTrips();
    // this.tripsService.getTrips().subscribe(trips => {
    //   console.log(trips);
    // });
  }
}
