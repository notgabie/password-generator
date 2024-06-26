import type { Component } from "solid-js";
import { TextField } from "./TextField";
import { UserSelections } from "./UserSelections";
import { IconArrowRight } from "./ui/icons";

export const PasswordGenerator: Component = () => {
  return (
    <section class="w-[98%] max-w-[540px] flex flex-col items-center gap-7">
      <TextField />
      <UserSelections />
    </section>
  );
};
