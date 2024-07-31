import IAutoCompleteOption from "@/app/interfaces/IAutoCompleteOption";

/**
 * Interface for the Pokémon store
 */
export interface IPokemonStore {
    favorite: IAutoCompleteOption | null;
    pokemonData: any;
    firstName: string;
    lastName: string;
    email: string;
    setFavorite: (favorite: IAutoCompleteOption) => void;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setEmail: (email: string) => void;
}