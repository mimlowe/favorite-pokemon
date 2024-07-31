import * as React from 'react';
/**
 * MUI Components
 */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
/**
 * Next Components
 */
import Image from "next/image";
import UserInfoForm from "@/app/components/forms/user-info-form";
import IAutoCompleteOption from "@/app/interfaces/IAutoCompleteOption";
import PokemonApiService from "@/app/services/pokemon-api.service";
import usePokemonStore from "@/app/stores/pokemon-store";
import PokemonDetail from "@/app/components/pokemon-detail";

export default  async function FavoritePage() {

    const pokemon: IAutoCompleteOption[] = await PokemonApiService.getAllPokemon();

    return (
        <Container component="main" maxWidth="xs" sx={{marginTop: 8}}>
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Image
                    src={"/pokeball.png"} alt={"Pokeball"} width={50} height={50}
                />

                <Typography component="h1" variant="h5">
                    Select your favorite Pokémon
                </Typography>

                <UserInfoForm pokemon={pokemon}  />
                <PokemonDetail />
            </Box>
        </Container>
    );
}