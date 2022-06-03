import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEventType,
  HttpProgressEvent,
} from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploaderService {
  constructor(private http: HttpClient) {}

  public upload(data: FormData): Observable<number> {
    return this.http
      .post('/upload', data, { reportProgress: true, observe: 'events' })
      .pipe(
        filter(event => {
          return event.type === HttpEventType.UploadProgress;
        }),
        map(event => event as HttpProgressEvent),
        // @ts-ignore
        map(event => (event.loaded / event.total) * 100),
      );
  }
}
