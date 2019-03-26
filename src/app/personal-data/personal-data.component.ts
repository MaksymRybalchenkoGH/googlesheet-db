import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  public form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
  }

  public onSubmit(e: Event): void {
    e.preventDefault()

    const googleScriptKey = '1BdtiFJpwGu1Emutw_W-U3UqLXbNwXxZu63LDWwImgNdwbVpRkuoRWL5A'
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbza5ccExwFnhpmI2to2-5JJxUMhtKmI6QDf3MK3Y7S7HSAzD_ej/exec'
    const url = `${scriptUrl}?callback=ctrlq&name=${this.formName}&email=${this.formEmail}`
    fetch(url, {mode: 'no-cors'}).then(
      data => console.log('success', data) ,
      error => console.log('success', error)
    )

  }
  private get formName(): string {
    return this.form.controls.name.value
  }
  private get formEmail(): string {
    return this.form.controls.email.value
  }

}
