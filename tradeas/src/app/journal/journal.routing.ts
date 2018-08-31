import { Routes } from '@angular/router';
import { JournalComponent } from "./journal.component";
import { EntryComponent } from "./entry/entry.component";

export const JournalRoutes: Routes = [
    {
        path: '',
        children: [{
                path: 'journal',
                component: JournalComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'entry',
            component: EntryComponent
        }]
    }
];
