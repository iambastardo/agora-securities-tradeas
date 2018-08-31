import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbDateParserFormatter, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { NgbDateLongParserFormatter } from "../shared/formatters/NgbDateLongParserFormatter";
import { DataTablesModule } from "angular-datatables";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { JournalRoutes } from "./journal.routing";
import { JournalComponent } from "./journal.component";
import {EntryComponent} from "./entry/entry.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(JournalRoutes),
        FormsModule,
        NgbModule,
        LoadingBarModule,
        DataTablesModule,
        JwBootstrapSwitchNg2Module,
    ],
    declarations: [JournalComponent, EntryComponent],
    providers: [
        { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
        { provide: NgbDateParserFormatter, useClass: NgbDateLongParserFormatter }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JournalModule {}
