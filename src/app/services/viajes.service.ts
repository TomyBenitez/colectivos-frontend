import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getBaseUrl } from "../utils";

@Injectable({
	providedIn: 'root'
})
export default class ViajesService {

	constructor(private _http: HttpClient) {}

	private formData:any;

	obtenerViajes = () => this._http.get(`${getBaseUrl()}/viajes`);
	
	guardarNuevoViaje = (formData:any) => {
		return this._http.post(`${getBaseUrl()}/viajes`,formData)
	}
	
	setFormData(data:any){
		this.formData = data;
	}

	getFormData(){
		return this.formData;
	}

}