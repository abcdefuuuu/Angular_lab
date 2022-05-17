import { Component, OnInit } from '@angular/core';
import { MatMenuItem } from '@angular/material/menu';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']

})
export class TopBarComponent implements OnInit {
  MenuItem: any[] = [
    { content: "登記", router: "form" },
    { content: "調查頁面", router: "survey" },
  ]
  arrayValue() {
    for (let i in this.MenuItem)
      console.log(this.MenuItem[i].content),
      console.log(this.MenuItem[i].router)
  }
  constructor() { }

  ngOnInit(): void {
  }
}

