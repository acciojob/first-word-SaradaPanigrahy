function firstWord(s) {
  // your code here
	let ss=s.trim();
	cost arr=ss.split(" ");
	return arr[0];
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
