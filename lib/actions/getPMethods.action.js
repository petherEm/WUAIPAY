"use server";

import { NextResponse } from "next/server";
import axios from "axios";

export const getPaymentMethods = async () => {
  const posId = process.env.PRZELEWY24_POS_ID;
  const apiKey = process.env.PRZELEWY24_CRC_API_KEY;

  try {
    const response = await axios.get(
      "https://sandbox.przelewy24.pl/api/v1/payment/methods/pl?amount=150&currency=PLN",
      {
        auth: {
          username: posId,
          password: apiKey,
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.error({ error: "Internal Server Error" });
  }
};
