import { NgModule } from "@angular/core";
import HomeRoutingModule from "./home-routing.module";
import HomeComponent from "./home.component";
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { MapComponentComponent } from './components/map-component/map-component.component';

@NgModule({
	declarations:[
		HomeComponent,
		SearchFormComponent,
    	MapComponentComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		HttpClientJsonpModule
	],
	exports: []
})
export class HomeModule {}