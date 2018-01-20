import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  numberA;
  numberB;
  typeOfAction;
  result;
  constructor(public navCtrl: NavController) {

  }

  performFunction(type){
    var a = parseInt(this.numberA);
    var b = parseInt(this.numberB);
    console.log(type);

    if( type == 'a'){
      this.typeOfAction = "Add"
      this.result = a+b
    }else if(type == 's'){
      this.typeOfAction = "SUB"
      this.result = a - b;
    }else if(type == 'm'){
      this.typeOfAction = "MUL"
      this.result = a *b
    }else if(type == 'd'){
      this.typeOfAction = "DIV"
      this.result = a/b
    }

  }

}
