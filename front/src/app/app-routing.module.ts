import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CompagnieComponent } from './compagnie/compagnie.component';
import { TarifComponent } from './tarif/tarif.component';
import { WildcircustourComponent } from './wildcircustour/wildcircustour.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'compagnie', component: CompagnieComponent },
  { path: 'tarifs', component: TarifComponent },
  { path: 'wild-circus-tour', component: WildcircustourComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
