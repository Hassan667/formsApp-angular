import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Country } from '../templateform/countryinterface';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  contactForm=this.fb.group({
    firstName:['ali',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    gender:['male',[Validators.required]],
    isMarried:[true],
    country:['Egypt',[Validators.required]]
  })

  get myValues(){
    return this.contactForm.controls
  }

  countries: Country[]=[
    {name:'Egypt'},
    {name:'Italy'},
    {name:'London'},
    {name:'India'},
    ]

   log(x:any){
     console.log(x)
   }
   onSubmit(y:any){
     console.log(y)
   }


  ngOnInit(): void {
  }

}
