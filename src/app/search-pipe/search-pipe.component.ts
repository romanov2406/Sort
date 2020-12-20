import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';
import { User } from './user.model';


@Component({
  selector: 'app-search-pipe',
  templateUrl: './search-pipe.component.html',
  styleUrls: ['./search-pipe.component.css']
})

export class SearchPipeComponent implements OnInit {
  sortingColumn: string;
  isDesc: boolean;
  isBtn:boolean;

  searchField: string;
  flag: boolean;
  isHide: boolean;
  name: string;
  surrname: string;
  number: number;
  userIndex: number
  isAscending: boolean;
  users: Array<IUser> = [
    { name: "Adam", surrname: "Tokarevich", number: 380944578225 },
    { name: "Roman", surrname: "Ivanov", number: 380657852365 },
    { name: "Bogdan", surrname: "Stepanenko", number: 380930296005 },
    { name: "Stepan", surrname: "Oles", number: 3809887801225 },
    { name: "Irina", surrname: "Marian", number: 380977852365 }
  ];
  sortedCollection: any[];

  constructor() {}
  ngOnInit(): void { }

  createUser(): void {
    if (this.name && this.surrname && this.number) {
      let USER = new User(this.name, this.surrname, this.number);
      this.users.push(USER);
      this.isHide = false;
      this.clearInputs();
    } else {
      alert('Write all info')
    }
  }

  showModal(): void {
    this.isHide = true;
  }

  editUser(index): void {
    this.userIndex = index
    this.name = this.users[index].name
    this.surrname = this.users[index].surrname
    this.number = this.users[index].number
    this.showModal();
    this.isBtn = true;
  }
  clearInputs(): void {
    this.searchField = '';
    this.name = '';
    this.surrname = '';
    this.number = null;
  }
  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }

  saveUser(): void {
    let USER = new User(this.name, this.surrname, this.number);
    this.users.splice(this.userIndex, 1, USER);
    this.isHide = false;
    this.clearInputs();
    this.isBtn = false;
  }
  sortNumber(): void {
    this.flag = !this.flag;
    this.flag ? this.users.sort((a, b) => a.number - b.number) : this.users.sort((a, b) => b.number - a.number);
  }
  sortBy(colName): void {
    this.sortingColumn = colName;
    this.isDesc = !this.isDesc
  }
}


