import { TextField } from "@mui/material";
import React from "react";

function Email() {
  return (
    <div className="lg:w-5/12 pt-10 lg:pt-0 sm:w-full flex justify-center items-center px-26 pb-10">
      <div className="flex flex-col items-center justify-center h-full lg:w-full w-fit gap-10">
        <div className="text-zinc-400 text-2xl md:text-4xl font-medium leading-10">
          Sign up for exclusive access.
        </div>

        <TextField fullWidth />
        <div className="w-80 h-14 px-7 py-4 bg-zinc-900 rounded-lg border border-zinc-900 justify-center items-center gap-3 inline-flex">
          <button className="text-center text-white text-base font-semibold leading-tight">
            Get started
          </button>
        </div>
        <div>You receive an email with an invite link to join.</div>
      </div>
    </div>
  );
}

export default Email;
