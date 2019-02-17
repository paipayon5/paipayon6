import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl , EventEmitter } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { User } from 'src/app/User';
import { format } from 'url';
import { OutputType } from '@angular/core/src/view';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup:FormGroup;
  @Output() chenge = new EventEmitter();
  constructor(public formBulid:FormBuilder) {  
  }
  ngOnInit() {
    this.formGroup =this.formBulid.group({
    firstName:['a',[Validators.required]],
    lastName:['a',[Validators.minLength(3),Validators.required]],
    Email:['a',[Validators.required,Validators.email]],
    AGE:['1',[Validators.min(1),Validators.max(100)]]})
  }
  EmilValidators(control:AbstractControl){
    const value: string = control.value;
    if (value && value.includes('@')){
      return null;
    }
    return {
      Email:{
        acturl:true
      }
    }
  }
  onSubmit(form:FormGroup){
    console.log(form.valid,form.invalid);
    console.log((<FormControl>form.get('firstName')).errors);
    const {firstName,lastName,Email,AGE} = form.value;
    const user = new User(firstName,lastName,Email,AGE)
    console.log(user);
  }
}
