import * as React from "react";
/**
 * Material Components
 */
import Box from "@mui/material/Box";
/**
 * App Components
 */
import AutoCompleteSelect from "@/app/components/form-fields/autocomplete-select";
/**
 * Interfaces
 */
import IAutoCompleteOption from "@/app/interfaces/IAutoCompleteOption";
/**
 * Stores
 */
import usePokemonStore from "@/app/stores/pokemon-store";

/**
 * Form for selecting a favorite Pokémon
 * @param props
 * @constructor
 */
const PokemonForm =(props:{pokemon: IAutoCompleteOption[]}) => {

    // Get the favorite Pokémon from the store, this may be used to assign a value to the AutoCompleteSelect component
    let favorite = usePokemonStore((state) => state.favorite);

    return (
        <Box  noValidate sx={{ mt: 3, width: "100%" }}>

            <AutoCompleteSelect   options={props.pokemon} label="Favorite Pokémon" value={favorite}/>

        </Box>
    )
}

export default PokemonForm;