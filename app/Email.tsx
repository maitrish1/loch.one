import { TextField } from "@mui/material";
import React from "react";

function Email() {
  return (
    <div className="w-5/12 flex flex-col justify-start text-left items-center pt-60 px-26 gap-10">
      <div className="text-zinc-400 text-4xl font-medium leading-10">
        Sign up for exclusive access.
      </div>

      <TextField fullWidth />
      <div className="w-80 h-14 px-7 py-4 bg-zinc-900 rounded-lg border border-zinc-900 justify-center items-center gap-3 inline-flex">
        <button className="text-center text-white text-base font-semibold font-['Inter'] leading-tight">
            Get started
        </button>
      </div>
      <p>You&apos; receive an email with an invite link to join.</p>
    </div>
  );
}

export default Email;
