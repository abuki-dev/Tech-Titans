//colect uniqe users emils and therir name side byside
//create funtion acept logs array
//teh for each {info:{ name ,email,techstac}}
//ad each email at the uniqe email set usig add
//at the map ad je tecstak as key tehne array of users

const registrationLogs = [
  {
    id: 1,
    info: { name: "Abuki", email: "abuki@uni.edu", techStack: "JavaScript" },
  },
  { id: 2, info: { name: "Alex", email: "alex@global.com", techStack: "C++" } },
  {
    id: 3,
    info: { name: "Abuki", email: "abuki@uni.edu", techStack: "JavaScript" },
  }, // Duplicate!
  {
    id: 4,
    info: { name: "Yonas", email: "yonas@tech.com", techStack: "JavaScript" },
  },
  { id: 5, info: { name: "Marta", email: "marta@code.org", techStack: "C++" } },
];

function processRegistrations(logs) {
  const uniqueEmails = new Set();
  const stackMap = new Map();

  logs.forEach(({ info: { name, email, techStack } }) => {
    uniqueEmails.add(email);
    if (!stackMap.has(techStack)) {
      stackMap.set(techStack, []);
    }
    const currentStackArray = stackMap.get(techStack);
    if (!currentStackArray.includes(name)) {
      currentStackArray.push(name);
    }
  });

  return { uniqueEmails, stackMap };
}
const result = processRegistrations(registrationLogs);
console.log(result.uniqueEmails.size);
console.log(result.stackMap.get("JavaScript"));
