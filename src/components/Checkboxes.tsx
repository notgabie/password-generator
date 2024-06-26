import { password, setPassword } from "../store";

const selections = [
  { name: "includeUppercase", label: "Include uppercase letters" },
  { name: "includeLowercase", label: "Include lowercase letters" },
  { name: "includeNumbers", label: "Include numbers" },
  { name: "includeSymbols", label: "Include symbols" },
];

export function Checkboxes() {
  const handleCheckboxChange = (e, name) => {
    setPassword("selections", (current) => ({
      ...current,
      [name]: e.target.checked,
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
    <div class="flex flex-col gap-3">
      {selections.map((selection) => (
        <div class="flex items-center gap-3">
          <input
            type="checkbox"
            class="custom-checkbox"
            onChange={(e) => handleCheckboxChange(e, selection.name)}
          />
          <label class="text-almost-white">{selection.label}</label>
        </div>
      ))}
    </div>
  );
}
