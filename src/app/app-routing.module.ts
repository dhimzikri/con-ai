import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConaAppComponent } from './cona-app/cona-app.component'; 

const routes: Routes = [
  { path: 'chatbot', 
    component: ConaAppComponent 
  }, // Route for chatbot
  { 
    path: '', 
    redirectTo: '/chatbot', 
    pathMatch: 'full' }, // Redirect root to chatbot
  { 
    path: '**', 
    redirectTo: '/chatbot' }, // Fallback to chatbot
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
