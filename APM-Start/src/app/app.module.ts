import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component';
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
  AppComponent,
  ProductListComponent,
  ConvertToSpacesPipe,
  StarComponent
],
  imports: [
    BrowserModule, 
    FormsModule],
  bootstrap: [
    AppComponent],
})
export class AppModule {}
