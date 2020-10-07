import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-busqueda-heroe',
    templateUrl: './busqueda-heroe.component.html',
    styles: [],
})
export class BusquedaHeroeComponent implements OnInit {
    heroes: any[] = [];
    termino: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private heroesService: HeroesService,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
            this.termino = params.termino;
            this.heroes = this.heroesService.buscarHeroes(params.termino);
        });
        console.log(this.heroes);
    }

    verHeroe(index: number) {
        this._router.navigate(['/heroe', index]);
    }
}
