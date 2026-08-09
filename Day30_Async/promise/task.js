function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" i did it here ");
    }, ms);
  });
}

delay(1000).then((rseult) => {
  console.log(rseult);
});
