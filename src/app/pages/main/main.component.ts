import {Component, OnInit} from '@angular/core';
import {UploadFileService} from '../../shared/upload-file.service';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    public selectedFile: File = null;
    public title = 'Upload your data here'


    constructor(private uploadFileService: UploadFileService) {
    }

    ngOnInit() {

    }

    onFileSelected(event) {
        console.log(event);
        this.selectedFile = event.target.files[0];

    }

    onUpload() {
       this.uploadFileService.sendFile(this.selectedFile);

    }


}

