import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigService } from '../shared/config.service';

import { AdminOnlyService } from './admin-only.service';

describe('AdminOnlyService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpClientTestingModule],
    providers: [ ConfigService ]
  }));

  it('should be created', () => {
    const service: AdminOnlyService = TestBed.get(AdminOnlyService);
    expect(service).toBeTruthy();
  });
});
