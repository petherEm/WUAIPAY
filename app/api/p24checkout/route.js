import { NextResponse } from "next/server";

import {
  P24,
  Order,
  Currency,
  Country,
  Language,
  NotificationRequest,
  Verification,
  Encoding,
} from "@ingameltd/node-przelewy24";
import { NextApiRequest, NextApiResponse } from "next";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const merchantId = 213883;
const posId = process.env.PRZELEWY24_POS_ID;
const crcKey = process.env.PRZELEWY24_CRC_KEY;
const apiKey = process.env.PRZELEWY24_CRC_API_KEY;
// Initialize P24 with your credentials and sandbox mode

const baseUrl = process.env.BASE_URL;

//@ts-ignore
const p24 = new P24(merchantId, posId, apiKey, crcKey, { sandbox: true });

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req) {
  const body = await req.json();

  const { randomSessionId, amount } = body;
  console.log(randomSessionId, amount);

  if (req.method === "POST") {
    try {
      const order = {
        sessionId: JSON.stringify(randomSessionId),
        amount: amount * 100,
        currency: Currency.PLN,
        description: "test order",
        email: "john.doe@example.com",
        country: Country.Poland,
        language: Language.PL,
        channel: Number(64),
        urlReturn: baseUrl + "/success",
        urlStatus: baseUrl,
        timeLimit: 20,
        encoding: Encoding.UTF8,
      };

      const transactionResult = await p24.createTransaction(order);

      console.log(transactionResult);
      console.log(order.sessionId);

      // Send the payment URL back to the client
      // res.status(200).json({ paymentUrl: transactionResult.link });

      return NextResponse.json(
        { paymentUrl: transactionResult.link },
        { headers: corsHeaders }
      );
    } catch (error) {
      console.error(error);
      // res.status(500).json({ error: "Internal Server Error" });
      return NextResponse.json(
        { error: "Internal Server Error" },
        { headers: corsHeaders }
      );
    }
  } else {
    // res.setHeader("Allow", "POST");
    // res.status(405).end("Method Not Allowed");

    return NextResponse.json(
      { error: "Method Not Allowed" },
      { headers: corsHeaders }
    );
  }
}
