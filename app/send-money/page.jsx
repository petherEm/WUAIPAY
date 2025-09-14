"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePayStore } from "@/store/PayStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Banknote, LandmarkIcon, CreditCardIcon } from "lucide-react";
import Summary from "@/components/shared/Summary";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UpsellSpace from "@/components/shared/SendMoney/UpsellSpace";
import LegalDiscSend from "@/components/shared/SendMoney/LegalDiscSend";

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

const SendMoney = () => {
  const [
    fundsInAmount,
    setFundsInAmount,
    fundsIn,
    fundsOut,
    setFundsIn,
    setFundsOut,
    country,
    setCountry,
    currency,
    setCurrency,
    rates,
    setRates,
    banner,
    setBanner,
    fee,
    setFee,
    bonusAmount,
    setBonusAmount,
  ] = usePayStore((state) => [
    state.fundsInAmount,
    state.setFundsInAmount,
    state.fundsIn,
    state.fundsOut,
    state.setFundsIn,
    state.setFundsOut,
    state.country,
    state.setCountry,
    state.currency,
    state.setCurrency,
    state.rates,
    state.setRates,
    state.banner,
    state.setBanner,
    state.fee,
    state.setFee,
    state.bonusAmount,
    state.setBonusAmount,
  ]);

  console.log(country);

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
    setBanner(
      selectedCountry.value === "ro" || selectedCountry.value === "pl"
        ? true
        : false
    );
    console.log("banner", banner);
    setCurrency(selectedCountry.currency);
  };

  return (
    <div className="bg-gray-200 h-auto">
      {/* YELLOW UPSELL BANNER */}
      <div
        className={`${
          !banner
            ? "hidden"
            : "bg-[#fbd721] border-0 border-red-500 h-24 flex items-center justify-center transition-all ease-in duration-300 w-full"
        }`}
      >
        <div className="flex flex-col ">
          <h1 className="text-center text-[13px] md:text-[18px]">
            Sending to <span className="font-bold">{country}? </span>Send
            directly to Western Union Ecosystem and reward your receiver{" "}
            <span className="font-bold">
              now with additional 100 {currency} bonus.
            </span>
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row justify-between md:p-6">
        {/* FORM  */}
        <div className="mt-20  md:flex-[50%] bg-white max-w-[800px]">
          <div className="p-2 md:p-10">
            <h1 className="text-2xl mb-3">Send Money Online from Germany</h1>
            <h2 className="text-lg mb-3">
              Your receiver's country and send amount
            </h2>
            {/* COUNTRY SELECTION */}
            <div>
              <Select onValueChange={handleSelection} defaultValue={country}>
                <SelectTrigger className="w-full h-[50px]">
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
            {/* AMOUNT CALCULATION */}
            <div className="mt-6 flex  flex-row justify-between space-x-4">
              <div className="relative flex border-[1px] border-gray-400 p-4">
                <p className="absolute text-[9px] top-1 left-1">Send amount</p>
                <input
                  type="number"
                  className="bg-white w-[100px] md:w-[250px] outline-none placeholder:text-black"
                  placeholder={fundsInAmount}
                  value={fundsInAmount}
                  onChange={(e) => setFundsInAmount(e.target.value)}
                />
                <p className="text-blue-500 text-[14px]">EUR</p>
              </div>
              <div className="relative flex border-[1px] border-gray-400 p-4">
                <p className="absolute text-[9px] top-1 left-1">
                  Receiver gets
                </p>
                <input
                  type="text"
                  className="bg-white w-[100px] md:w-[250px] outline-none placeholder:text-black"
                  placeholder={Math.round(fundsInAmount * rates * 100) / 100}
                  onChange={(e) => setSendAmount(e.target.value)}
                />
                <p className="text-blue-500 text-[14px]"> {currency}</p>
              </div>
            </div>
            {/* LIMITS */}
            <div className="bg-blue-200  p-4 rounded-md flex items-center mt-6 mb-6 alert alert-info shadow-lg text-[13px] md:h-5">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Send up to 5,000.00 EUR</span>
              </div>
            </div>
            {/* CURRENCY CONVERSION  */}
            <div className="mt-6 mb-6 flex flex-col items-center justify-center">
              <p className="font-bold">
                1.00 EUR = {rates} ({currency})
              </p>
              <p className="text-[11px]">
                Exchange rate varies with delivery and payment method.
                <span className="text-blue-500 font-semibold cursor-pointer">
                  {" "}
                  Details.
                </span>
              </p>
            </div>

            {/* PAYMENT METHODS AND PAYOUT METHODS */}
            {/* HOW DOES YOUR RECEIVER WANT THE MONEY */}
            <div className="mt-10">
              <h1 className="text-xl mt-6 mb-6">
                How does your receiver want the money?
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 md:w-5/6 gap-y-4 ">
                <div
                  onClick={() => {
                    setFundsOut("Cash"), setFee(2.99);
                  }}
                  className={`${
                    fundsOut === "Cash" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <Banknote className="text-3xl" />
                  <p className="mt-2 text-[12px] font-normal">Cash</p>
                </div>
                <div
                  onClick={() => {
                    setFundsOut("Bank"), setFee(0.0), setBonusAmount(null);
                  }}
                  className={`${
                    fundsOut === "Bank" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <LandmarkIcon className="text-3xl" />
                  <p className="mt-2 text-[12px] font-normal">Bank account</p>
                </div>
                {country === "ro" || country === "pl" ? (
                  <div
                    onClick={() => {
                      setFundsOut("Ecosystem"),
                        setFee(0.0),
                        setBonusAmount(100);
                    }}
                    className={`${
                      fundsOut === "Ecosystem" ? "bg-slate-300" : "bg-white"
                    } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                  >
                    <Image src="/wumin2.png" width="90" height="90" />
                    <p className="mt-2 text-[12px] font-normal text-center">
                      Western Union Wallet
                    </p>
                  </div>
                ) : (
                  <div
                    className={`bg-slate-100 border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-disabled`}
                  >
                    <Image src="/wumin2.png" width="90" height="90" />
                    <p className="mt-2 text-[12px] font-normal text-center">
                      Western Union Wallet{" "}
                      <span className="text-red-400">(coming soon)</span>
                    </p>
                  </div>
                )}

                <div
                  onClick={() => {
                    setFundsOut("Card"), setFee(0.0);
                  }}
                  className={`${
                    fundsOut === "Card" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <Image src="/masterc2.png" width="90" height="90" />
                  <p className="mt-2 text-[12px] font-normal text-center">
                    Debit card
                  </p>
                </div>
              </div>
            </div>

            {/* HOW WOULD YOU LIKE TO PAY */}

            <div className="mt-10">
              <h1 className="text-xl mt-6 mb-6">How would you like to pay?</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:w-5/6 gap-y-4">
                <div
                  onClick={() => setFundsIn("P24")}
                  className={`${
                    fundsIn === "P24" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <Image src="/p24.png" width="70" height="70" />
                  <Image src="/blik.jpeg" width="70" height="70" />
                </div>
                <div
                  onClick={() => setFundsIn("Card")}
                  className={`${
                    fundsIn === "Card" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <CreditCardIcon className="text-3xl" />
                  <p className="mt-2 text-[12px] font-normal">
                    Credit/Debit card
                  </p>
                </div>
                <div
                  onClick={() => setFundsIn("Instant")}
                  className={`${
                    fundsIn === "Instant" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <LandmarkIcon className="text-3xl" />
                  <p className="mt-2 text-[12px] text-center font-normal">
                    Instant bank transfer
                  </p>
                </div>
                <div
                  onClick={() => setFundsIn("Bank")}
                  className={`${
                    fundsIn === "Bank" ? "bg-slate-300" : "bg-white"
                  } border-[1.5px] border-black h-28 w-32 rounded-md flex flex-col items-center justify-center cursor-pointer`}
                >
                  <LandmarkIcon className="text-3xl" />
                  <p className="mt-2 text-[12px] font-normal">Bank transfer</p>
                </div>
              </div>
            </div>

            <Button className="mt-8 bg-blue-900/80 w-full py-6">
              <Link href="/payment">Continue</Link>
            </Button>
          </div>
        </div>

        {/* SUMMARY */}

        <div className="mt-14 flex-[50%] mx-auto p-2 md:p-8">
          <Summary rates={rates} currency={currency} banner={banner} />
        </div>
      </div>

      {/* 3RD PARTY PSELL SPACE */}

      {/* <div className="max-w-7xl mx-auto">
        <UpsellSpace />
      </div> */}

      {/* LEGAL DISCLAIMERS ACCORDION */}

      <div className="max-w-7xl mx-auto mt-10 p-6">
        <LegalDiscSend />
      </div>
    </div>
  );
};

export default SendMoney;
