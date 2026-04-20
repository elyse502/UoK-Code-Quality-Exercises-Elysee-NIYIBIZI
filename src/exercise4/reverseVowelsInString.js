/**
 * Reverse Vowels In A String - Strings, Fundamentals
 * 
 * In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters 
 * which are not vowels should remain in their original position. Here are some examples:
        "Hello!" => "Holle!"
        "Tomatoes" => "Temotaos"
        "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
 * For simplicity, you can treat the letter y as a consonant, not a vowel.
 *
 * @param {*} str
 * @returns
 */

export default function reverseVowels(str) {
  if (typeof str !== "string") return "";

  const vowels = "aeiouAEIOU";
  const chars = str.split("");

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    if (!vowels.includes(chars[left])) {
      left++;
      continue;
    }

    if (!vowels.includes(chars[right])) {
      right--;
      continue;
    }

    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join("");
}
