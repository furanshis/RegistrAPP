import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./login/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./login/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pag-inicio',
    loadChildren: () => import('./pag-inicio/pag-inicio.module').then( m => m.PagInicioPageModule)
  },
  
  {
    path: 'cambiar',
    loadChildren: () => import('./cambiar/cambiar.module').then( m => m.CambiarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
