// Reverses a string.
function reverse(string) {
	return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
	let processedContent = string.toLowerCase();
	return processedContent === reverse(processedContent);
}

console.log(reverse("🦊 🐶"));
console.log(reverse("This is a fox 🦊,and a dog 🐶"));
console.log("🦊 🐶");
console.log(palindrome("Madam, I'm Adam"));