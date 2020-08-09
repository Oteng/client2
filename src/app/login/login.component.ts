import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import api from '../../api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  error = null;

  login = {username: '', password: ''};

  ngOnInit(): void {
  }

  signIn() {
    this.httpService.post(api.login, this.login)
      .then(r => {
        if(r.isFailed())
          this.error = r.getErrMsg();
      });
  }

}
