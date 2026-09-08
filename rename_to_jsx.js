const fs = require('fs');
const path = require('path');

function renameFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      renameFilesInDirectory(fullPath);
    } else if (fullPath.endsWith('.js')) {
      const newPath = fullPath.replace(/\.js$/, '.jsx');
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${fullPath} -> ${newPath}`);
    }
  }
}

const srcDir = path.join(__dirname, 'src');
renameFilesInDirectory(srcDir);
console.log('Finished renaming all .js files to .jsx in the src/ directory!');
