var express   = require('express'),
    fs        = require('fs'),
   
    site      = express.createServer(),
    staticDir = express['static'];

module.exports = function(opts) {
  opts = opts || {};
  opts.port = opts.port || 4444;
  opts.baseDir = opts.baseDir || './';
  
  site.configure(function() {
    [ 'app', 'data', 'spec', 'vendor' ].forEach(function(dir) {
      site.use('/' + dir, staticDir(opts.baseDir + dir));
    });

    site.use(express.bodyParser());
  });

  site.get("/", function(req, res) {
    fs.createReadStream(opts.baseDir + 'specrunner.html').pipe(res);
  });

  site.listen(opts.port);

  fs.readFile(opts.baseDir + 'help.txt', 'utf-8', function(err, f) {
    console.log(f.replace('{{port}}', opts.port));
    console.log("\n\nServing at http://localhost:" + opts.port);
  });
};
