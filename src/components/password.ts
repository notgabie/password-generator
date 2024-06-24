import { password, setPassword } from "../store";
import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";

export function generatePassword(): void {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const {
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols,
  } = password.selections;

  let allCharacters = "";
  let generatedPassword = "";

  if (includeLowercase) allCharacters += lowercase;
  if (includeUppercase) allCharacters += uppercase;
  if (includeNumbers) allCharacters += numbers;
  if (includeSymbols) allCharacters += symbols;

  if (!allCharacters) {
    console.error("No character sets selected for password generation.");
    setPassword("noSelections", true);
    return;
  }

  // Ensure the password contains at least one character from each selected set
  if (includeLowercase)
    generatedPassword += lowercase.charAt(
      Math.floor(Math.random() * lowercase.length)
    );
  if (includeUppercase)
    generatedPassword += uppercase.charAt(
      Math.floor(Math.random() * uppercase.length)
    );
  if (includeNumbers)
    generatedPassword += numbers.charAt(
      Math.floor(Math.random() * numbers.length)
    );
  if (includeSymbols)
    generatedPassword += symbols.charAt(
      Math.floor(Math.random() * symbols.length)
    );

  // Fill the rest of the password length with random characters from the pool
  for (let i = generatedPassword.length; i < passwordLength; i++) {
    generatedPassword += allCharacters.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
  }

  // Shuffle the generated password to avoid predictable patterns
  generatedPassword = generatedPassword
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  setPassword("password", generatedPassword);
  setPassword("generated", true);
  setPassword("noSelections", false);
  calculateStrength(generatedPassword);
}

export function copyToClipboard(password: string): void {
  try {
    navigator.clipboard.writeText(password);
    setPassword("copyStatus", "success");
    setTimeout(() => setPassword("copyStatus", null), 2000);
  } catch (err) {
    console.error(err);
    setPassword("copyStatus", "error");
    setTimeout(() => setPassword("copyStatus", null), 2000);
  }
}

export function calculateStrength(password: string): void {
  const result = zxcvbn(password);
  setPassword("strength", result.score);
}

export function getStrengthClass(index: number, strength: number): string {
  if (index < strength && password.generated) {
    switch (strength) {
      case 1:
        return index === 0 ? "strength-bar filled-weak" : "strength-bar blank";
      case 2:
        return index < 2 ? "strength-bar filled-weak2" : "strength-bar blank";
      case 3:
        return index < 3 ? "strength-bar filled-medium" : "strength-bar blank";
      case 4:
        return "strength-bar filled-strong";
      default:
        return "strength-bar blank";
    }
  }
  return "strength-bar blank";
}
