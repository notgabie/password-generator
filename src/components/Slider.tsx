import { JSX } from "solid-js";
import { password, setPassword } from "../store";

export function Slider(): JSX.Element{
  return (
    <div class="flex flex-col justify-between gap-3">
      <div class="flex justify-between items-center">
        <label class="" for="passwordLength">
          Character Length
        </label>
        <span class="text-neon-green heading-large">
          {password.selections.passwordLength}
        </span>
      </div>
      <input
        type="range"
        min="8"
        id="passwordLength"
        max="64"
        value="12"
        step="1"
        aria-valuemin={8}
        aria-valuemax={64}
        aria-valuenow={password.selections.passwordLength}
        class="w-full slider slider-progress"
        onChange={(e) =>
          setPassword("selections", (current) => ({
            ...current,
            passwordLength: parseInt(e.target.value),
          }))
        }
      />
    </div>
  );
}
