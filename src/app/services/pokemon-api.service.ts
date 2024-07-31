/**
 * Interfaces
 */
import {IPokemon} from "pokeapi-typescript"
import IAutoCompleteOption from "../interfaces/IAutoCompleteOption";
import IPokemonListItem from "@/app/interfaces/IPokemonListItem";

/**
 * A service for fetching Pokémon data from the PokeAPI
 */
export default class PokemonApiService {

    /**
     * Fetches a complete list of Pokémon from the PokeAPI
     * @returns {Promise<IAutoCompleteOption[]>} - A list of Pokémon mapped as IAutoCompleteOptions
     */
    static async getAllPokemon(): Promise<IAutoCompleteOption[]> {
        const response: Response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302');
        const data = await response.json();
        return data.results.map((pokemon: IPokemonListItem): IAutoCompleteOption => {
            // Extract the id from the Pokémon's url field, we'll use this as the key for this option.
            const id: string = pokemon.url.split('/')[6];
            return {
                label: pokemon.name,
                id: parseInt(id),
            };
        });
    }

    /**
     * Fetches a single Pokémon from the PokeAPI
     * @param id
     */
    static async getPokemon(id: number): Promise<IPokemon> {
        const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response.json();
    }
}