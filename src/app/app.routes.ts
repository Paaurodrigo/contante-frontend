import { Routes } from '@angular/router';
import { UsuarioAdminPlistRoutedComponent } from './component/usuario/usuario.admin.plist.routed/usuario.admin.plist.routed.component';
import { UsuarioAdminEditRoutedComponent } from './component/usuario/usuario.admin.edit.routed/usuario.admin.edit.routed.component';
import { SharedHomeRoutedComponent } from './component/shared/shared.home.routed/shared.home.routed.component';
import { UsuarioAdminViewRoutedComponent } from './component/usuario/usuario.admin.view.routed/usuario.admin.view.routed.component';
import { UsuarioAdminCreateRoutedComponent } from './component/usuario/usuario.admin.create.routed/usuario.admin.create.routed.component';
import { UsuarioAdminDeleteRoutedComponent } from './component/usuario/usuario.admin.delete.routed/usuario.admin.delete.component';
import { ApunteAdminDeleteRoutedComponent } from './component/apunte/apunte.admin.delete.routed/apunte.admin.delete.component';
import { ApunteAdminPlistRoutedComponent } from './component/apunte/apunte.admin.plist.routed/apunte.admin.plist.routed.component';
import { ApunteAdminEditRoutedComponent } from './component/apunte/apunte.admin.edit.routed/apunte.admin.edit.routed.component';
import { ApunteAdminViewRoutedComponent } from './component/apunte/apunte.admin.view.routed/apunte.admin.view.routed.component';
import { ApunteAdminCreateRoutedComponent } from './component/apunte/apunte.admin.create.routed/apunte.admin.create.routed.component';
import { TipoAsientoAdminPlistRoutedComponent } from './component/tipoAsiento/tipoAsiento.admin.plist.routed/tipoAsiento.admin.plist.routed.component';
import { TipoAsientoAdminEditRoutedComponent } from './component/tipoAsiento/tipoAsiento.admin.edit.routed/tipoAsiento.admin.edit.routed.component';
import { TipoAsientoAdminViewRoutedComponent } from './component/tipoAsiento/tipoAsiento.admin.view.routed/tipoAsiento.admin.view.routed.component';
import { TipoAsientoAdminCreateRoutedComponent } from './component/tipoAsiento/tipoAsiento.admin.create.routed/tipoAsiento.admin.create.routed.component';
import { TipoAsientoAdminDeleteRoutedComponent } from './component/tipoAsiento/tipoAsiento.admin.delete.routed/tipoAsiento.admin.delete.routed.component';

export const routes: Routes = [
  { path: '', component: SharedHomeRoutedComponent },
  { path: 'home', component: SharedHomeRoutedComponent },
  { path: 'admin/usuario/plist', component: UsuarioAdminPlistRoutedComponent },
  { path: 'admin/usuario/edit/:id', component: UsuarioAdminEditRoutedComponent },
  { path: 'admin/usuario/view/:id', component: UsuarioAdminViewRoutedComponent },
  { path: 'admin/usuario/create', component: UsuarioAdminCreateRoutedComponent, pathMatch: 'full' },
  { path: 'admin/usuario/delete/:id', component: UsuarioAdminDeleteRoutedComponent },

  { path: 'admin/apunte/plist', component: ApunteAdminPlistRoutedComponent },
  { path: 'admin/apunte/edit/:id', component: ApunteAdminEditRoutedComponent },
  { path: 'admin/apunte/view/:id', component: ApunteAdminViewRoutedComponent },
  { path: 'admin/apunte/create', component: ApunteAdminCreateRoutedComponent, pathMatch: 'full' },
  { path: 'admin/apunte/delete/:id', component: ApunteAdminDeleteRoutedComponent },

  { path: 'admin/tipoAsiento/plist', component: TipoAsientoAdminPlistRoutedComponent },
  { path: 'admin/tipoAsiento/edit/:id', component: TipoAsientoAdminEditRoutedComponent },
  { path: 'admin/tipoAsiento/view/:id', component: TipoAsientoAdminViewRoutedComponent },
  { path: 'admin/tipoAsiento/create', component: TipoAsientoAdminCreateRoutedComponent, pathMatch: 'full' },
  { path: 'admin/tipoAsiento/delete/:id', component: TipoAsientoAdminDeleteRoutedComponent },
  

];
