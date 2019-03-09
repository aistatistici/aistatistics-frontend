import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UploadFileService {

    constructor(private http: HttpClient) {
    }


    sendFile(file) {
        const headerDict = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*'
        };

        const requestOptions = {
            headers: new HttpHeaders(headerDict),
        };
        const url = 'http://192.168.1.94:5000/api/file/upload-data-document';
        this.http.post(url, file, requestOptions).toPromise().then((response) => {
            console.log(response);
        });
    }
}
