import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  bookForm: FormGroup;
  id:number;
  book : Book[] = [];

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get("id");
      this.getById(this.id);
    });
  }

  ngOnInit() {
    this.getById(this.id);
  }
  getById(id){
    this.bookService.getById(id).subscribe(book => {
        this.book=book;
    })

  }

}
