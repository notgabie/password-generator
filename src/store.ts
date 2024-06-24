import { createStore } from "solid-js/store";

export const [password, setPassword] = createStore({
  password: "P4$5W0rD!",
  generated: false,
  copyStatus: null,
  strength: null,
  noSelections: false,
  selections: {
    passwordLength: 12,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
  },
});
