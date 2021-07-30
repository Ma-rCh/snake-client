
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  console.log('!!!'); 
  stdin.on("data", handleUserInput);
  // stdin.on('data', (key) => {
  //   process.stdout.write('.');
  //   if (key === '\u0003') {
  //     console.log(key); 
  //     process.exit();
  //    }
  // });
  stdin.resume();
  return stdin;
};
const handleUserInput = (key) => {
    //console.log(key); 
    if (key === '\u0003') {
     console.log(key); 
     process.exit();
    }
}
module.exports = { setupInput };