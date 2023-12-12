import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const producto = {
  name:'Mouse',
  price:'128',
  inStorage:'1'
}

@Component({
  selector: 'app-basic-page',

  templateUrl: './basicPage.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorange: new FormControl(0),
  // });


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  })

  constructor (private fb: FormBuilder ){}
  ngOnInit(): void {
    this.myForm.reset( producto )
  }


  isValidField(field:string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getFieldError(field:string):string | null {
    if(!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors|| {}
    for(const key of Object.keys(errors)){
      switch(key){
        case'required':
          return 'Este campo es requerdio';

        case 'minlength':
          return `Minimo  ${errors['minlength'].requiredLength } caractrs`
      }
  }
  return null;
}



  onSave():void{
    if(this.myForm.invalid) return;

    console.log(this.myForm.value)
    this.myForm.reset({ price: 0, inStorage:0})
  }

 }
