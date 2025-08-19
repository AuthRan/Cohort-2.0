function greet() {
  console.log("hey how are you?");
  const end = Date.now();
  console.log(end - start);
}

const start = Date.now();

setTimeout(greet, 1 * 1000);
