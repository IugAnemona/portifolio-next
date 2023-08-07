import { FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { AppContainer, Content, Input, SearchButton } from "./styles";

export const WeatherApp = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("Belo Horizonte");

  interface WeatherData {
    cityInfo: string;
    temp: number;
    weather: string;
    humidity: number;
    icon: string;
  }

  const ApiFunction = async (city: string) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c00312569905dbd2b055e77b0421fed7&lang=pt_br&units=metric`
    ).then((response) => response.json());
    const dados = {
      cityInfo: data.name,
      temp: data.main.temp,
      weather: data.weather[0].description,
      humidity: data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    };
    return dados;
  };

  const fetchData = async (city: string) => {
    const data = await ApiFunction(city);
    setData(data);
  };
  useEffect(() => {
    fetchData(city);
  }, []);
  const handleChange = (e: any) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    fetchData(city);
  };

  return (
    <AppContainer>
      <Content>
        <Input placeholder="City Name" onChange={handleChange} />
        <SearchButton onClick={handleClick}>
          <FaSearch />
        </SearchButton>
      </Content>
      <Content>
        {data ? (
          <h1>
            Tempo em <span>{data.cityInfo}</span>
          </h1>
        ) : (
          <h1>loading</h1>
        )}
      </Content>
      <Content>
        {data ? (
          <h1>
            {data.temp}
            <span>ºC</span>
          </h1>
        ) : (
          <span>Loading</span>
        )}
      </Content>
      <Content>{data ? <h1>{data.weather}</h1> : <span>Loading</span>}</Content>
      <Content>
        <span>
          {data ? (
            <h1>
              Humidade: <span>{data.humidity}</span>
            </h1>
          ) : (
            <p>loading</p>
          )}
        </span>
      </Content>
    </AppContainer>
  );
};
