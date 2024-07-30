"use client";
import React, {useEffect} from 'react'
import {Autocomplete, TextField} from "@mui/material";
interface AutoCompleteOption {
    label: string;
    id: number;
}
export default function PokemonSelect() {

    const [options, setOptions] = React.useState<AutoCompleteOption[]>([]);

    useEffect(() => {
        async function fetchPokemon(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302');
            const data = await response.json();
            const options: AutoCompleteOption[] = data.results.map((pokemon: { name: string; url: string; }) => {
                const id = pokemon.url.split('/')[6];
                return {
                    label: pokemon.name,
                    id: parseInt(id),
                };
            });

            setOptions([...options]);
        }

        fetchPokemon();
    }, []);
    return (
        <Autocomplete
            id="grouped-demo"
            options={options}
            getOptionLabel={(option) => option.label}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Pokemon Name" />}
        />
    );
}

