import { NextResponse } from "next/server";
import crypto from "crypto";
import axios from "axios";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Function to calculate SHA-384 hash
function calculateSHA384(data) {
  const hash = crypto.createHash("sha384");
  hash.update(data);
  return hash.digest("hex");
}

// Define P24 class to mimic the behavior of the library
class P24 {
  constructor(posId, apiKey, crcKey, merchantId, options = { sandbox: true }) {
    this.posId = posId;
    this.apiKey = apiKey;
    this.crcKey = crcKey;
    this.merchantId = merchantId;
    this.options = options;
    this.client = axios.create({
      baseURL: "https://sandbox.przelewy24.pl/api/v1", // Update with proper base URL
      auth: {
        username: posId.toString(),
        password: apiKey,
      },
    });
  }

  // Method to create transaction
  async createTransaction(order) {
    try {
      const hashData = {
        sessionId: order.sessionId,
        merchantId: this.merchantId,
        amount: order.amount,
        currency: order.currency,
        crc: this.crcKey,
      };
      const sign = calculateSHA384(JSON.stringify(hashData));
      const orderData = {
        ...order,
        posId: this.posId,
        sign: sign,
      };
      const response = await this.client.post(
        "/transaction/register",
        orderData
      );
      console.log(response.data.data.token);
      return {
        token: response.data.data.token,
      };
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create transaction");
    }
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req) {
  const body = await req.json();

  const { randomSessionId, amount } = body;
  console.log(randomSessionId, amount);

  const merchantId = 213883;
  const posId = process.env.PRZELEWY24_POS_ID;
  const crcKey = process.env.PRZELEWY24_CRC_KEY;
  const apiKey = process.env.PRZELEWY24_CRC_API_KEY;

  if (req.method === "POST") {
    try {
      const p24 = new P24(posId, apiKey, crcKey, merchantId); // Create instance of P24 class

      // Create order object
      const order = {
        merchantId: merchantId,
        sessionId: "xxx12124",
        amount: amount * 100,
        currency: "PLN",
        description: "test order",
        email: "john.doe@example.com",
        channel: 8192,
        country: "PL",
        language: "pl",
        urlReturn: "http://localhost:3000",
        urlStatus: "http://localhost:3000",
        timeLimit: 20,
        encoding: "UTF-8",
      };

      // Create transaction using the library method
      const transactionResult = await p24.createTransaction(order);

      // Send the response back to the client
      return NextResponse.json(transactionResult, { headers: corsHeaders });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { headers: corsHeaders, status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { error: "Method Not Allowed" },
      { headers: corsHeaders, status: 405 }
    );
  }
}
