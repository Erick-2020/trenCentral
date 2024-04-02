import { Component } from '@angular/core';
import { UserComponent } from "../icons/user/user";
import { EmailComponent } from "../icons/email/email";
import { PhoneComponent } from "../icons/phone/phone";
import { MessageComponent } from "../icons/message/message";
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'app-contacto',
    standalone: true,
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.scss',
    imports: [UserComponent, EmailComponent, PhoneComponent, MessageComponent, NavComponent]
})








    
export class ContactoComponent {
  errMessages = document.querySelectorAll('#error')

  toggleError() {
    // Show error message
    this.errMessages.forEach((el) => {
      el.classList.toggle('hidden')
    })
  
    // Highlight input and label with red
    const allBorders = document.querySelectorAll('.border-gray-200')
    const allTexts = document.querySelectorAll('.text-gray-500')
    allBorders.forEach((el) => {
      el.classList.toggle('border-red-600')
    })
    allTexts.forEach((el) => {
      el.classList.toggle('text-red-600')
    })
  }
  
}

