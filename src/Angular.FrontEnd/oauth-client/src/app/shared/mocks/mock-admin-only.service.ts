import { of } from 'rxjs';


export class MockAdminOnlyService { 
    fetchAdminOnlyData(token: string) {    
        return of([1,2,3,4,5]); 
      }   
}