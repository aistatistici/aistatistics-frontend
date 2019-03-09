import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class FileService {
    private ip = 'http://192.168.1.94:5000/';

    constructor(private http: HttpClient) {
    }


    sendFile(file) {
        console.log(file);

        const url = this.ip + 'api/file/upload-data-document';
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(url, formData).toPromise();
    }

    getDataFilesByID(id) {
        const url = this.ip + 'somewhere/' + id;
        return this.http.get(url).toPromise();
    }
}
