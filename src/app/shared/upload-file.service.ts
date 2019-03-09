import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UploadFileService {

    constructor(private http: HttpClient) {
    }


    sendFile(file){
        console.log(file);
        const url = 'http://192.168.1.94:5000/api/file/upload-data-document';
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(url, formData).toPromise();
    }
}
