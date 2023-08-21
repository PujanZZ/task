import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formGroup: FormGroup;

  // formGroup = new FormGroup({

  //   first_name  : new FormControl(null,[Validators.required]),
  //   last_name   : new FormControl(null,[Validators.required]),
  //   mobile      : new FormControl(null,[Validators.required, Validators.maxLength(10)]),
  //   address     : new FormControl(null,[Validators.required]),
  //   email       : new FormControl(null,[Validators.required, Validators.email,Validators.pattern("/^[^\s@]+@[^\s@]+\.[^\s@]+$/")]]),
  //   age         : new FormControl(null,[Validators.required]),
  //   dob         : new FormControl(null,[Validators.required])
  // })

  
  get submitDisabled() {
    return this.formGroup.invalid || !this.formGroup.dirty
  }

  constructor(private formBuilder: FormBuilder ) {

    this.formGroup = this.formBuilder.group({
      first_name    : [null, Validators.required],
      last_name     : [null, Validators.required],
      mobile        : [null, [Validators.required, Validators.maxLength(10)]],
      address       : [null, Validators.required],
      email         : [null, [Validators.required, Validators.email]],
      age           : [null, [Validators.required,Validators.max(100)]],
      dob           : [null, Validators.required],
    });

  }


  onSubmit(): void {

    const formGroupValue = this.formGroup.value;

    const payload = {

      first_name  : formGroupValue.first_name,
      last_name   : formGroupValue.last_name,
      mobile      : formGroupValue.mobile,
      address     : formGroupValue.address,
      email       : formGroupValue.email,
      age         : formGroupValue.age,
      dob         : formGroupValue.dob

    }

    console.log(payload);
  }

}
