"use client";

import { useActionState } from "react";

import smsLogin from "./actions";

import Input from "@/components/input";
import Button from "@/components/button";

const initialState = {
  token: false,
};

export default function SMSLogin() {
  const [state, action] = useActionState(smsLogin, initialState);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          type="text"
          name="phone"
          placeholder="Phone number"
          required
        />
        {state.token && (
          <Input
            type="number"
            name="token"
            key="token-input"
            placeholder="Verification code"
            required
            minLength={100000}
            maxLength={999999}
          />
        )}
        <Button text="Verify" />
      </form>
    </div>
  );
}
