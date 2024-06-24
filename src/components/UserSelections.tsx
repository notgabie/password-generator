import { createSignal } from "solid-js";
import { password, setPassword } from "../store";
import { PasswordStrength } from "./Strength";
import { generatePassword } from "./password";
import { Checkboxes } from "./ui/Checkboxes";
import { Slider } from "./ui/Slider";
import { IconArrowRight } from "./ui/icons";

export function UserSelections() {
  const [showError, setShowError] = createSignal(false);
  
  const handleGenerateClick = () => {
    const {
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols,
    } = password.selections;

    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      setPassword("noSelections", true);
      setShowError(true);
      setTimeout(() => {
        setPassword("noSelections", false);
        setShowError(false);
      }, 2000);
      return;
    }

    generatePassword();
  };

  return (
    <div class="container flex flex-col gap-3">
      <Slider />
      <Checkboxes />
      <PasswordStrength />
      <button
        class={`btn ${password.noSelections ? "flash" : ""}`}
        onClick={handleGenerateClick}
      >
        {password.noSelections ? (
          <span class="mx-auto" role="alert">Please make a selection!</span>
        ) : (
          <span class="flex mx-auto items-center gap-4">
            Generate <IconArrowRight />
          </span>
        )}
      </button>
    </div>
  );
}
