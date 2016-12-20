import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { FileUploadService } from '../../services/file-upload/file-upload.service';

@Component({
    'selector': 'state-template',
    styleUrls: ['./css/files.css'],
    'template': require('./first.template.html')
})
export class FirstComponent {
    /**
     * @type FileUploadService
     */
    private fileUploadService: FileUploadService;

    /**
     * @type {string}
     */
    private redirectRoute: string = '/edit';

    /**
     * @type {Array}
     */
    private files: File[] = [];
    private postFiles: Object;

    /**
     * @type {Router}
     */
    private router: Router;

    /**
     * Upload progress for files
     *
     * @type {number}
     */
    private uploadProgress: number = 0;

    /**
     * progress-bar Directive load condition
     *
     * @type {boolean}
     */
    private progressBarVisibility: boolean = false;

    /**
     * @type {string}
     */
    private uploadRoute: string = '/api/upload-file';

    constructor (
        @Inject(FileUploadService) fileUploadService: FileUploadService,
        @Inject(Router) router: Router,
        private sanitizer:DomSanitizer
    ) {
        this.fileUploadService = fileUploadService;
        this.router = router;
    }

    public run (): void {}

    /**
     * @param fileInput
     */
    public filesSelectionHandler (fileInput: any){
        let FileList: FileList = fileInput.target.files;
        this.postFiles = fileInput.target.files;
        let anyWindow = window.URL || window.webkitURL;

        for (let i = 0, length = FileList.length; i < length; i++) {
            var rf = FileList.item(i);
            
            let objectUrl = anyWindow.createObjectURL(FileList[i]);
            rf.url = objectUrl;
            this.files.push(rf);

            window.URL.revokeObjectURL(FileList[i]);
        }

        this.progressBarVisibility = true;
    }

    public sanitize(url:string){
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    public filesUploadHandler () {
        this.uploadProgress = 100;

        // just upload placeholder method
        this.fileUploadService
            .upload(this.uploadRoute, this.postFiles)
            .subscribe(data => {
                console.log('Message from server:', data);
                this.router.navigate([this.redirectRoute]);
            });
    }
}
