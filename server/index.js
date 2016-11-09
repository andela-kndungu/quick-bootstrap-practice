const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
const publicFolder = path.join(__dirname, '..', 'public');

app.use(express.static(publicFolder));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicFolder, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
