"use client";
import React, {useEffect} from 'react';
/**
 * Material UI Components
 */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
/**
 * App Components
 */
import PokemonForm from "@/app/components/forms/pokemon-form";
/**
 * React Hook Form
 */
import {SubmitHandler, useForm} from "react-hook-form";
/**
 * Stores
 */
import usePokemonStore from "@/app/stores/pokemon-store"; // Import the store
/**
 * Interfaces
 */
import {IUserFormInput} from "@/app/interfaces";
import IAutoCompleteOption from "@/app/interfaces/IAutoCompleteOption";

/**
 * User Information Form.
 * @param props
 * @constructor
 */
const UserInfoForm = (props:{pokemon:IAutoCompleteOption[]}) => {

    // React Hook Form
    const { register, handleSubmit, setValue, formState:{errors, isValid} } = useForm();

    /**
     * Check the store for the user's information
     */
    let firstName = usePokemonStore((state) => state.firstName);
    let lastName = usePokemonStore((state) => state.lastName);
    let email = usePokemonStore((state) => state.email);

    /**
     * Define the store setters for readability
     */
    const saveFirstName = usePokemonStore((state) => state.setFirstName);
    const saveLastName= usePokemonStore((state) => state.setLastName);
    const saveEmail = usePokemonStore((state) => state.setEmail);

    /**
     * State to control the display of the forms
     */
    const [showPokemonForm, setShowPokemonForm] = React.useState(false);
    const [showUserInfoForm, setShowUserInfoForm] = React.useState(false);


    useEffect(() => {
        // When the component is loaded, we want to check if the user has already entered their information
        if (firstName && lastName && email) {
            // In thise case, we'll only display the Pokémon selection form
            setShowPokemonForm(true);
            setShowUserInfoForm(false);
        } else {
            // Otherwise, we'll display the user information form
            setShowUserInfoForm(true);
        }

    }, [firstName, lastName, email ]);

    /**
     * Submission handler
     * @param data
     */
    const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
        /// Update the store with the user data
        saveFirstName(data.firstName);
        saveLastName(data.lastName);
        saveEmail(data.email);

        // If the form is valid, then we'll only display the Pokémon selection form
        if (isValid) {
            setShowPokemonForm(true);
            setShowUserInfoForm(false);
        }
    }

    /**
     * Render method for the user information form
     */
    const displayUserInfoForm = () => {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("firstName", {required: "First name is required"})}
                            name="firstName"
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                        <p style={{fontSize: 12, color: "#ff0000"}}>{errors.firstName?.message}</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("lastName", {required: "Last name is required"})}
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                        />
                        <p style={{fontSize: 12, color: "#ff0000"}}>{errors.lastName?.message}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email address"
                                }
                            })}
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                        />
                        <p style={{fontSize: 12, color: "#ff0000"}}>{errors.email?.message}</p>

                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Next
                </Button>
            </>
        )
    }


    return (
        <>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            {
                showUserInfoForm && displayUserInfoForm()
            }
        </Box>

        {
            showPokemonForm && <PokemonForm pokemon={props.pokemon} />
        }
        </>
    )
}

export default UserInfoForm;