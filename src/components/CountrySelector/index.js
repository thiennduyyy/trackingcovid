import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core'
import React from 'react'

function CountrySelector({value, handleOnchange, countries}) {

  return (
    <FormControl>
        <InputLabel htmlFor='country-selector' shrink >Country</InputLabel>
        <NativeSelect 
          value={value} 
          onChange={handleOnchange} 
          inputProps ={{
            name: 'country', 
            id: 'country-selector'
          }}
        >
          {countries.map(country => {
            return <option key={country.ISO2} value={country.ISO2.toLowerCase()}>{country.Country}</option>
          })}
        </NativeSelect>
        <FormHelperText>Choose a country</FormHelperText>
    </FormControl>
  )
}

export default CountrySelector