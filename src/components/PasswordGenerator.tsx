import type { JSX } from "solid-js";
import { TextField } from "./TextField";
import { UserSelections } from "./UserSelections";

export function PasswordGenerator(): JSX.Element {
  return (
    <section class="w-[98%] max-w-[540px] flex flex-col items-center gap-7">
      <TextField />
      <UserSelections />
    </section>
  );
};
