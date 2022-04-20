import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordFilter } from 'src/models/WordFilter';

@Injectable({
  providedIn: 'root',
})
export class WordFinderService {
    configUrl = 'https://localhost:7057/api/wordfinder';

    constructor(
        private http: HttpClient
    ) { }

    public async FindWord(wordFilter: WordFilter): Promise<string[] | undefined> {
        return this.http.post<string[]>(`${this.configUrl}/findWord`, wordFilter).toPromise()
    }
}