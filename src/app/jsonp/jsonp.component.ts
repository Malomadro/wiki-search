import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WikiResponceItemInterface } from '../shared/wiki-response.interface';
import { WikiService } from '../shared/wiki.service';

@Component({
  selector: 'app-jsonp',
  templateUrl: './jsonp.component.html',
  styleUrls: ['./jsonp.component.scss']
})
export class JsonpComponent {
  items$!:Observable<WikiResponceItemInterface[]>
  constructor(private wiki: WikiService) { }

  search(text: string): void {
    this.items$ = this.wiki.searchWiki(text)  
   }

}
