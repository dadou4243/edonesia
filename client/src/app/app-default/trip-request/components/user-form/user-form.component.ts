import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneNumberComponent } from 'ngx-international-phone-number';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, AfterViewInit {
    userForm: FormGroup;
    contactData = [
        { id: 'whatsapp', name: 'Whatsapp' },
        { id: 'skype', name: 'Skype' },
        { id: 'viber', name: 'Viber' },
        { id: 'line', name: 'Line' }
    ];

    get contacts() {
        return this.userForm.get('contacts');
    };

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
            confirmContact: ['', [Validators.required]],
            generalTerms: ['', [Validators.required]],
            contacts: this.formBuilder.array([]),
        });

        console.log('contacts', this.userForm.controls.contacts)

        this.addCheckboxes();
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const phonePrefixInputElement = this.phonePrefixElement.nativeElement.children[0].children[1];
        this.renderer.setAttribute(phonePrefixInputElement, 'disabled', '');
        this.renderer.addClass(phonePrefixInputElement, 'prefix-input');
    }

    private addCheckboxes() {
        this.contactData.forEach((o, i) => {
            const control = this.formBuilder.control(i === 0);
            (this.userForm.controls.contacts as FormArray).push(control);
        });
    }

}
