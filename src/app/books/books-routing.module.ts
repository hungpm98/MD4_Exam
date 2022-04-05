import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { BookdeleteComponent } from './bookdelete/bookdelete.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';


const routes: Routes = [
  {path: 'list',component:BooklistComponent},
  {path: 'create',component:BookcreateComponent},
  {path: 'update/:id',component:BookupdateComponent},
  {path: 'delete/:id',component:BookdeleteComponent},
  {path: 'detail/:id',component:BookdetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
