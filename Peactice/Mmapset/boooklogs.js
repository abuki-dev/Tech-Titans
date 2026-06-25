//fisrt cretae funtion tah acepts destructured dat of the students
//cretae empty maps and sets ste for boook mp for dept an name
//of eacch{detail:{name,departnment,booktitle}}
// at the set add unique books
//att the map chal=k if cyrrint dpartmnt key exists to creta e
//tehn get tehvalue the chek if it inclides currut name
//if no name push elese retur to next iterations
function trackLibraryActivity(logs) {
  const uniqueBooks = new Set();
  const depatrmentTracker = new Map();
  logs.forEach(({ detail: { name, department, bookTitle } }) => {
    uniqueBooks.add(bookTitle);
    if (!depatrmentTracker.has(department)) {
      depatrmentTracker.set(department, []);
    }
    if (!depatrmentTracker.get(department).includes(name)) {
      depatrmentTracker.get(department).push(name);
    }
  });
  return { uniqueBooks, depatrmentTracker };
}
const libraryLogs = [
  {
    id: 1,
    detail: {
      name: "Abuki",
      department: "Engineering",
      bookTitle: "Clean Code",
    },
  },
  {
    id: 2,
    detail: {
      name: "Alex",
      department: "Business",
      bookTitle: "The Lean Startup",
    },
  },
  {
    id: 3,
    detail: {
      name: "Abuki",
      department: "Engineering",
      bookTitle: "JavaScript: The Good Parts",
    },
  }, // Same student, different book!
  {
    id: 4,
    detail: {
      name: "Yonas",
      department: "Engineering",
      bookTitle: "Clean Code",
    },
  },
  {
    id: 5,
    detail: {
      name: "Alex",
      department: "Business",
      bookTitle: "The Lean Startup",
    },
  }, // Duplicate log entry!
];
let result = trackLibraryActivity(libraryLogs);
console.log(result);
