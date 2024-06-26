import { JSX } from "solid-js";
import { password } from "../store";
import { copyToClipboard } from "./password";
import { IconCopy } from "./ui/icons";

export function TextField(): JSX.Element {
  return (
    <div class="container flex justify-between items-center p-7">
      <h2 class="heading-large max-w-[93%] overflow-x-auto whitespace-nowrap text-almost-white ">
        {password.password}
      </h2>
      <div
        class={`flex uppercase text-neon-green gap-3 transition-all ease-in-out duration-150`}
        role="alert"
      >
        {password.copyStatus === "success" && <span>Copied</span>}
        {password.copyStatus === "error" && <span>Error</span>}
        <button
          class="copy-button"
          onClick={() => copyToClipboard(password.password)}
        >
          <span class="sr-only">Copy to clipboard</span>
          <IconCopy />
        </button>
      </div>
    </div>
  );
}
