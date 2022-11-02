import { Component, OnInit, Input } from '@angular/core';

import carslist from '../../assets/cardata/carlist.json';

@Component({
  selector: 'app-searchedcars',
  templateUrl: './searchedcars.component.html',
  styleUrls: ['./searchedcars.component.css']
})
export class SearchedcarsComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
  }
 
  searchstatus:Boolean = false;
  searchresult: any = [];
  
  searchedvehicles(city:string,company:string,vehicletype:string,modelyear:string,mileage:string,color:string,enginecapacity:string,pricerange:string){
    
    var data = []
    data.push(city,company,vehicletype,modelyear,mileage,color,enginecapacity,pricerange);
    console.table(data);
    console.table(carslist);
    
    this.returnQueryResult(city,company,vehicletype,modelyear,mileage,color,enginecapacity,pricerange);
    
    console.log("Result")
    if (this.searchresult != null) {
      this.searchstatus==true;
    } else {
      this.searchstatus==false;
    }
    console.table(this.searchresult);
    
  }

 returnQueryResult(city:string,company:string,vehicletype:string,modelyear:string,mileage:string,color:string,enginecapacity:string,pricerange:string){
  this.searchresult=[]
  for (let i = 0 ; i < carslist.length ; i++){
    //console.log(carslist[i]);
    if (city === carslist[i].location || company === carslist[i].company || vehicletype == carslist[i].vehicletype 
      || modelyear == carslist[i].model || mileage == carslist[i].mileage || color == carslist[i].color 
      || enginecapacity == carslist[i].enginecapacity || pricerange >= carslist[i].price ){
        //console.log(carslist[i]);
        this.searchresult.push(carslist[i]);
      }
  }

 }



}
