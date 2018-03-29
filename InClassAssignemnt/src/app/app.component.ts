import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  captureField(name:string){

    console.log('Input value is ',name);
  }

  emitValue(e:Event){

    console.log('Your value was ', e.target.value);

  }
}
