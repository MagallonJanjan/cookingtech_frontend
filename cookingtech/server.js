const express = require('express');
const app = express();

app.use(express.static('./dist/cookingtech'));

app.get('', function(req, res) {
    res.sendFile('index.html', {root: 'dist/cookingtech/'}
  );
  });

  app.listen(process.env.PORT || 8080);