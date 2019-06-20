import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'aluno-modal', loadChildren: './aluno-modal/aluno-modal.module#AlunoModalPageModule' },
  { path: 'tarefa', loadChildren: './tarefa/tarefa.module#TarefaPageModule' },
  { path: 'tarefa-modal', loadChildren: './tarefa-modal/tarefa-modal.module#TarefaModalPageModule' },
  { path: 'tarefa-detail/:nome', loadChildren: './tarefa-detail/tarefa-detail.module#TarefaDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
