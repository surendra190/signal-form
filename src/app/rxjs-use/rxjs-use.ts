import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  of,
  map,
  tap,
  filter,
  switchMap,
  mergeMap,
  concatMap,
  forkJoin,
  exhaustMap,
  delay,
  retry,
} from 'rxjs';

interface Employee {
  id: number;
  name: string;
  email: string;
  age: number;
  department: string;
  designation: string;
  salary: number;
}

@Component({
  imports: [],
  selector: 'app-rxjs-use',
  styleUrl: './rxjs-use.css',
  templateUrl: './rxjs-use.html',
})
export class RxjsUse {
  constructor(private http: HttpClient) {
    // this.usemap();
    // this.usetap();
    // this.usehttp();
    this.useswitchmap();
    //this.usemergeMap();
    //this.concatMap();
    // this.useforkjoin();
    this.useExhaustMap();
  }
  usemap() {
    of(1, 2, 3) //The of function in RxJS is a creation operator that converts the arguments you pass into it into an Observable sequence
      .pipe(map((x) => x * 10))
      .subscribe((result) => {
        console.log('Rxjs result:', result);
      });
  }
  usetap() {
    of(1, 2, 3)
      .pipe(
        tap((x) => console.log('before', x)),
        map((x) => x * 10),
        filter((x) => x > 10),
        tap((x) => console.log('after', x)),
      )
      .subscribe((result) => {
        console.log('Rxjs result:', result);
      });
  }

  usehttp() {
    this.http
      .get<any[]>('http://localhost:3000/employees')
      .pipe(map((employees) => employees.map((employee) => employee.age * 10)))
      .subscribe((result) => {
        console.log('Rxjs result:', result);
      });
  }

  useswitchmap() {
    of(1, 2, 3) //here it got id one after other but it will only get result of the last one because of switchmap
      .pipe(
        switchMap((id) => this.http.get(`http://localhost:3000/employees/${id}`)),
        // switchMap((employee: any) =>
        //   this.http.get(`http://localhost:3000/departments?name=${employee.department}`),
        // ),
      )
      .subscribe((department) => {
        console.log('Department:', department);
      });
  }

  usemergeMap() {
    of(1, 2, 3) //here it got id one after other and it will get result of all of them because of mergemap
      .pipe(
        mergeMap((id) => this.http.get(`http://localhost:3000/employees/${id}`)),
        // mergeMap((employee: any) =>
        //   this.http.get(`http://localhost:3000/departments?name=${employee.department}`),
        // ),
      )
      .subscribe((employee) => {
        console.log('Employee:', employee);
      });
  }

  concatMap() {
    of(1, 2, 3) //here it got id one after other and it will get result of all of them because of mergemap
      .pipe(concatMap((id) => this.http.get(`http://localhost:3000/employees/${id}`)))
      .subscribe((employee) => {
        console.log('Employee:', employee);
      });
  }

  useforkjoin() {
    forkJoin({
      employee: this.http.get(`http://localhost:3000/employees`),
      department: this.http.get(`http://localhost:3000/departments`),
    }).subscribe((result) => {
      console.log('Employee:', result.employee);
      console.log('Department:', result.department);
    });
  }

  useExhaustMap() {
    of(1, 2, 3)
      .pipe(
        delay(10000),
        retry(2),
        exhaustMap((id) => this.http.get(`http://localhost:3000/employees/${id}`)),
      )
      .subscribe((employee) => {
        console.log('Employee:', employee);
      });
  }
}
