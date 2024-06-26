import { JSX } from "solid-js";
import { password, setPassword } from "../store";

const selections = [
  { name: "includeUppercase", label: "Include uppercase letters" },
  { name: "includeLowercase", label: "Include lowercase letters" },
  { name: "includeNumbers", label: "Include numbers" },
  { name: "includeSymbols", label: "Include symbols" },
];

export function Checkboxes(): JSX.Element {
  const handleCheckboxChange = (
    e: Event & { currentTarget: HTMLInputElement },
    name: string
  ) => {
    setPassword("selections", (current) => ({
      ...current,
      [name]: (e.currentTarget as HTMLInputElement).checked,
    }));

    const {
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    } = password.selections;
    const noSelections =
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols;
    setPassword("noSelections", noSelections);
  };

  return (
    <div class="flex flex-col gap-5 mt-5">
      {selections.map((selection) => (
        <div class="flex items-center gap-6">
          <input
            role="checkbox"
            type="checkbox"
            id={selection.name}
            class="custom-checkbox"
            onChange={(e) => handleCheckboxChange(e, selection.name)}
          />
          <label class="text-almost-white" for={selection.name}>{selection.label}</label>
        </div>
      ))}
    </div>
  );
}
