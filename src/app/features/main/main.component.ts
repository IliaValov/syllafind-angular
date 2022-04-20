import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Character } from 'src/models/Character';
import { WordFilter } from 'src/models/WordFilter';
import { WordFinderService } from 'src/services/word-finder.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [WordFinderService]
})
export class MainComponent implements OnInit {

  public wordFilterForm: FormGroup;
  public containsCharacters: string[] = [];
  public doesNotContainsCharacters: string[] = [];
  public containsCharactersAtPositions: Character[] = [];
  public doesNotContainsCharactersAtPositions: Character[] = [];
  public returnedWords: string[] | undefined;
  public symbol: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private wordFinderService: WordFinderService
  ) { }

  ngOnInit(): void {
    this.wordFilterForm = this.formBuilder.group({
      length: ['', Validators.required],
      startsWith: [''],
      endsWith: ['']
    })
  }

  public onSymbolChange(event: any){
    if(event.target.value) {
      this.symbol = event.target.value
    }
  }

  public atContainsCharactersSubmit(character: Character) {
    this.containsCharactersAtPositions.push(character);
  }

  public atDoesNotContainsCharactersSubmit(character: Character) {
    this.doesNotContainsCharactersAtPositions.push(character);
  }

  public addCharacterExist() {
    this.containsCharacters.push(this.symbol);
  }

  public addCharacterDoesNotExist() {
      this.doesNotContainsCharacters.push(this.symbol);
  }

  public async atSubmit() {
    const wordFilterFornValue = this.wordFilterForm.value;

    const wordFilter: WordFilter = {
      length: wordFilterFornValue.length,
      startsWith: wordFilterFornValue.startsWith,
      endsWith: wordFilterFornValue.endsWith,
      containCharactersAtPositions: this.containsCharactersAtPositions,
      doesNotContainCharactersAtPositions: this.doesNotContainsCharactersAtPositions,
      containsCharacters: this.containsCharacters,
      doesNotContainsCharacters: this.doesNotContainsCharacters
    }

    this.returnedWords = await this.wordFinderService.FindWord(wordFilter);
    alert("Request is send");
  }

}
