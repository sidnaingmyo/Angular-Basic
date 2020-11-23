import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    {id:1 , name : 'Aung Aung'},
    {id : 2 , name:  'Mg Mg'},
    {id:3 , name: 'Phwe Phwe'}
  ]
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  backTohome(){
    this.router.navigate(['home'])
  }
}
