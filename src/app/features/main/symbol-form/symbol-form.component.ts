import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Character } from 'src/models/Character';

@Component({
  selector: 'app-symbol-form',
  templateUrl: './symbol-form.component.html',
  styleUrls: ['./symbol-form.component.scss']
})
export class SymbolFormComponent implements OnInit {

  @Output()
  public atCharacterSubmit = new EventEmitter<Character>()
  
  public symbolFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {  
  }

  ngOnInit(): void {
    this.symbolFormGroup = this.formBuilder.group({
      symbol: ['', [Validators.required]],
      position: ['', [Validators.required]]
    })
  }

  public atSubmit() {
    this.atCharacterSubmit.emit(this.symbolFormGroup.value)
  }

}
