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
        this.fileService.sendFile(this.selectedFile).then((response) => {
            console.log(response);
            if (response === 'Done') {
                this.router.navigateByUrl('/labels');
            }
        });

    }


}

