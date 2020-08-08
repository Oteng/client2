import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {User} from '../../UserInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drugs = [
    {
      img: '/assets/images/drug1.jpg',
      des: 'Some powerful drugs',
      price: 'GHc 20.00',
      id: 1
    }, {
      img: '/assets/images/drug1.jpg',
      des: 'Dragon Drugs',
      price: 'GHc 10.00',
      id: 2
    }, {
      img: '/assets/images/drug3.jpg',
      des: 'Para',
      price: 'GHc 1.00',
      id: 3
    }
  ];

  todos: User[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getAxios().get('https://localhost:3000/users')
      .then(res => {
        console.log(res.data)
        this.todos = res.data;
      });
  }

}
