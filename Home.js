
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import CategorySlider from "../components/CategorySlider";
import UpcomingEvents from "../components/UpcomingEvents";
import EventFilterBar from "../components/EventFilterBar";
import axios from "axios";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(5000);

  useEffect(() => {
    axios
      .get("http://localhost:8080/ap/upcoming")
      .then((res) => {
        setEvents(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    let result = events;

    if (debouncedSearch) {
      result = result.filter((e) =>
        e.eventName.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    if (city) {
      result = result.filter((e) => e.city === city);
    }

    result = result.filter((e) => e.registrationFee <= price);

    setFiltered(result);
  }, [debouncedSearch, city, price, events]);

  const cities = [...new Set(events.map((e) => e.city))];

  const resetFilters = () => {
    setSearch("");
    setCity("");
    setPrice(5000);

    document.querySelector(".upcoming-section")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <Hero />
      <CategorySlider />

      {/* 🔍 FILTER BAR */}
      <EventFilterBar
        search={search}
        setSearch={setSearch}
        city={city}
        setCity={setCity}
        price={price}
        setPrice={setPrice}
        cities={cities}
        onReset={resetFilters}
      />

      <UpcomingEvents events={filtered} />
    </>
  );
};

export default Home;
