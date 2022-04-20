import { Character } from "./Character";

export class WordFilter {
    length: number;
    startsWith: string;
    endsWith: string;
    containCharactersAtPositions: Character[];
    doesNotContainCharactersAtPositions: Character[]
    containsCharacters: string[];
    doesNotContainsCharacters: string[];
}