import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'app-viajes',
    standalone: true,
    templateUrl: './viajes.component.html',
    styleUrl: './viajes.component.scss',
    imports: [NavComponent]
})
export class ViajesComponent {

    // onSearch(searchTerm: string) {
    //     if (searchTerm.trim()) {
    //       this.filteredFincas = this.fincas.filter((finca) =>
    //         finca.alt.toLowerCase().includes(searchTerm.toLowerCase())
    //       );
    //     } else {
    //       this.filteredFincas = [...this.fincas];
    //     }
    //   }
}
