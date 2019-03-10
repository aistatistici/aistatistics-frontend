import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class FileService {
    private ip = 'http://192.168.1.94:5000/';

    constructor(private http: HttpClient) {
    }


    sendFile(filePath, fileName, dateFormat) {
        console.log(filePath);
        console.log(fileName);

        const url = this.ip + 'api/file/upload-data-document';
        const formData = new FormData();
        formData.append('name', fileName);
        formData.append('file', filePath);
        formData.append('date_fields', dateFormat);
        return this.http.post(url, formData).toPromise();
    }

    getDataFilesByID(id) {
        const url = this.ip + 'api/file/get-dataset/' + id;
        return this.http.get(url).toPromise();
    }
}
