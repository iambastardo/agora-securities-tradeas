import { Security } from './security';
import PouchDB from 'pouchdb';
import { Observable, from } from 'rxjs';
import { ConfigurationService } from "./configuration.service";
import { Injectable } from "@angular/core";
import {Broker} from "./broker";

@Injectable({
    providedIn: 'root',
})
export class SecurityService {
    private _pouchDb: PouchDB;

    constructor(private configurationService: ConfigurationService) {
        let url = configurationService.items["couchdbUrl"];
        this._pouchDb = new PouchDB(url + 'securities');
    }

    /**
     * 
     */
    getAll(): Observable<Security[]> {
        return from(
            this._pouchDb
                .allDocs({include_docs: true})
                .then(document => {
                    // Each row has a .doc object and we just want to send an 
                    // array of birthday objects back to the calling code,
                    // so let's map the array to contain just the .doc objects.
                    return document.rows.map(row => {
                        // Convert string to date, doesn't happen automatically.
                        return new Security({
                            id: row.doc._id,
                            name: row.doc.companyName,
                            symbol: row.doc.symbol,
                            sector: row.doc.sector,
                            subSector: row.doc.subSector,
                            brokerIds: (row.doc.brokers !== undefined) 
                                ? row.doc.brokers
                                : [],
                            brokers: [],
                            notes: row.doc.notes
                        });
                    });
                }));
    }
}