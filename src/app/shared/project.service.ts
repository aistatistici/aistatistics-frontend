import {Injectable} from '@angular/core';
import {error} from 'util';
import {HttpClient} from '@angular/common/http';

export interface Project {
    title: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private title = null;
    private description: string = null;
    private ip = 'http://127.0.0.1:5000/';

    constructor(private http: HttpClient) {
    }

    post(result) {
        this.title = result.title;
        this.description = result.description;

        if (this.title != null && this.description != null) {

            const url = this.ip + 'api/project/';
            const formData = new FormData();
            formData.append('title', this.title);
            formData.append('description', this.description);
            return this.http.post(url, formData).toPromise();
        }


    }
}
