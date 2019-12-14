import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IPackage } from 'src/app/core/interfaces/packages.model';

const packages = [
  {
    name: 'Full package',
    price: '345',
    features: ['Unlimited food', 'Full concierge service', 'Flights booking']
  },
  {
    name: 'Deluxe package',
    price: '433',
    features: [
      'Unlimited food',
      'Full concierge service',
      'Flights booking',
      'Extra activities'
    ]
  },
  {
    name: 'VIP package',
    price: '599',
    features: [
      'Unlimited food',
      'Full concierge service',
      'Flights booking',
      'Extra activities',
      'VIP services',
      'Gourmet meals'
    ]
  }
];

@Component({
  selector: 'app-form-package',
  templateUrl: './form-package.component.html',
  styleUrls: ['./form-package.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPackageComponent implements OnInit {
  @Input() value;

  @Output() formPackageSelected = new EventEmitter();

  packages: IPackage[];

  constructor() {}

  ngOnInit() {
    this.packages = packages;
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  onPackageSelected(packageName) {
    this.formPackageSelected.emit({
      stepValues: { package: packageName },
      validationErrors: {}
    });
  }
}
