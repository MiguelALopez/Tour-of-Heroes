import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../hero';
import { HeroService } from '../../Services/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
        </div>
    `
})

export class HeroDetailComponent {
    @Input() hero: Hero;
    
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}
}
