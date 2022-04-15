import {Injectable} from '@angular/core';
import {IWord} from '../model/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  iWord: IWord[] = [
    {
      word: 'hello',
      mean: 'xin chào'
    },
    {
      word: 'man',
      mean: 'nguoi dan ong'
    },
    {
      word: 'boy',
      mean: 'cau be'
    },
    {
      word: 'add',
      mean: 'them'
    },
    {
      word: 'programmer',
      mean: 'lập trình viên'
    },
  ];

  constructor() {
  }

  getAll() {
    return this.iWord;
  }

  save(iWord) {
    this.iWord.push(iWord);
  }

  search(iWord: string) {
    for (let i = 0; i < this.iWord.length; i++) {
      if (this.iWord[i].word === iWord) {
        return this.iWord[i];
      }
    }
  }
}
