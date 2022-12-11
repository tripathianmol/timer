let times = process.argv.slice(2);

for (let time of times) {
  let timeAsNum = Number.parseFloat(time);

  if (timeAsNum > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
  
}