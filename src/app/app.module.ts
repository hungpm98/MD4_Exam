import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookcreateComponent } from './books/bookcreate/bookcreate.component';
import { BookupdateComponent } from './books/bookupdate/bookupdate.component';
import { BooklistComponent } from './books/booklist/booklist.component';
import { BookdetailComponent } from './books/bookdetail/bookdetail.component';
import { BookdeleteComponent } from './books/bookdelete/bookdelete.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookcreateComponent,
    BookupdateComponent,
    BooklistComponent,
    BookdetailComponent,
    BookdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
