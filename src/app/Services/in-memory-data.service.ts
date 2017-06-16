import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {id: 1, name: 'Hozo'},
            {id: 2, name: 'Tafur'},
            {id: 3, name: 'Boku'},
            {id: 4, name: 'Pico'},
            {id: 5, name: 'Walda'},
            {id: 6, name: '28'}
        ];
        return {heroes};
    }
}
