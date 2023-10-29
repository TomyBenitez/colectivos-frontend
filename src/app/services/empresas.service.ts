import { Injectable } from "@angular/core";
import { getBaseUrl } from "../utils";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class EmpresasService{
	endpoint: string = `${getBaseUrl()}/empresas`;
	
	constructor(private http: HttpClient) { }

	getCompanies(){
		return this.http.get<any>(this.endpoint);
	}
	
	addCompany(company: any): Observable<any> {
		return this.http.post<any>(this.endpoint, company);
	}

	editCompany(company: any): Observable<any> {
		const url = `${this.endpoint}/${company.id}`;
		return this.http.put<any>(url, company);
	}

	deleteCompany(id: number): Observable<any> {
		const url = `${this.endpoint}/${id}`;
		return this.http.delete<any>(url);
	}
}