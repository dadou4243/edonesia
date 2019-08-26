import { Component, OnInit } from '@angular/core';

const activities = [
  {
    location: 'Yogyakarta',
    description: 'Do a workshop in traditional crafts',
    imageUrl: 'trip1.jpg',
    price: '$246'
  },
  {
    location: 'Prambanan',
    description: 'Admire Prambanan at night',
    imageUrl: 'trip2.jpg',
    price: '$139'
  },
  {
    location: 'Mount Bromo',
    description: 'Hike to the crater of Mount Bromo',
    imageUrl: 'trip3.jpg',
    price: '$433'
  },
  {
    location: 'Mount Bromo',
    description: 'Hike to the crater of Mount Bromo',
    imageUrl: 'kayak.jpg',
    price: '$199'
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
