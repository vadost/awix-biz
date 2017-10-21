import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../../md/md-table/md-table.component';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'extended-table-cmp',
    templateUrl: 'extendedtable.component.html'
})

export class ExtendedTableComponent implements OnInit{
    public tableData1: TableData;

    ngOnInit(){
        // Init Tooltips
        // $('[rel="tooltip"]').tooltip();
        this.tableData1 = {
            headerRow: [ '#', 'City', 'Address', 'Phone', 'Schedule', 'Employees', 'Actions' ],
            dataRows: [
                ['1', 'Киев',  'ул. Парковая д.14', '+380931542992', 'пн.-вс.: 11:00-22:00', '5'],
                ['2', 'Житомир',  'ул. Дачная д.14', '+380731542992', 'пн.-вс.: 10:00-19:00', '7'],
                ['3', 'Киев',  'ул. Парковая д.14', '+380931542992', 'пн.-вс.: 11:00-22:00', '5'],
                ['4', 'Житомир',  'ул. Дачная д.14', '+380731542992', 'пн.-вс.: 10:00-19:00', '7'],
                ['5', 'Киев',  'ул. Парковая д.14', '+380931542992', 'пн.-вс.: 11:00-22:00', '5'],
                ['6', 'Житомир',  'ул. Дачная д.14', '+380731542992', 'пн.-вс.: 10:00-19:00', '7'],
                ['7', 'Киев',  'ул. Парковая д.14', '+380931542992', 'пн.-вс.: 11:00-22:00', '5'],
                ['8', 'Житомир',  'ул. Дачная д.14', '+380731542992', 'пн.-вс.: 10:00-19:00', '7'],
            ]
         };
    }

}
