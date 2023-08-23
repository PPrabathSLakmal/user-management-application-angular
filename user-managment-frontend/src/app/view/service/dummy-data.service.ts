import { Injectable } from '@angular/core';
import {User} from "../../dto/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {
  public dummyUserList:Array<User> = [];
  dummyUser1:any;
  dummyUser2:any;
  dummyUser3:any;
  dummyUser4:any;
  dummyUser5:any;
  dummyUser6:any;
  dummyUser7:any;
  dummyUser8:any;
  dummyUser9:any;

  constructor() {
    this.createDummy();
  }
  createDummy(){
    this.dummyUser1 = new User("Kasun","KKKK","071-7845963","aoufh.fsdghaj" );
    this.dummyUser2 = new User("Ruwan","sssdf","071-7845963","aoufh.fsdghaj" );
    this.dummyUser3 = new User("Sunil","dddsdf","071-7845963","aoufh.fsdghaj" );
    this.dummyUser4 = new User("Rajitha","ggesdf","071-7845963","aoufh.fsdghaj" );
    this.dummyUser5 = new User("Supun","etedsdsf","071-7845963","aoufh.fsdghaj" );
    this.dummyUser6 = new User("Saman","cvsdfxs","071-7845963","aoufh.fsdghaj" );
    this.dummyUser7 = new User("Namal","etsdfw","071-7845963","aoufh.fsdghaj" );
    this.dummyUser8 = new User("Nuwan","fsdfg","071-7845963","aoufh.fsdghaj" );
    this.dummyUser9 = new User("Kasun","rsdfgr","071-7845963","aoufh.fsdghaj" );
    this.dummyUser1.id = 1;
    this.dummyUser2.id = 2;
    this.dummyUser3.id = 3;
    this.dummyUser4.id = 4;
    this.dummyUser5.id = 5;
    this.dummyUser6.id = 6;
    this.dummyUser7.id = 7;
    this.dummyUser8.id = 8;
    this.dummyUser9.id = 9;

    this.dummyUserList.push(this.dummyUser1, this.dummyUser2, this.dummyUser3, this.dummyUser4, this.dummyUser5, this.dummyUser6,
      this.dummyUser7, this.dummyUser8, this.dummyUser9);
  }
  getDummyData():Observable<User[]>{
    return of(this.dummyUserList)
  }
}
