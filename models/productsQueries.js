function update() {
  return 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
}

function exclude() {
  return 'DELETE FROM StoreManager.products WHERE id = ?';
}

module.exports = { update, exclude };