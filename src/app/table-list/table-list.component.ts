import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss',
})
export class TableListComponent {
  file = toSignal(this.route.params.pipe(map((params) => params['fileId'])));
  tableList = toSignal(this.route.data.pipe(map(({ tableList }) => tableList)));

  constructor(private route: ActivatedRoute) {}
}
