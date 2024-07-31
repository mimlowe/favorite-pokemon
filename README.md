
# Running the Project

First, navigate to the project root and install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Project Structure

The project is structured as follows:

- `components/`: Contains all the app components used in the project.
- `interfaces/`: Contains all the interfaces used in the project.
- `services/`: Contains the `pokemon-api.service` used to fetch data from the [Pokémon API](https://pokeapi.co/).
- `stores/`: Contains a `zustand` store used to manage the state of the app.

- The app uses a single `page` component, located at `./page.tsx`.

# Key Features and Design Decisions

### State Management

The application uses a simple [zustand](https://github.com/pmndrs/zustand) store to manage the state of the app. 
The store is used to save information submitted by the user, as well as Pokémon data fetched from the Pokémon API.

It uses the `persist` middleware to save the store to `localStorage`.
This allows the app to maintain a persistent state when revisiting the page.

---

### UserInfoForm Component

This form is required in order to allow the user to select their favorite Pokémon.
When the user submits their `firstName`, `lastName`, and `email`, the `store` is updated.

After submitting this form, as long as the `store` contains user data, each subsequent visit to the app will immediately display the Pokémon selection dropdown.

---

### PokemonSelection Component

This component displays a dropdown list of Pokémon fetched from the Pokémon API.
It uses the [Material UI Autocomplete Component](https://mui.com/material-ui/react-autocomplete/)  to allow the user to search the list of Pokémon.

When the user selects a Pokémon, the PokeAPI is called to fetch all the data for that Pokémon.
The`store` is then updated with the selected Pokémon's data.

---

### Menu Component

The menu component includes a button to reset the application state.
This allows the user to submit a new `UserInfoForm`.

