"use client";
import React from 'react'
/**
 * Material UI Components
 */
import {Alert, Autocomplete, TextField} from "@mui/material";
import Box from "@mui/material/Box";
/**
 * Next Components
 */
import Image from "next/image";
/**
 * Stores
 */
import usePokemonStore from "@/app/stores/pokemon-store";
/**Interfaces */
import IAutoCompleteOption from "@/app/interfaces/IAutoCompleteOption";

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
    const getFavoritePokemonData = usePokemonStore(state => state.pokemonData);

    /**
     * Select Handler, this function will be called when the user selects a Pokémon from the dropdown.
     * It will also fetch the data for the selected Pokémon and update the stores.
     * @param event
     * @param value
     */
    const selectHandler = async (event: React.ChangeEvent<{}>, value: IAutoCompleteOption | null) => {
        if (value) {
            setFavoritePokemon(value);
            const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.id}`);
            const pokemon = await pokemonData.json();
            setFavoritePokemonData(pokemon);
        }

        else {
            setFavoritePokemonData(null);
        }
    }

    /**
     * Render method for the Pokémon data.
     * If an image was not found, it will display a warning.
     */
    const renderPokemonData = () => {
        if(getFavoritePokemonData) {
            // In this case, the API is missing image data for the Pokémon.
            if (!getFavoritePokemonData.sprites.front_default) {
                return(
                    <Alert severity="warning">Image is missing for this Pokémon</Alert>
                )
            }
            return (
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        src={getFavoritePokemonData.sprites.front_default}
                        alt={getFavoritePokemonData?.name}
                        width={200}
                        height={200}
                    />
                </Box>
            )
        }
        return (<></>);
    }

    return (
        <>

        <Autocomplete
            id="autocomplete-field"
            options={props.options}
            fullWidth={true}
            onChange={selectHandler}
            getOptionLabel={(option) => { return option.label}}
            defaultValue={props.value}
            renderInput={(params) => <TextField autoFocus={true} fullWidth={true} {...params} label={props.label} />}

        />
            {
                renderPokemonData()
            }

        </>
    );
}

