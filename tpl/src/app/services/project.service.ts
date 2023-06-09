import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  
  constructor(private _http: HttpClient) {}

  addProject(data: any): Observable<any> {
    
    return this._http.post('http://localhost:5100/user/create', data);
    console.log(data);
  }



  // updateProject(id: number, data: any): Observable<any> {
  //   return this._http.put(`http://localhost:5100/employees/${id}`, data);
  // }

  updateProject(id: number, status: any): Observable<any> {
    return this._http.put(`http://localhost:5100/employees/${id}/update/${status}`,{});
  }
  
  getProjectList(): Observable<any> {
    return this._http.get('http://localhost:5100/user/getall');
    // console.log(data);
  }
  // deleteProject(id: number): Observable<any> {
  //   return this._http.delete(`http://localhost:5100/employees/${id}`);
  // }

  login(data : any):Observable<any>{

    return this._http.post('http://localhost:5100/userlogin/login',data);
  }

  // countclosed():Observable<any>{
      
  //   return this._http.get('http://localhost:5100/user/CountClose');
  // }

  UpateStatusStart(_id:any):Observable<any>{

   
 
    return this._http.put('http://localhost:5100/user/updatestart', {
      _id:_id
    });

  }

  UpateStatusClose(_id:any):Observable<any>{


    return this._http.put('http://localhost:5100/user/updateclose', {
      _id:_id
    });

  }

  UpateStatusCancel(_id:any):Observable<any>{

    return this._http.put('http://localhost:5100/user/updatecancel', {
      _id:_id
    });

  }

  countTotal(): Observable<any>{

    return this._http.get('http://localhost:5100/user/Counttotal');
  }

  countRunning(): Observable<any>{

    return this._http.get('http://localhost:5100/user/Countrunning');
  }

  countCancel(): Observable<any>{

    return this._http.get('http://localhost:5100/user/Countcancel');
  }

  countClosed(): Observable<any>{

    return this._http.get('http://localhost:5100/user/Countclose');
  }

  //chartdata
  countCloseStr(): Observable<any>{

    return this._http.get('http://localhost:5100/user/countcloseStr');
  }

  countCloseFin(): Observable<any>{

    return this._http.get('http://localhost:5100/user/countcloseFin');
  }

    // countCloseQlt(): Observable<any>{

  //   return this._http.get('http://localhost:5100/user/countcloseQlt');
  // }
  // countCloseMan(): Observable<any>{

  //   return this._http.get('http://localhost:5100/user/countcloseMan');
  // }

    countCloseHr(): Observable<any>{

    return this._http.get('http://localhost:5100/user/countcloseHr');
  }
    countTotalStr(): Observable<any>{

    return this._http.get('http://localhost:5100/user/countTotalStr');
  }
  countTotalFin(): Observable<any>{

    return this._http.get('http://localhost:5100/user/countTotalFin');
  }
 
//   countTotalQlt():Observable<any>{
//     return this._http.get('http://localhost:5100/user/countTotalQlt');
// }

// countTotalMan():Observable<any>{
//   return this._http.get('http://localhost:5100/user/countTotalMan');
// }
countTotalHr(): Observable<any>{

  return this._http.get('http://localhost:5100/user/countTotalHr');
}


}
