import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';
import { XeyeuthichComponent } from './xeyeuthich/xeyeuthich.component';
import { XecuatoiComponent } from './xecuatoi/xecuatoi.component';
import { ThecuatoiComponent } from './thecuatoi/thecuatoi.component';
import { QuatangComponent } from './quatang/quatang.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { DiachiComponent } from './diachi/diachi.component';
import { ChuyencuatoiComponent } from './chuyencuatoi/chuyencuatoi.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LoginadminComponent } from './admin/loginadmin/loginadmin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { DatxeComponent } from './admin/datxe/datxe.component';
import { HistorydatxeComponent } from './admin/historydatxe/historydatxe.component';
import { ManageComponent } from './admin/manage/manage.component';
import { QlmanhinhComponent } from './admin/qlmanhinh/qlmanhinh.component';
import { QlchucvuComponent } from './admin/qlchucvu/qlchucvu.component';
import { PromotionComponent } from './admin/promotion/promotion.component';
import { AddressComponent } from './admin/address/address.component';
import { MycarComponent } from './admin/mycar/mycar.component';
import { CarloveComponent } from './admin/carlove/carlove.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register',component:RegisterComponent},
  { path: 'forgot', component:ForgotComponent},
  { path: 'taikhoan', component:TaikhoanComponent},
  { path: 'xeyeuthich', component:XeyeuthichComponent},
  { path: 'xecuatoi', component:XecuatoiComponent},
  { path: 'thecuatoi', component:ThecuatoiComponent},
  { path: 'quatang', component:QuatangComponent},
  { path: 'khuyenmai', component:KhuyenmaiComponent},
  { path: 'gioithieu', component:GioithieuComponent},
  { path: 'diachi', component:DiachiComponent},
  { path: 'chuyencuatoi', component:ChuyencuatoiComponent},
  { path: 'changepassword', component:ChangepasswordComponent},
  { path: 'loginadmin', component:LoginadminComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'user', component:UserComponent},
  { path: 'datxe', component:DatxeComponent},
  { path: 'history', component:HistorydatxeComponent},
  { path: 'manage', component:ManageComponent},
  { path: 'manhinh', component:QlmanhinhComponent},
  { path: 'chucvu', component:QlchucvuComponent},
  { path: 'promotion', component:PromotionComponent},
  { path: 'qldiachi', component:AddressComponent},
  { path: 'carlove', component:CarloveComponent},
  { path: 'mycar', component:MycarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
