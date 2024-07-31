import IAutoCompleteOption from "@/app/interfaces/IAutoCompleteOption";
/**
 * PokeAPI Interfaces
 */
import {IPokemon} from "pokeapi-typescript";

/**
 * Interface for the Pokémon store
 */
export interface IPokemonStore {
    // The option list value for the favorite Pokémon
    favorite: IAutoCompleteOption | null;
    // The PokeAPI response data for the favorite Pokémon
    pokemonData: IPokemon | null;
    // User information
    firstName: string;
    lastName: string;
    email: string;
    // Setter methods
    setFavorite: (favorite: IAutoCompleteOption) => void;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setEmail: (email: string) => void;
}