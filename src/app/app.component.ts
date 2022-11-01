import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  // model
  title = 'some-angular-tutoriala adasdasda';
  inputValue: number = 5;

  ngAfterViewInit () {
    setInterval(() => {
      console.log('inputValue ', this.inputValue);
    }, 1000);
  }

}
