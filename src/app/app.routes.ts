import { Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { SomosComponent } from './componentes/somos/somos.component';
import { ViajesComponent } from './componentes/viajes/viajes.component';

export const routes: Routes = [

    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'quienes-somos', component: SomosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'viajes', component: ViajesComponent },
    // CUALQUIER OTRA COSA DISTINTA QUE ANOTEMOS EN LA URL
    // NOS REDIRECCIONARA AL COMPONENTE PRINCIPAL
    //debe ir de ultimas porque angular por debajo
    // al ingresar una ruta el coje este array y busca linea
    //por linea
    { path: '**', redirectTo: '', component: InicioComponent }

];
