// 1. fizzBuzz(n) — prints numbers 1 to n, replacing multiples of 3/5
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(5);
// 1, 2, Fizz, 4, Buzz

fizzBuzz(15);
// 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz


// 2. reverseString(str) — returns the string reversed
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("nairobi")); // "iborian"
console.log(reverseString("hello"));   // "olleh"


// 3. isPalindrome(str) — true if it reads the same forwards/backwards (case-insensitive)
function isPalindrome(str) {
  const cleaned = str.toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Nairobi")); // false


// 4. findLargest(arr) — returns the largest number in an array
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([10, 45, 2, 67, 23])); // 67
console.log(findLargest([-5, -1, -20]));       // -1


// 5. countVowels(str) — counts a, e, i, o, u (case-insensitive)
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("JavaScript")); // 3
console.log(countVowels("Nairobi"));    // 4

//TASK 2 //

const county1 = {
  name: "Nairobi",
  capital: "Nairobi City",
  population: 4397073,
  area: 696, // km²
  borders: ["Kiambu", "Machakos", "Kajiado"]
};

const county2 = {
  name: "Mombasa",
  capital: "Mombasa City",
  population: 1208333,
  area: 230, // km²
  borders: ["Kwale", "Kilifi"]
};

// 2. formatPopulation(num) — adds commas to a number
function formatPopulation(num) {
  return num.toLocaleString();
}

console.log(formatPopulation(4397073)); // "4,397,073"
console.log(formatPopulation(1208333)); // "1,208,333"

// 1. displayCounty(county) — formatted summary string
function displayCounty(county) {
  return `${county.name} County | Capital: ${county.capital} | Population: ${formatPopulation(county.population)} | Area: ${county.area} km²`;
}

console.log(displayCounty(county1));
// Nairobi County | Capital: Nairobi City | Population: 4,397,073 | Area: 696 km²

console.log(displayCounty(county2));
// Mombasa County | Capital: Mombasa City | Population: 1,208,333 | Area: 230 km²

// 3. bordersString(county) — lists borders with "and" before the last
function bordersString(county) {
  const borders = county.borders;

  if (borders.length === 1) {
    return `${county.name} borders ${borders[0]}`;
  }

  if (borders.length === 2) {
    return `${county.name} borders ${borders[0]} and ${borders[1]}`;
  }

  const allButLast = borders.slice(0, -1).join(", ");
  const last = borders[borders.length - 1];

  return `${county.name} borders ${allButLast}, and ${last}`;
}

console.log(bordersString(county1));
// Nairobi borders Kiambu, Machakos, and Kajiado

console.log(bordersString(county2));
// Mombasa borders Kwale and Kilifi


const routes = [
  { name: "Route 11 - Eastleigh", fare: 50, stops: ["CBD", "Pangani", "Eastleigh", "Mathare"] },
  { name: "Route 23 - Langata", fare: 80, stops: ["CBD", "Uhuru Gardens", "Langata", "Karen"] },
  { name: "Route 33 - Rongai", fare: 100, stops: ["CBD", "Langata", "Ongata Rongai", "Rimpa"] },
  { name: "Route 34 - South B", fare: 40, stops: ["CBD", "South B", "South C", "Nairobi West"] },
  { name: "Route 44 - Buruburu", fare: 50, stops: ["CBD", "Jogoo Road", "Hamza", "Buruburu"] },
  { name: "Route 46 - Donholm", fare: 60, stops: ["CBD", "Jogoo Road", "Donholm", "Kayole"] },
  { name: "Route 58 - Kikuyu", fare: 120, stops: ["CBD", "Westlands", "Kinoo", "Kikuyu"] },
  { name: "Route 100 - Githurai", fare: 70, stops: ["CBD", "Thika Road", "Roysambu", "Githurai"] },
  { name: "Route 125 - Thika", fare: 200, stops: ["CBD", "Thika Road", "Ruiru", "Juja", "Thika"] },
  { name: "Route 14 - Westlands", fare: 30, stops: ["CBD", "University Way", "Museum Hill", "Westlands"] }
];


// 1. Find the cheapest route
function cheapestRoute(routes) {
  return routes.reduce((cheapest, route) => {
    return route.fare < cheapest.fare ? route : cheapest;
  });
}


// 2. Find routes that pass through a specific stop
function routesThroughStop(routes, stop) {
  return routes.filter(route => route.stops.includes(stop));
}


// 3. Calculate the total fare for multiple routes
function journeyFare(routes, routeNames) {
  return routeNames.reduce((total, routeName) => {
    const route = routes.find(route => route.name === routeName);
    return total + (route ? route.fare : 0);
  }, 0);
}


// Test the functions

const cheapest = cheapestRoute(routes);
console.log(`Cheapest: ${cheapest.name} at KES ${cheapest.fare}`);

const westlandsRoutes = routesThroughStop(routes, "Westlands");
console.log(
  `Routes through Westlands: ${westlandsRoutes.map(route => route.name).join(", ")}`
);
const totalFare = journeyFare(routes, [
  "Route 14 - Westlands",
  "Route 58 - Kikuyu"
]);

console.log(`Journey fare (Westlands → Kikuyu): KES ${totalFare}`);