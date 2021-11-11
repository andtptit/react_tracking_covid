import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {

  const [countries, setCountries] = useState([]);

  const [selectedCountryId, setSelectedCountryId] = useState('')

  useEffect(() => {
    getCountries()
      .then(res => {
        setCountries(res.data)
    })
  },[])

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value)

    const { Slug } = countries.find(
      (country) => country.ISO2.toLowerCase() === e.target.value);
    console.log({e, Slug})

    // call api
    getReportByCountry(Slug)
  }

  return (
    <div>
      <CountrySelector countries={countries} handleOnChange={handleOnChange}/>
      <Highlight/>
      {/* <Summary/> */}
    </div>
  );
}

export default App;

