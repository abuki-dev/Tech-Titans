let container = document.getElementById("container");
const COLORS = ["green", "red", "white"];
 // 0: green (even), 1: red (odd), 2: white (prime)

// Generate numbers 1-100
for (let index = 1; index <= 100; index++) {
  let element = document.createElement("button");
  element.textContent = index;

  // 1. Separate even and odd styles
  if (index % 2 === 0) {
    element.classList.toggle(COLORS[0]); // Green background for even
  } else {
    element.classList.toggle(COLORS[1]); // Red background for odd
  }

  // 2. Check if the current number is prime
  let isprime = true;

  if (index === 2) {
    isprime = true; // 2 is prime
  } else if (index % 2 === 0) {
    isprime = false; // Even numbers greater than 2 are not prime
  } else {
    // Check odd numbers up to the square root
    let sqrt = Math.sqrt(index);
    for (let i = 3; i <= sqrt; i += 2) {
      if (index % i === 0) {
        isprime = false;
        break;
      }
    }
  }

  // 3. Apply prime style if applicable
  if (isprime) {
    element.classList.toggle(COLORS[2]); // White class list toggle for prime
  }

  container.append(element);
}
