"use client"
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Email() {
  const [email, setemail] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setemail(value);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailRegex.test(value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit=()=>{
    if(!error && email.trim()!==''){
      window.location.href = 'https://app.loch.one/welcome';
    }
  }
  return (
    <div className="lg:w-5/12 pt-10 lg:pt-0 sm:w-full flex justify-center items-center px-26 pb-10">
      <div className="flex flex-col items-center justify-center h-full lg:w-full w-fit gap-10">
        <div className="text-zinc-400 text-2xl md:text-4xl font-medium leading-10">
          Sign up for exclusive access.
        </div>
        <TextField
          error={error}
          helperText={error ? "Invalid email address" : ""}
          value={email}
          onChange={handleChange}
          fullWidth
        />{" "}
        <div className="w-80 h-14 px-7 py-4 bg-zinc-900 rounded-lg border border-zinc-900 justify-center items-center gap-3 inline-flex">
          <button onClick={handleSubmit} className="text-center text-white text-base font-semibold leading-tight">
            Get started
          </button>
        </div>
        <div>You receive an email with an invite link to join.</div>
      </div>
    </div>
  );
}

export default Email;
