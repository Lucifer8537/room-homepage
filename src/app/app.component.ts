import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  mobileView!: boolean;
  @HostListener('window:resize', ['$event'])
  onResize = () => {
    if (window.innerWidth < 678 || window.outerWidth < 678) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  };

  ngOnInit(): void {
    this.onResize();
  }
}
