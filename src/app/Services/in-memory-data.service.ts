import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Hozo'},
      {id: 12, name: 'Tafur'},
      {id: 13, name: 'Boku'},
      {id: 14, name: 'Pico'},
      {id: 15, name: 'Walda'},
      {id: 16, name: '28'}
    ];
    return {heroes};
  }
}