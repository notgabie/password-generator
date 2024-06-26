import { JSX } from "solid-js";
import { password } from "../store";
import { getStrengthClass } from "./password";

export function PasswordStrength(): JSX.Element{
  return (
    <div class="bg-very-dark-grey flex justify-between items-center px-8 py-5">
      <span class="text-grey uppercase">Strength</span>
      <div class="flex gap-2 items-center">
        {password.generated && (
          <span class="uppercase heading-medium text-almost-white">
            {password.strength === 1 ? "Too Weak!" : password.strength === 2 ? "Weak" : password.strength === 3 ? "Medium" : "Strong"}
          </span>
        )}
        <div class="flex gap-2">
          {[0, 1, 2, 3].map((index) => (
            <div class={getStrengthClass(index, password.strength)}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
