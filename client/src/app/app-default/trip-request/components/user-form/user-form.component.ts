import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneNumberComponent } from 'ngx-international-phone-number';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, AfterViewInit {
    userForm: FormGroup;

    @ViewChild('phonePrefixElement', {static: false, read: ElementRef}) phonePrefixElement: ElementRef;

    constructor(private formBuilder: FormBuilder,
                private renderer: Renderer2) {
        this.userForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(10)]],
            lastName: ['', [Validators.required, Validators.minLength(10)]],
            email: ['', [Validators.email]],
            phonePrefix: ['+1', [Validators.required]],
            phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
            country: ['', [Validators.required]],
            contact: ['', [Validators.required]],
            confirmContact: ['', [Validators.required]],
            generalTerms: ['', [Validators.required]],
        });
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log('childComponent', this.phonePrefixElement);
        const phonePrefixInputElement = this.phonePrefixElement.nativeElement.children[0].children[1];
        console.log(phonePrefixInputElement);
        this.renderer.setAttribute(phonePrefixInputElement, 'disabled', '');
        this.renderer.addClass(phonePrefixInputElement, 'prefix-input');

    }

}
