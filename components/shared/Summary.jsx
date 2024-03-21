import React from "react";

import { usePayStore } from "@/store/PayStore";

const Summary = ({ rates, currency }) => {
  const [
    fundsInAmount,
    setFundsInAmount,
    fundsIn,
    fundsOut,
    country,
    setCountry,
    setFundsIn,
    setFundsOut,
    fee,
    setFee,
    banner,
    setBanner,
    bonusAmount,
    setBonusAmount,
    deliveryTime,
    setDeliveryTime,
  ] = usePayStore((state) => [
    state.fundsInAmount,
    state.setFundsInAmount,
    state.fundsIn,
    state.fundsOut,
    state.country,
    state.setCountry,
    state.setFundsIn,
    state.setFundsOut,
    state.fee,
    state.setFee,
    state.banner,
    state.setBanner,
    state.bonusAmount,
    state.setBonusAmount,
    state.deliveryTime,
    state.setDeliveryTime,
  ]);

  return (
    <div>
      {/* RIGHT SIDE --------- SUMMARY */}
      <div className="bg-blue-100 p-4 w-[350px] md:max-w-[400px]">
        <h1 className="text-xl">Summary</h1>
        <div className="mt-4">
          <h1 className="text-[12px]">Exchange Rate</h1>
          <hr className="h-[2px] bg-gray-500" />
          <div className="flex justify-end">
            <p>
              1.00 EUR = {rates} {currency}
            </p>
          </div>
        </div>
        <hr className="mt-8 h-[2px] bg-gray-500" />
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Transfer Amount</h1>
          <p>{fundsInAmount || "0"} EUR</p>
        </div>
        <div className="relative flex items-center justify-between">
          <h1 className="text-[12px]">Transfer fee</h1>
          <p className={`${fee === 0 ? "bg-[#fbd721] p-1" : ""} `}>
            {" "}
            {fundsInAmount ? fee : "0"} EUR
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Transfer total</h1>
          <p>
            {" "}
            {(fundsInAmount ? Number(fundsInAmount) + Number(fee) : 0).toFixed(
              2
            )}{" "}
            EUR
          </p>
        </div>
        <hr className="mt-8 h-[2px] bg-gray-500" />
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Receiver gets:</h1>
          <p>
            {(Math.round(fundsInAmount * rates * 100) / 100).toFixed(2)}{" "}
            {currency}
          </p>
        </div>
        {bonusAmount >= 1 &&
          (country === "pl" || country === "ro") &&
          fundsOut === "Ecosystem" && (
            <div className="relative mt-2 mb-2 bg-[#fbd721] p-1 flex items-center justify-between">
              <h1 className="text-[12px] ">WU Wallet Bonus</h1>
              <p className="">
                {" "}
                {bonusAmount} {currency}
              </p>
            </div>
          )}

        <div className=" p-1 flex items-center justify-between">
          <h1 className="text-[12px] font-bold">Total Receiver gets:</h1>
          <p className="font-bold">
            {(country === "PL" || country === "RO") && fundsOut === "Ecosystem"
              ? (
                  Math.round(fundsInAmount * rates * 100) / 100 +
                  bonusAmount
                ).toFixed(2)
              : (Math.round(fundsInAmount * rates * 100) / 100).toFixed(2)}{" "}
            {currency}
          </p>
        </div>

        <hr className="mt-10 h-[2px] bg-gray-500" />
        <div className="relative flex items-center justify-between">
          <h1 className="text-[12px]">Delivery time:</h1>
          <p className="bg-[#fbd721] p-1">
            {fundsOut === "Ecosystem" || fundsOut === "Cash"
              ? "In Minutes"
              : "1-3 Business Days"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
