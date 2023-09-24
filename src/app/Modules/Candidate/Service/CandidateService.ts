import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CandidateService{
    constructor(private http: HttpClient){}
    
    addCandidate(data: any): Observable<any>{
        return this.http.post('http://localhost:3000/candidates',data);
    }

    getCandidates(): Observable<any>{
        return this.http.get('http://localhost:3000/candidates');
    }

    deleteCandidate(id: number): Observable<any>{
        debugger
        return this.http.delete('http://localhost:3000/candidates/'+id);
    }

    updateCandidate(id: number, data: any): Observable<any> {
        return this.http.put(`http://localhost:3000/candidates/${id}`, data);
      }
}