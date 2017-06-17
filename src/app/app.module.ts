import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here
import {HttpModule}    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './Services/in-memory-data.service';

import {AppComponent}  from './app.component';
import {HeroDetailComponent} from './Components/hero-detail/hero-detail.component';
import {HeroesComponent} from './Components/heroes/heroes.component';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {HeroSearchComponent} from './Components/hero-search/hero-search.component';

import {HeroService} from './Services/hero.service';

import {AppRoutingModule} from './Modules/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
