//prosses module is core module thattells abiut the currut nodejs proses informtions and allows us to control it
//No need to improt it its global module let us use it
console.log(process.env); //Gaint object that are avalable to the Node.js curruntltly

// Node_ENV Gets the current Node.js environment mode (like 'development' or 'production')
console.log(process.env.NODE_ENV);

//SHELL tells us the path of the shell progarmtaht node is running on
console.log(process.env.SHELL);

//Path gets teh program variables located on thata re excutable
console.log(process.env.PATH);

//PWD tel teh pash workig directory
console.log(process.env.PWD);

//User tells tehusername of the currunt runnuer
console.log(process.env.USER);

console.log(process.argv);