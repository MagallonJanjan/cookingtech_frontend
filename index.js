const express = require('express');
const app = express();

app.use(express.static('./dist/cooking-tech'));

app.get('', function(req, res) {
    res.sendFile('index.html', {root: 'dist/cooking-tech/'}
  );
  });

  app.listen(process.env.PORT || 8080);