import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
}
