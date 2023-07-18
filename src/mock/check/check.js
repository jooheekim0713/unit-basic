function check(predicate, onSucess, onFail) {
  if (predicate()) {
    onSucess('yes');
  } else {
    onFail('no');
  }
}

module.exports = check;
