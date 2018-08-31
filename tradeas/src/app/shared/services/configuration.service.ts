import {Injectable} from "@angular/core";

@Injectable()
export class ConfigurationService {
    items: any[];

    constructor() {
        this.items = [];
        this.items['couchdbUrl'] = 'https://tradeasdb.southeastasia.cloudapp.azure.com:6984/';
    }
}