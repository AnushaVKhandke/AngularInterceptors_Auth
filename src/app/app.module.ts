import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductMngtComponent } from './product-mngt/product-mngt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductMngtComponent,
    ReactiveFormsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductsService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
