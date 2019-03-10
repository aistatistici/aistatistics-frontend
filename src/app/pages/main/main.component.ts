import {Component, OnInit} from '@angular/core';
import {FileService} from '../../shared/file.service';
import {Router} from '@angular/router';
import {parseJson} from "@angular-devkit/core";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    public selectedFile: File = null;
    public fileName = '';
    // public labels = ''
    public title = 'Upload your data here'


    constructor(private fileService: FileService,
                private router: Router) {
    }

    ngOnInit() {

    }

    onFileSelected(event) {
        console.log(event);
        this.selectedFile = event.target.files[0];

    }

    onUpload() {
        // console.log(parseJson(this.labels));
        this.fileService.sendFile(this.selectedFile, this.fileName).then((response) => {
            console.log(response);
            this.fileService.getDataFilesByID(response).then((data) => {
                console.log(data);
            });
        });

    }


}

