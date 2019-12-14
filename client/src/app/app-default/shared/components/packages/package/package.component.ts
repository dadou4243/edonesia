import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPackage } from 'src/app/core/interfaces/packages.model';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  @Input() package: IPackage;
  @Input() isSelected: boolean;

  @Output() packageSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes) {
    console.log(changes);
  }

  onPackageSelected(selectedPackage) {
    this.packageSelected.emit(selectedPackage.name);
  }
}
