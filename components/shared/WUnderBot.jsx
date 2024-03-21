"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const WUnderBot = () => {
  const [answer, setAnswer] = useState("");
  const generateAssistantAnswer = async () => {
    const question = "What is WU Money Transfer?";
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/assistantapi2`,
        {
          method: "POST",
          body: JSON.stringify({ question }),
        }
      );

      const aiAnswer = await response.json();
      console.log(aiAnswer.messages.response);

      // const formattedAnswer = aiAnswer.reply.replace(/\n/g, "<br />");
      // console.log(formattedAnswer);
      // setAnswer(formattedAnswer);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#fbd721] h-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 space-x-4">
        <div className="flex-[50%]">
          <h1 className="text-3xl font-bold mb-6">
            Hi there, I am WUnder Bot :)
          </h1>
          <p className="text-xl mb-4">
            I am ready to answer any questions you may have <br /> on WU Money
            Transfers and Digital Banking
          </p>
          <Input />
          <Button className="w-full mt-2" onClick={generateAssistantAnswer}>
            Ask
          </Button>
        </div>
        <div className="flex-[50%] flex flex-col items-start">
          <div>{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default WUnderBot;
