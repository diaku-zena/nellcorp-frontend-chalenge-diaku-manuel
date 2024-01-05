import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  isEditable = true;
  
  first0FormGroup!: FormGroup;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      first0Ctrl: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[0-9]{20}$/),
        ]
      ],

      firstCtrl: [
        null,
        [
          Validators.required,
          Validators.min(100),
          Validators.max(10000000),
        ]
      ],
      
    });

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
