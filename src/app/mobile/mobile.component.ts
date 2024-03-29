import { Component, OnInit } from '@angular/core';
interface tableObj {
  backgroundImg: string;
  title: string;
  content: string;
}
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent implements OnInit {
  tableData: tableObj[] = [
    {
      backgroundImg: '../../assets/mobile-image-hero-1.jpg',
      title: 'Discover innovative ways to decorate',
      content:
        'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
      backgroundImg: '../../assets/mobile-image-hero-2.jpg',
      title: 'We are avaiable all across the globe',
      content:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      backgroundImg: '(../../assets/mobile-image-hero-3.jpg',
      title: 'Manufactured with the best materials',
      content:
        'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
  ];
  backgroundImg!: string;
  title!: string;
  content!: string;
  index = 0;
  menu!: boolean;

  ngOnInit(): void {
    this.onAssign();
  }

  onAssign = () => {
    this.backgroundImg = this.tableData[this.index].backgroundImg;
    this.title = this.tableData[this.index].title;
    this.content = this.tableData[this.index].content;
  };

  onMove = (move: string) => {
    if (move === 'left') {
      if (this.index === 0) {
        this.index = this.tableData.length - 1;
      } else {
        this.index -= 1;
      }
    } else {
      if (this.index === this.tableData.length - 1) {
        this.index = 0;
      } else {
        this.index += 1;
      }
    }
    this.onAssign();
  };
  onClickMenu = () => {
    this.menu = !this.menu;
  };
}
