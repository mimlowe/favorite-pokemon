"use client";
import React from 'react'
/**
 * Material UI Components
 */
import {Autocomplete, TextField} from "@mui/material";
/**
 * Stores
 */
import usePokemonStore from "@/app/stores/pokemon-store";
/**Interfaces */
import IAutoCompleteOption from "@/app/interfaces/IAutoCompleteOption";
import PokemonApiService from "@/app/services/pokemon-api.service";
import {IPokemon} from "pokeapi-typescript";

/**
 * AutoCompleteSelect, this is the dropdown component that will be used to select the user's favorite Pokémon.
 * @param props
 * @constructor
 */
export default function AutoCompleteSelect(props:{options: IAutoCompleteOption[], label: string, value?: IAutoCompleteOption | null}) {

    /**
     * Store setters and getters for readability
     */
    const setFavoritePokemon = usePokemonStore(state => state.setFavorite);
    const setFavoritePokemonData = usePokemonStore(state => state.setFavoriteData);


    /**
     * Select Handler, this function will be called when the user selects a Pokémon from the dropdown.
     * It will also fetch the data for the selected Pokémon and update the stores.
     * @param event
     * @param value
     */
    const selectHandler = async (event: React.ChangeEvent<{}>, value: IAutoCompleteOption | null) => {
        if (value) {
            setFavoritePokemon(value);
            const pokemon: IPokemon = await PokemonApiService.getPokemon(value.id)
            setFavoritePokemonData(pokemon);
        }

        else {
            setFavoritePokemonData(null);
        }
    }



    return (

        <Autocomplete
            id="autocomplete-field"
            options={props.options}
            fullWidth={true}
            onChange={selectHandler}
            getOptionLabel={(option) => { return option.label}}
            defaultValue={props.value}
            renderInput={(params) => <TextField autoFocus={true} fullWidth={true} {...params} label={props.label} />}
        />


    );
}

