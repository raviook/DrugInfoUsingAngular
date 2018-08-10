import { Component } from '@angular/core';
import {MetService} from './met.service';
import {MetDrugClass} from './metDrugClass';
import {MetDrugComposition} from './metDrugComposition';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedicationApp';
  demo:string='demo';
  keyval:number=-1;
  combinationName:string;
metdrugClass:MetDrugClass[];
metDrugComposition:MetDrugComposition[];
  constructor(private metService:MetService){
this.getClass();
  }
  getClass(): void {
    this.metService.getmetDrugClass()
    .subscribe(m => this.metdrugClass = m);
  }
  onSelectClass(state):void{
    this.demo=state;
    var temp=-1;
    this.metdrugClass.forEach((item, index) => {
      if(item==state){
        console.log(item);
        console.log(index);
        temp=index;
        this.getDrugByTheirClass(index);
      }
  });
  this.keyval=temp;

  }
getDrugByTheirClass(id:number):void{
this.metService.getDrugComposition(id).subscribe(m=>this.metDrugComposition=m);
  }
  onSelectDrug(selectedDrug):void{
this.combinationName=selectedDrug.combination;
  }
}
