import { Component, OnInit, inject } from '@angular/core';
import { UserComponent } from "../icons/user/user";
import { EmailComponent } from "../icons/email/email";
import { PhoneComponent } from "../icons/phone/phone";
import { MessageComponent } from "../icons/message/message";
import { NavComponent } from "../nav/nav.component";
import { FormBuilder, FormControlName, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-contacto',
    standalone: true,
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.scss',
    imports: [UserComponent, EmailComponent, PhoneComponent, MessageComponent, NavComponent, FormsModule]
})
    
export class ContactoComponent implements OnInit {

  FormContact = FormGroup;

  ngOnInit(): void {}


  private formBuilder = inject(FormBuilder);

  formContact = this.formBuilder.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required]],
  })

  contact() {
    if (this.formContact.valid) {
      console.log(this.formContact.value);
    } else {
      console.log('Formulario no válido');
    }
  }
  
}

