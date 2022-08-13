function update() {
  return 'UPDATE products SET name = ? WHERE id = ?';
}

module.exports = { update };