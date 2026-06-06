import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AiModelResponse } from '../models/ai-response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private readonly chatUrl = `${environment.baseUrl}/api`;

  private readonly http = inject(HttpClient);

  constructor() { }

  getAiResponse(message: string): Observable<AiModelResponse>{
    return this.http.post<AiModelResponse>(`${this.chatUrl}/chat`, {message});
  }
}
