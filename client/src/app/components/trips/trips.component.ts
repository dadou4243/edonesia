import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/core/services/trips.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  trips: Observable<any>;

  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.trips = this.tripsService.getTrips();
    // this.tripsService.getTrips().subscribe(trips => {
    //   console.log(trips);
    // });
  }
}
