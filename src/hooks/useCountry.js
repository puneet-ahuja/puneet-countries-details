import { useState, useEffect } from "react";

const useCountry = (countryName) => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://restcontries.com/v3.1/name/${countryName}`
        );
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
        setError("The country is not found");
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [countryName]);

  return {
    country,
    error,
    loading,
  };
};

export { useCountry };