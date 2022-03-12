import CountrySelector from './components/CountrySelector';
import Summary from './components/Summary';
import Highlight from './components/Highlight';
import { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './api'
import { sortBy } from 'lodash';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountryId, setSelectedCountryId] = useState('')
  const [report, setReport] = useState([])
  
  const handleOnchange = (e) => {
    setSelectedCountryId(e.target.value)
  }

  useEffect(() => {
    getCountries()
      .then(res => {
        const countries = sortBy(res.data, 'Country')
        setCountries(countries)
        setSelectedCountryId('vn')
      }
      )
  }, []);


  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
        )
        getReportByCountry(Slug)
        .then((res) => {
          res.data.pop()
          setReport(res.data)
        })
    }
  }, [countries, selectedCountryId])


  
  
  return (
      <Container>
      <Typography variant="h2" component='h2'>
          Covid-19 data
      </Typography>
      <Typography>
        {moment().format('LLL')}
      </Typography>
      <CountrySelector value={selectedCountryId} countries={countries} handleOnchange={handleOnchange}/>
      <Highlight report={report} />
      <Summary report={report} selectedCountryId={selectedCountryId}/>
      </Container>
  );
}

export default App;