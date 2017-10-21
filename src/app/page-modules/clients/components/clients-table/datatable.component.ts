import { Component, OnInit } from '@angular/core';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}
declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'data-table-cmp',
    templateUrl: 'datatable.component.html'
})

export class DataTableComponent implements OnInit{
    public dataTable: DataTable;

    ngOnInit() {
        this.dataTable = {
            headerRow: [ '#', 'Name', 'Surname', 'Sex', 'Email', 'Phone', 'Actions' ],
            footerRow: [ '#', 'Name', 'Surname', 'Sex', 'Email', 'Phone', 'Actions' ],

            dataRows: [
                ['1', 'Ольга', 'Молчанова', 'Муж', 'olga12@gmail.com', '+380931542999'],
                ['2', 'Ирина', 'Бутник', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['3', 'Светлана', 'Гончар', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['4', 'Мария', 'Федотова', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['5', 'Ольга', 'Молчанова', 'Муж', 'olga12@gmail.com', '+380931542999'],
                ['6', 'Ирина', 'Бутник', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['7', 'Светлана', 'Гончар', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['8', 'Мария', 'Федотова', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['9', 'Ольга', 'Молчанова', 'Муж', 'olga12@gmail.com', '+380931542999'],
                ['10', 'Ирина', 'Бутник', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['11', 'Светлана', 'Гончар', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['12', 'Мария', 'Федотова', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['13', 'Ольга', 'Молчанова', 'Муж', 'olga12@gmail.com', '+380931542999'],
                ['14', 'Ирина', 'Бутник', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['15', 'Светлана', 'Гончар', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['16', 'Мария', 'Федотова', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['17', 'Ольга', 'Молчанова', 'Муж', 'olga12@gmail.com', '+380931542999'],
                ['18', 'Ирина', 'Бутник', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['19', 'Светлана', 'Гончар', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['20', 'Мария', 'Федотова', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['21', 'Ольга', 'Молчанова', 'Муж', 'olga12@gmail.com', '+380931542999'],
                ['22', 'Ирина', 'Бутник', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['23', 'Светлана', 'Гончар', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['24', 'Мария', 'Федотова', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['25', 'Ольга', 'Молчанова', 'Муж', 'olga12@gmail.com', '+380931542999'],
                ['26', 'Ирина', 'Бутник', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['27', 'Светлана', 'Гончар', 'Жен', 'olga12@gmail.com', '+380931542999'],
                ['28', 'Мария', 'Федотова', 'Жен', 'olga12@gmail.com', '+380931542999'],
            ]
         };

    }

    ngAfterViewInit(){
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            responsive: true,
            language: {
            search: "_INPUT_",
            searchPlaceholder: "Search records",
            }

        });

        var table = $('#datatables').DataTable();

        // Edit record
        table.on( 'click', '.edit', function () {
            var $tr = $(this).closest('tr');

            var data = table.row($tr).data();
            alert( 'You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.' );
        } );

        // Delete a record
        table.on( 'click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        } );

        //Like record
        table.on( 'click', '.like', function () {
            alert('You clicked on Like button');
        });

        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    }
}
