import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: "app-bookdelete",
  templateUrl: "./bookdelete.component.html",
  styleUrls: ["./bookdelete.component.css"],
})
export class BookdeleteComponent implements OnInit {
  bookForm: FormGroup;
  id: number;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get("id");
      this.getById(this.id);
    });
  }

  ngOnInit() {}
  getById(id) {
    // console.log(this.bookService.getById(id));

    this.bookService.getById(id).subscribe((book) => {
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description),
      });
    });
  }
  deleteById(id) {
    this.bookService.deleteById(id).subscribe(
      () => {
        this.router.navigate(["books/list"]);
        alert("Book deleted successfully");
      },
      () => {
        alert("Book not deleted successfully");
      }
    );
  }
}
