import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringifyOptions } from 'node:querystring';
import { ViajesService } from '../services/viajes.service';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../interfaces/usuarios.interface';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.scss',
    imports: [NavComponent, FormsModule, CommonModule ]
})
export class InicioComponent implements OnInit {

    ngOnInit(): void {
        this.obtenerUsuarios();
      }

    public usuarios: Usuario[] = []

    //creamos la variable con la injeccion de la dependencia del servicio
    private usuariosTren = inject(ViajesService);


    // METODO QUE RECIBE EN EVENTO ESCUCHA DE LAS PALABRAS A BUSCAR
    @Output() searchEvent = new EventEmitter<string>();

    // VARIABLE QUE VA ALMACEWNANDO UNA A UNA CADA PALABRA
    searchTerm: string = '';

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

    public obtenerUsuarios() {
        this.usuariosTren.getUsuarios()
            .subscribe(users => {
                console.log(users);
                this.usuarios = users;
            });
    }

    offers = [
        {id: 1, title: 'Belencito, Boyaca', price: 'COP $80.000', image: '../../../assets/img/belencito.jpg' },
        {id: 2, title: 'Tunja, Boyaca', price: 'COP $70.000', image: '../../../assets/img/tunja.jpg' },
        {id: 3,  title: 'La Caro, Cundinamarca', price: 'COP $20.000', image: '../../../assets/img/caro.jpeg' }
      ];


}
