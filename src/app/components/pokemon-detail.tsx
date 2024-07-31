"use client";
import React from 'react';
/**
 * Material UI Components
 */
import Box from "@mui/material/Box";
import {Alert} from "@mui/material";
/**
 * Next Components
 */
import Image from "next/image";
/**
 * Store
 */
import usePokemonStore from "@/app/stores/pokemon-store";
const PokemonDetail = () => {

    const getFavoritePokemonData = usePokemonStore(state => state.pokemonData);

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

                    style={{
                        backgroundImage: `url('/wallpaper.jpg')`,
                        backgroundPositionY:'-300px',
                }}
                    sx={{
                        width: "100%",
                        height: 250,
                        borderRadius: 2,
                        marginTop: 4,
                        paddingTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        src={getFavoritePokemonData.sprites.front_default}
                        alt={getFavoritePokemonData?.name}
                        width={150}
                        height={150}
                    />
                </Box>
            )
        }
        return (<></>);
    }

    return  renderPokemonData()

}

export default PokemonDetail;