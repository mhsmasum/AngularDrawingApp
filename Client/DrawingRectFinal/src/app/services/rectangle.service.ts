import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rectangle } from '../models/rectangle.model';

@Injectable({
  providedIn: 'root'
})
export class RectangleService {
  apiUrl: string = environment.apiUrl;
  constructor(public http: HttpClient) { }

  GetRectangle(){
    return this.http.get<Rectangle>(this.apiUrl+"Draw/GetRect");
  }
  UpdateRecctangle(data:Rectangle){
    return this.http.post<Rectangle>(this.apiUrl+"Draw/Update" , data);
  }
}
