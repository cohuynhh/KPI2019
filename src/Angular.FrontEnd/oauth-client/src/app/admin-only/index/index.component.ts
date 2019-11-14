import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators'
import { AuthService } from '../../core/authentication/auth.service';
import { AdminOnlyService } from '../admin-only.service';

@Component({
  selector: 'admin-only-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  //claims=null;
  busy: boolean;

  constructor(private authService: AuthService, private AdminOnlyService: AdminOnlyService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {    
    this.busy = true;
    this.spinner.show();
  //   this.AdminOnlyService.fetchAdminOnlyData(this.authService.authorizationHeaderValue)
  //   .pipe(finalize(() => {
  //     this.spinner.hide();
  //     this.busy = false;
  //   })).subscribe(
  //   result => {         
  //     this.claims = result;
  //  });
  }
}
