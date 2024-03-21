"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePayStore } from "@/store/PayStore";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Summary from "@/components/shared/Summary";
import { Button } from "@/components/ui/button";
import LegalDiscSend from "@/components/shared/SendMoney/LegalDiscSend";
import BlikCodeInput from "@/components/shared/BlikCodeInput";

const selectBank = [
  {
    value: "ipko",
    label: "Płacę z iPKO",
    currency: "RON",
    logoPath: "/bankLogos/ipko.png",
  },
  {
    value: "mbank",
    label: "Płacę z mBank",
    currency: "UAH",
    logoPath: "/bankLogos/mbank.png",
  },
  {
    value: "millennium",
    label: "Płacę z Bank Millennium",
    currency: "UAH",
    logoPath: "/bankLogos/mill.jpeg",
  },
  {
    value: "pekao",
    label: "Płacę z Pekao SA",
    currency: "UAH",
    logoPath: "/bankLogos/pekao.png",
  },
  {
    value: "blik",
    label: "Płacę BLIKiem",
    currency: "UAH",
    logoPath: "/bankLogos/blik.jpeg",
  },
];

const fetchRates = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const PaymentPage = () => {
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

  useEffect(() => {
    fetchRates(
      `https://v6.exchangerate-api.com/v6/5f408f6dc33a575a92904c53/pair/EUR/${currency}`
    ).then((data) => {
      const conversion_rate = data.conversion_rate;
      console.log("conversion_rate", conversion_rate);
      setRates(conversion_rate);
    });
  }, [currency]);

  const onP24Checkout = async () => {
    try {
      fetch("/api/p24checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: fundsInAmount,
          randomSessionId: Math.floor(Math.random() * 1000000),
          /* Your order details */
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Redirect the user to the payment URL
          if (data.paymentUrl) {
            window.location.href = data.paymentUrl;
          } else {
            console.error("Payment URL not received");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle the error
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onP24methods = async () => {
    try {
      fetch("/api/p24methods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: fundsInAmount,
          randomSessionId: Math.floor(Math.random() * 1000000),
          /* Your order details */
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Redirect the user to the payment URL
          if (data.paymentUrl) {
            window.location.href = "https://www.ipko.pl/secure/ikd3/login.html";
          } else {
            console.error("Payment URL not received");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle the error
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelection = (value) => {
    console.log("value", value);
  };

  return (
    <div className="bg-gray-200 min-h-[3000px]">
      {/* YELLOW UPSELL BANNER */}
      <div
        className={`${
          !banner
            ? "hidden"
            : "bg-[#fbd721] border-0 border-red-500 h-24 flex items-center justify-center transition-all ease-in duration-300 w-full"
        }`}
      >
        <div className="flex flex-col">
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
          <div className="p-2 md:p-10 border-b-2 border-red-500">
            <div className="flex items-center justify-between">
              <h2 className="text-lg mb-3">
                <span className="font-bold">Option A</span> - Redirection - Pay
                with P24
              </h2>
              <Image src="/p24.png" width={120} height={200} alt="" />
            </div>

            <h2>Your total payment:</h2>
            <p>
              {" "}
              {(fundsInAmount
                ? Number(fundsInAmount) + Number(fee)
                : 0
              ).toFixed(2)}{" "}
              EUR
            </p>

            <Button
              className="mt-8 bg-blue-900/80 w-full py-6"
              onClick={onP24Checkout}
            >
              Proceed to Payment
            </Button>
          </div>
          <div className="p-2 md:p-10 border-b-2 border-red-500">
            <h2 className="text-lg mb-3">
              <span className="font-bold">Option B</span> - Embedded Pay with
              P24
            </h2>
            {/* SELECT PAYMENT PROVIDER */}
            <div>
              <Select onValueChange={handleSelection} defaultValue="ipko">
                <SelectTrigger className="w-full h-[50px]">
                  <SelectValue placeholder="Send To" />
                </SelectTrigger>
                <SelectContent>
                  {selectBank.map((bank) => (
                    <SelectItem key={bank.value} value={bank.value}>
                      <div className="flex items-center space-x-3">
                        <Image
                          src={bank.logoPath}
                          width={40}
                          height={40}
                          alt=""
                        />
                        <span>{bank.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <h2>Your total payment:</h2>
            <p>
              {" "}
              {(fundsInAmount
                ? Number(fundsInAmount) + Number(fee)
                : 0
              ).toFixed(2)}{" "}
              EUR
            </p>

            <Button
              className="mt-8 bg-blue-900/80 w-full py-6"
              onClick={onP24methods}
            >
              <Link href="https://www.ipko.pl/secure/ikd3/login.html">
                Proceed to Payment
              </Link>
            </Button>
          </div>
          <div className="p-2 md:p-10">
            <div className="flex items-center justify-between">
              <h2 className="text-lg mb-3">
                <span className="font-bold">Option C</span> - Pay with BLIK
              </h2>
              <Image src="/blik.jpeg" width={120} height={200} alt="" />
            </div>

            <h2>Your total payment:</h2>
            <p>
              {" "}
              {(fundsInAmount
                ? Number(fundsInAmount) + Number(fee)
                : 0
              ).toFixed(2)}{" "}
              EUR
            </p>

            <div className="">
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="mt-8 bg-blue-900/80 w-full py-6">
                    Pay with BLIK
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full flex flex-col items-center justify-center">
                  <BlikCodeInput />
                  <p className="text-sm mt-4">
                    Provide your BLIK code and confirm on your phone
                  </p>
                  <Button className="mt-8 bg-blue-600/80 w-full py-6">
                    <Link href="/success">Confirm</Link>
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
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

export default PaymentPage;
