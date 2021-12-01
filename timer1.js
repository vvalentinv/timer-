const alarm = function() {
  const values = process.argv.slice(2);
  if (!values.length)
    return "no alarm set";
  for (const time of values) {
    if (!Number.isNaN(time) && time > 0) {
      setTimeout(() => process.stdout.write('\x07'), 1000 * time);
    }
  }
}

alarm();
