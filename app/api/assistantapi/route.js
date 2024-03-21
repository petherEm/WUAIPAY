import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export const POST = async (request, response) => {
  try {
    const { question } = await request.json();
    console.log(question);
    // Create the assistant
    const assistant = await openai.beta.assistants.create({
      name: "WUnderBot",
      instructions:
        "You are a knowledgeable assistant that provides quality information about Western Union service and you also have a deep knowledge about money transfer business. You will limit your answer to 4 sentences maximum.",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4-1106-preview",
    });

    // Create a thread
    const thread = await openai.beta.threads.create();

    // Create a message
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: `${question}`,
    });

    // Create a run
    await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant.id,
      instructions:
        "Please address the user as Dearest Customer. The user has a premium account.",
    });

    // List messages
    const messages = await openai.beta.threads.messages.list(thread.id);
    console.log(messages);

    return NextResponse.json({ messages });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
