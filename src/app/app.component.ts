import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormControl';

  fcname = new FormControl();
  fcemail = new FormControl();
  fcphone = new FormControl();

  updateData(){
    this.fcname.setValue('Harry');
    this.fcemail.setValue('132ty@gmail.com');
    this.fcphone.setValue('2345678901');
  }
}
