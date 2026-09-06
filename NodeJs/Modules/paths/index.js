//The path module it alows us to use files and directries paths
const path = require("path");
// __filename is the absolute path of the current file and __dirname is the absolute path of the directory containing the current file.
console.log(__dirname, 1); //global variables not included in path module
console.log(__filename); //from teh absolute path to the currunt file
//basename() shows the last part of the file  that we are working on
console.log(path.basename(__filename));

// extname() tells teh extention name for the file
console.log(path.extname("index.ts")); //.js that the currunt file funning on

//dirname() the directory name or currunt folder
console.log(path.dirname(__dirname)); //Path to teh currunt dirname

//Join joines pathes using / or \ in windows
console.log(path.join("src", "pacages", "assets")); //src\pacages\assets
//and aslo it fixes error pathes like // or \\ \/
console.log(path.join("folder1//", "/folder2//")); //folder1\folder2\

//resolve() resltive path created
console.log(path.resolve("assets", "folders")); //adds those folders

//parse() takes a directory or file and returns an object that contains the breakdown of its parts, such as the system root, its directory, extension, and the filename:

console.log(path.parse(__filename));
/*{
  root: 'c:\\',
  dir: 'c:\\Users\\DELL\\Documents\\Team\\NodeJs\\Modules\\paths',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}*/

//format beuild new directory with given format
const formatdirectpty = path.format({
  dir: "newdir\ab",
  name: "script",
  ext: ".js",
});
console.log(formatdirectpty);
