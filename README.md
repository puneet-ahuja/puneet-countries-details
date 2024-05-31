# puneet-countries-details

A ReactJS hook to get the country information.

## How to use it?

You can use the project in this way:

### Install
```bash
# with npm
npm install puneet-countries-details

# with yarn
yarn add puneet-countries-details
```

### Usage

- Import the package in your app:
```js
import { useCountry } from 'puneet-countries-details';
```

- Get the country infromation from the hook:
```js
const { loading, error, country } = useCountry('Republic of India');
```