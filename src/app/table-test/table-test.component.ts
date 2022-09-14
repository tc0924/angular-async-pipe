import { Component, Input, ViewChild } from '@angular/core';
import { RandomUserInfo } from "../../assets/user-info";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent {
  @Input() dataSource!: RandomUserInfo[];
  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns = ['Image', 'Name', 'Country', 'Age', 'Email'];

  render() {
    this.table.renderRows();
  }
}
