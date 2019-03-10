import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class FileService {
    private ip = 'http://127.0.0.1:5000/';

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

    split(id: number, val: { augment: {}; process: {}; split: {} }) {
        const url = this.ip + 'api/file/split-dataset/' + id;
        return this.http.post(url, val).toPromise();
    }

    train(id: number, body: any) {
        const url = this.ip + 'api/file/train-dataset/' + id;
        return this.http.post(url, body).toPromise();
    }

    predict(id: number) {

        const url = this.ip + 'api/file/predict-dataset/' + id;
        return this.http.post(url, {}).toPromise();
    }
}
