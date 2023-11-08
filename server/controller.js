const path = require('path');

module.exports = {
  loadPage: (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
  }
}