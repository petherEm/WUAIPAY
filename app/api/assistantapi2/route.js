import { experimental_useAssistant as useAssistant } from "ai/react";
import OpenAI from "openai";

import { MessageContentText } from "openai/resources/beta/threads/messages/messages";
import { NextRequest } from "next/server";
import { z } from "zod";
import { zfd } from "zod-form-data";

const schema = zfd.formData({
  threadId: z.string().or(z.undefined()),
  message: zfd.text(),
  file: z.instanceof(Blob),
});

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const runtime = "edge";

export async function POST(req) {
  const input = await req.formData();

  const data = schema.parse(input);

  const file = new File([data.file], "file");
}
