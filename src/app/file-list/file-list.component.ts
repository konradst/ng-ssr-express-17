import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss',
})
export class FileListComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  fileList = toSignal(this.route.data.pipe(map(({ fileList }) => fileList)));
}
