import { Component, OnInit } from '@angular/core';

const destinations = [
  {
    location: 'Mount Rinjani',
    description: 'Do a workshop in traditional crafts',
    imageUrl: 'destinations/jungle1.jpg',
    price: '$246'
  },
  {
    location: 'Mount Bromo',
    description: 'Admire Prambanan at night',
    imageUrl: 'destinations/bromo1.jpg',
    price: '$139'
  },
  {
    location: 'Komodo',
    description: 'Hike to the crater of Mount Bromo',
    imageUrl: 'destinations/komodo1.jpg',
    price: '$433'
  },
  {
    location: 'Aling-Aling',
    description: 'Hike to the crater of Mount Bromo',
    imageUrl: 'destinations/waterfall1.jpg',
    price: '$199'
  },
  {
    location: 'Bali',
    description: 'Hike to the crater of Mount Bromo',
    imageUrl: 'destinations/bali1.jpg',
    price: '$199'
  }
  // {
  //   location: 'Mount Bromo',
  //   description: 'Hike to the crater of Mount Bromo',
  //   imageUrl: 'destinations/palmtrees2.jpg',
  //   price: '$199'
  // }
];

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  destinations = destinations;

  constructor() {}

  ngOnInit() {}
}
