import { Component, OnInit } from '@angular/core';

const activities = [
  {
    location: 'Yogyakarta',
    description: 'Do a workshop in traditional crafts',
    imageUrl: 'trip1.jpg'
  },
  {
    location: 'Prambanan',
    description: 'Admire Prambanan at night',
    imageUrl: 'trip2.jpg'
  },
  {
    location: 'Mount Bromo',
    description: 'Hike to the crater of Mount Bromo',
    imageUrl: 'trip3.jpg'
  }
];

@Component({
  selector: 'app-popular-activities',
  templateUrl: './popular-activities.component.html',
  styleUrls: ['./popular-activities.component.scss']
})
export class PopularActivitiesComponent implements OnInit {
  activities = activities;

  constructor() {}

  ngOnInit() {}
}
