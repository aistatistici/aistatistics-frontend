import {Component, OnInit} from '@angular/core';
import {FileService} from '../../shared/file.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    public selectedFile: File = null;
    public fileName = '';
    public dateFormat;
    public title = 'Upload your data here';


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
        if (this.dateFormat == null || this.dateFormat === undefined || this.dateFormat === '') {
            this.dateFormat = undefined;
        } else {
            this.dateFormat = JSON.parse(this.dateFormat);
        }
        this.fileService.sendFile(this.selectedFile, this.fileName,
            this.dateFormat).then((response) => {
            console.log(response);
            if (response) {
                this.router.navigateByUrl('/graph/' + response);
            }
        });

    }


}

