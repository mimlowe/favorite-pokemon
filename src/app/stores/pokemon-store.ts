/**
 * Zustand
 */
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
/**
 * Interfaces
 */
import {IPokemonStore} from "@/app/interfaces";


/**
 * A store for managing User & Pokémon data
 * These values are synchronized with localStorage
 */
const usePokemonStore = create<IPokemonStore>()(
    persist(
        (set) => ({
            favorite: null,
            pokemonData: null,
            firstName: '',
            lastName: '',
            email: '',
            /**
             * Sets the favorite Pokémon selection option
             * @param favorite
             */
            setFavorite: (favorite) => set({ favorite }),
            /**
             * Sets the favorite Pokémon data, this is used after fetching the data for the selected Pokémon
             * @param pokemonData
             */
            setFavoriteData: (pokemonData) => set({ pokemonData }),
            /**
             * User form input setters
             */
            setFirstName: (firstName) => set({ firstName }),
            setLastName: (lastName) => set({ lastName }),
            setEmail: (email) => set({ email }),
        }),
        {
            name: 'pokemon-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default usePokemonStore;