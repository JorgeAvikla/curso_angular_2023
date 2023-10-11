import { Component, ElementRef,ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-seach-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter) = "searchTag()"
    #txtTagInput
    >`
})

export class SearchBoxComponent {
  @ViewChild('txtTagInput')
 public tagInput!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) { }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', tag)
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params: params })
      .subscribe(resp => {
        this.gifList = resp.data
        console.log({ gifs: this.gifList });
      })
  }


  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
