import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/IWord';
import {DictionaryServiceService} from '../service/dictionary-service.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  showAllWord: IWord[] = [];

  constructor(private DictionaryPage: DictionaryServiceService) {
    this.showAllWord = this.DictionaryPage.getAll();
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.showAllWord = this.DictionaryPage.getAll();
  }

}
