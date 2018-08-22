import { Component, OnInit } from '@angular/core';
//import { AgGridModule } from 'ag-grid-angular';
import { TableListService} from './table-list.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  rowData = [];
  // rowData =[
  //     {"FileName":"201565258.txt","timeStampObject":"2018/07/16 22:39:09.406+05:30"},
  //     {"FileName":"201670292.TXT","timeStampObject":"2018/07/16 22:39:09.348+05:30"},
  //     {"FileName":"ReviewCasesExport_2018-03-05T170355.casa","timeStampObject":"2018/07/16 22:39:08.595+05:30"},
  //     {"FileName":"ReviewCasesExport_2018-03-05T170638.casa","timeStampObject":"2018/07/16 22:39:08.358+05:30"},
  //     {"FileName":"StorageExplorer.exe","timeStampObject":"2018/07/12 09:04:59.171+05:30"},
  //     {"FileName":"abc.txt","timeStampObject":"2018/07/12 08:58:37.910+05:30"},
  //     {"FileName":"xyz.txt","timeStampObject":"2018/07/12 08:58:37.217+05:30"}];

  constructor(private service: TableListService) { 
   console.log("Data is : ", this.getData());
  }

  ngOnInit() {
    this.getTableData();
  }

  columnDefs = [
    {headerName: 'File Name', field: 'FileName' },
    {headerName: 'TimeStamp Object', field: 'timeStampObject' },
  ];

  getTableData(){
    //var serchObj = 'test';
    this.getData().then(this.loadData);
  }

  loadData = (data) => {
    console.log("data doc: ", data._body);
    this.rowData = JSON.parse(data._body);;
  }


  private getData() {
    console.log("getData>>>>>>>>>>>>>>.");
    return this.service.getData();
  }

}
