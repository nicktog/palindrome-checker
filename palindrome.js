function palindrome(str) {
  // Good luck!
  let forward = "";
  let reversed = "";
  for (let i = 0; i <= str.length; i++){
    let char = str[i];
    if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z'|| char >=1 && char <= 9) {
      forward += char.toLowerCase();
      reversed = char.toLowerCase() + reversed;
    }
  }
  if (forward == reversed) {return true}
  return false

}