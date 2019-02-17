import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { User } from 'src/app/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup:FormGroup;
  constructor(public formBulid:FormBuilder) {  
  }
  ngOnInit() {
    this.formGroup =this.formBulid.group({firstName:[' '],
    lastName:[' '],
    Email:[' '],
    AGE:[' ']})
  }
  onSubmit(form:FormGroup){
    const {firstName,lastName,Email,AGE} = form.value;
    const user = new User(firstName,lastName,Email,AGE)
    console.log(user);
  }
}
