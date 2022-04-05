import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books :Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    })
  }
}
