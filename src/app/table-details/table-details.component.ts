import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './table-details.component.html',
  styleUrl: './table-details.component.scss',
})
export class TableDetailsComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  file = toSignal(this.route.params.pipe(map((params) => params['fileId'])));
  table = toSignal(
    this.route.data.pipe(map(({ tableDetails }) => tableDetails))
  );
}
