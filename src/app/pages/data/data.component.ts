import {Component, OnInit} from '@angular/core';
import {FileService} from '../../shared/file.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

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
        let date = null;
        if (this.dateFormat == null || this.dateFormat === undefined || this.dateFormat === '') {
            date = undefined;
        } else {
            date = JSON.parse(this.dateFormat);
        }
        this.fileService.sendFile(this.selectedFile, this.fileName,
            date).then((response) => {
            console.log(response);
            if (response) {
                this.router.navigateByUrl('/graph/' + response);
            }
        });

    }

}
