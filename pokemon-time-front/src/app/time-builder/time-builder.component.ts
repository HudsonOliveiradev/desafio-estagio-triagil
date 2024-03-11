import {Component, OnInit} from '@angular/core';
import {TimeService} from "../services/time.service";

@Component({
  selector: 'app-time-builder',
  templateUrl: './time-builder.component.html',
  styleUrl: './time-builder.component.css'
})
export class TimeBuilderComponent implements OnInit {
  teams: any = [];
  novoTimeOwner: string = '';
  pokemons: string[] = [''];
  buscahOwner: string = '';
  buscarTeam: any = null;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.getTimes();
  }

  getTimes() {
    this.timeService.getTimes().subscribe(
      (data) => {
        console.log('getTimes:',data);
        this.teams = data;
      },
      (error) => {
        console.error('Error ao consultar time!', error);
      }
    );
  }

  adicionarPokemonCampo(): void{
    if(this.pokemons.length < 6){
      console.log('adicionarPokemonCampo1 ',this.pokemons);
      this.pokemons.push('');
      console.log('adicionarPokemonCampo2 ',this.pokemons);
    }
  }

  removePokemonCampo(index: number): void{
    if(this.pokemons.length > 1){
      this.pokemons.splice(index, 1);
    }
  }
  criarTime(): void {
    const teamData = {
      user: this.novoTimeOwner,
      team: this.pokemons
    };

    console.log('criarTime', teamData);
    this.timeService.criarTime(teamData).subscribe(
      () => {
        this.getTimes(); // Atualizar a lista após criar o time
        this.novoTimeOwner = '';
        this.pokemons = [''];
      },
      (error) => {
        console.error('Error ao criar times pokemons!', error);
      }
    );
  }

  podeCriarTimes(): boolean {
    console.log('pode criar:', this.novoTimeOwner.trim() !== '' && this.pokemons.length === 6 && this.pokemons.every(pokemon => pokemon.trim() !== ''))
    return this.novoTimeOwner.trim() !== '' && this.pokemons.length === 6 && this.pokemons.every(pokemon => pokemon.trim() !== '');
  }

  buscaTeamByOwner(): void {
    this.timeService.getTimeByUser(this.buscahOwner).subscribe(
      (team) => {
        this.buscarTeam = team;
      },
      (error) => {
        console.error('Error fetching team', error);
        this.buscarTeam = null;
      }
    );
  }
}
