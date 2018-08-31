import { Component, OnInit } from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
    moduleId: module.id,
    selector: 'entry-cmp',
    templateUrl: 'entry.component.html'
})

export class EntryComponent implements OnInit {

    editConfiguration: AngularEditorConfig;
    
    /**
     * 
     */
    ngOnInit() {
        this.editConfiguration = {
            editable: true,
            spellcheck: true,
            height: '25rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            uploadUrl: 'v1/images', // if needed
            customClasses: [ // optional
                {
                    name: "quote",
                    class: "quote",
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
    }
}
