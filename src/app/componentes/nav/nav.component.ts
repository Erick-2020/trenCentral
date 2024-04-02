import { Component, signal } from '@angular/core';
import { EmpresaComponent } from "../icons/iconoEmp/icono";

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
    imports: [EmpresaComponent]
})
export class NavComponent {
  
  entrar = false;

}
