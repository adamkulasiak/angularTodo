import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { LoginComponent } from '../login/login.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { RegisterComponent } from '../register/register.component';

const appRoutes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
