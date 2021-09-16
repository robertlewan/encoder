// Import encryptors functions
const encryptors = require('./encryptors.js');
const caesarCipher = encryptors.caesarCipher;
const caesarAmount = 3; 
const symbolCipher = encryptors.symbolCipher;
const reverseCipher = encryptors.reverseCipher;


const encodeMessage = (str) => {
  // Use the encryptor functions here.
  return reverseCipher(symbolCipher(caesarCipher(str, caesarAmount)));
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  return caesarCipher((symbolCipher(reverseCipher(str))), -caesarAmount);
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
