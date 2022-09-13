import { Component, OnInit } from '@angular/core';
import { PeriodicElement, ELEMENT_DATA } from '../../assets/element-data';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent {
  displayedColumns: string[] = ['No', 'Nombre', 'Símbolo', 'Peso'];
  dataSource = ELEMENT_DATA;
}
