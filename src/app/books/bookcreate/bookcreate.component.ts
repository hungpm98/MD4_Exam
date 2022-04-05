import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: "app-bookcreate",
  templateUrl: "./bookcreate.component.html",
  styleUrls: ["./bookcreate.component.css"],
})
export class BookcreateComponent implements OnInit {
  bookForm : FormGroup = new FormGroup({
    title : new FormControl(),
    author: new FormControl(),
    description : new FormControl(),
  })

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {}
  create() {
    console.log(this.bookForm.value);

    this.bookService.create(this.bookForm.value).subscribe(
      () => {
        alert("success");
        this.router.navigate(["books/list"]);
      },
      () => {
        alert("error");
      }
    );
  }
}
