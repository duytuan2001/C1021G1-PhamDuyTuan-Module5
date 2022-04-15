import { Component, OnInit } from '@angular/core';
import {IWord} from '../model/IWord';
import {DictionaryServiceService} from '../service/dictionary-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  wordDetail: string;
  mean: IWord;
  constructor(private words: DictionaryServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.wordDetail = paramMap.get('word');
      this.mean = this.words.search(this.wordDetail);
    });
  }
}
