import { Component, AfterViewInit, OnChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnChanges, OnInit, DoCheck, OnDestroy {
  constructor () {
    console.log('inside constructor');
    // initializing
    this.title = 'some-angular-tutoriala adasdasda';
  }

  // model
  title: string;
  inputValue: number = 5;

  ngAfterViewInit () {
    setTimeout(() => {
      this.inputValue = 100;
    }, 1000);
    console.log('inside ngAfterViewInit');
    setInterval(() => {
      // console.log('inputValue ', this.inputValue);
    }, 1000);
  }

  ngOnChanges () {
    console.log('inside ngOnChanges');
  }

  ngDoCheck () {
    console.log('inside ngDoCheck');
  }

  ngOnDestroy () {
    console.log('inside ngOnDestroy');
  }

  ngOnInit () {
    console.log('inside ngOnInit');
  }

}
