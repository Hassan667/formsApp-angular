import { Component, OnInit } from '@angular/core';
import { Country } from './countryinterface';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  log(x:any){
    console.log(x)
  }
  onSubmit(y:any){
    console.log(y)
  }
  countries: Country[]=[
  {name:'Egypt'},
  {name:'Italy'},
  {name:'London'},
  {name:'India'},
  ]


  ngOnInit(): void {
  }

}
