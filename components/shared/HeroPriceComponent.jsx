"use client";

import { useEffect, useState } from "react";
import { usePayStore } from "@/store/PayStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Input } from "@/components/ui/input";

const selectDestinationCountry = [
  {
    value: "ro",
    label: "Romania",
    currency: "RON",
  },
  {
    value: "ua",
    label: "Ukraine",
    currency: "UAH",
  },
  {
    value: "tr",
    label: "Turkey",
    currency: "TRY",
  },
  {
    value: "fr",
    label: "France",
    currency: "EUR",
  },
  {
    value: "de",
    label: "Germany",
    currency: "EUR",
  },
  {
    value: "pl",
    label: "Poland",
    currency: "PLN",
  },
  {
    value: "lt",
    label: "Lithuania",
    currency: "EUR",
  },
  {
    value: "lv",
    label: "Latvia",
    currency: "EUR",
  },
  {
    value: "ee",
    label: "Estonia",
    currency: "EUR",
  },
];

const fetchRates = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const HeroPriceComponent = () => {
  const [
    country,
    setCountry,
    currency,
    setCurrency,
    fundsInAmount,
    setFundsInAmount,
  ] = usePayStore((state) => [
    state.country,
    state.setCountry,
    state.currency,
    state.setCurrency,
    state.fundsInAmount,
    state.setFundsInAmount,
  ]);

  const [rates, setRates] = useState("4.9724");

  useEffect(() => {
    fetchRates(
      `https://v6.exchangerate-api.com/v6/5f408f6dc33a575a92904c53/pair/EUR/${currency}`
    ).then((data) => {
      const conversion_rate = data.conversion_rate;
      console.log("conversion_rate", conversion_rate);
      setRates(conversion_rate);
    });
  }, [currency]);

  const handleSelection = (value) => {
    const selectedCountry = selectDestinationCountry.find(
      (country) => country.value === value
    );
    console.log("selectedCountry", selectedCountry.label);
    setCountry(selectedCountry.value);

    setCurrency(selectedCountry.currency);
  };

  return (
    <div>
      <div className="mt-4 flex items-center space-x-4">
        {/* LEFT SIDE */}
        <div>
          <Select onValueChange={handleSelection} defaultValue={country}>
            <SelectTrigger className="w-[200px] h-[50px]">
              <SelectValue placeholder="Send To" />
            </SelectTrigger>
            <SelectContent>
              {selectDestinationCountry.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  <span class={`fi fi-${country.value} mr-2`}></span>
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* RIGHT SIDE */}
        <div>
          <Input
            className="w-[150px] md:w-[200px] h-[50px]"
            type="number"
            placeholder="100 EUR"
            value={fundsInAmount}
            onChange={(e) => setFundsInAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 md:mt-8 flex flex-col md:flex-row md:items-center md:space-x-8">
        <h1>
          <span className="font-bold">FX:</span> 1.00 EUR = {rates} {currency}
        </h1>
        <h1>
          <span className="font-bold">Fee:</span> 0.00 EUR
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default HeroPriceComponent;
