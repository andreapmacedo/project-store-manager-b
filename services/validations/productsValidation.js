function exists(value) {
  return (!value.length);
    // return value !== undefined && value !== null;
}

module.exports = { exists };