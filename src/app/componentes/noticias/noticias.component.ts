import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'app-noticias',
    standalone: true,
    templateUrl: './noticias.component.html',
    styleUrl: './noticias.component.scss',
    imports: [NavComponent]
})
export class NoticiasComponent {

}
