"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textinput";
import React, { useState } from "react";
import sendP2PMoney from "../app/lib/actions/sendP2PMoney";

const SendMoney = () => {
  const [amount, setAmount] = useState(0);
  const [number, setNumber] = useState("");
  return (
    <div className="flex justify-center items-center w-full">
      <Card title="Add Money">
        <div className="w-full">
          <TextInput
            label={"Amount"}
            placeholder={"Amount"}
            onChange={(value) => {
              setAmount(Number(value));
            }}
          />
          <TextInput
            label={"Number"}
            placeholder={"Number"}
            onChange={(value) => {
              setNumber(value);
            }}
          />

          <div className="flex justify-center pt-4">
            <Button
              onClick={async () => {
                await sendP2PMoney(amount * 100, number);
              }}
            >
              Send Money
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SendMoney;
