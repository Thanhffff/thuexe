import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NavigationComponent } from './navigation/navigation.component';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';
import { XeyeuthichComponent } from './xeyeuthich/xeyeuthich.component';
import { XecuatoiComponent } from './xecuatoi/xecuatoi.component';
import { ChuyencuatoiComponent } from './chuyencuatoi/chuyencuatoi.component';
import { DiachiComponent } from './diachi/diachi.component';
import { ThecuatoiComponent } from './thecuatoi/thecuatoi.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { QuatangComponent } from './quatang/quatang.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginadminComponent } from './admin/loginadmin/loginadmin.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';;
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DatxeComponent } from './admin/datxe/datxe.component';
import { HistorydatxeComponent } from './admin/historydatxe/historydatxe.component';
import { ManageComponent } from './admin/manage/manage.component';
import { QlmanhinhComponent } from './admin/qlmanhinh/qlmanhinh.component';
import { QlchucvuComponent } from './admin/qlchucvu/qlchucvu.component';
import { PromotionComponent } from './admin/promotion/promotion.component';
import { AddressComponent } from './admin/address/address.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    NavigationComponent,
    TaikhoanComponent,
    XeyeuthichComponent,
    XecuatoiComponent,
    ChuyencuatoiComponent,
    DiachiComponent,
    ThecuatoiComponent,
    KhuyenmaiComponent,
    GioithieuComponent,
    QuatangComponent,
    ChangepasswordComponent,
    LoginadminComponent,
    DashboardComponent,
    UserComponent,
    DatxeComponent,
    HistorydatxeComponent,
    ManageComponent,
    QlmanhinhComponent,
    QlchucvuComponent,
    PromotionComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    DragDropModule,
    ScrollingModule,
    ReactiveFormsModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzModalModule,
    NzAlertModule,
    NzBadgeModule,
    NzMenuModule,
    NzAvatarModule,
    NzProgressModule,
    NzCardModule,
    NzStatisticModule,
    NzTableModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
