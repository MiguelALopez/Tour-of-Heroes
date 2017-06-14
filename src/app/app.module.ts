import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here

import {AppComponent}  from './app.component';
import {HeroDetailComponent} from './Components/hero-detail/hero-detail.component';
import {HeroesComponent} from './Components/heroes/heroes.component';
import {DashboardComponent} from './Components/dashboard/dashboard.component';

import {HeroService} from './Services/hero.service';

import {AppRoutingModule} from './Modules/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
