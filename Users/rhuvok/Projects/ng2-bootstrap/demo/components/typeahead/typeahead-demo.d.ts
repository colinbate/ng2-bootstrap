import { Observable } from 'rxjs/Observable';
export declare class TypeaheadDemoComponent {
    selected: string;
    dataSource: Observable<any>;
    asyncSelected: string;
    typeaheadLoading: boolean;
    typeaheadNoResults: boolean;
    states: Array<string>;
    statesComplex: Array<any>;
    constructor();
    changeTypeaheadLoading(e: boolean): void;
    changeTypeaheadNoResults(e: boolean): void;
    typeaheadOnSelect(e: any): void;
}
