import { Component, EventEmitter, Output } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FormsModule } from '@angular/forms';
import { StringifyOptions } from 'node:querystring';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.scss',
    imports: [NavComponent, FormsModule]
})
export class InicioComponent {
    // METODO QUE RECIBE EN EVENTO ESCUCHA DE LAS PALABRAS A BUSCAR
    @Output() searchEvent = new EventEmitter<string>();

    // VARIABLE QUE VA ALMACEWNANDO UNA A UNA CADA PALABRA
    searchTerm: string = '';
    items = [
        {
            id: 1,
            name: "belencito",
            precio: 599
        },
        {
            id: 2,
            name: "belencito",
            precio: 599
        }
    ]

    // METODO MEDIANTE EL CUAL VA VALIDANDO QUE EL BUSCADOR NO ESTE VACIO
    // Y EMITE UNA LISTA DE LO QUE ENCUENTRA 
    onSearch() {
        if (this.searchTerm.trim() === '') {
        // Si el campo de búsqueda está vacío, emite una cadena vacía para mostrar todas las fincas.
        this.searchEvent.emit('');
        } else {
        // Si hay un término de búsqueda, emite el término de búsqueda para filtrar las fincas.
        this.searchEvent.emit(this.searchTerm);
        }
    }

}
