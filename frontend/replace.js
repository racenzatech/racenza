import fs from 'fs';
import path from 'path';

const dirs = [
  'c:/Users/Admin/Downloads/racenza/frontend/src/pages',
  'c:/Users/Admin/Downloads/racenza/frontend/src/components'
];

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('Racena')) {
        content = content.replace(/Racena/g, 'Racenza');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

dirs.forEach(replaceInDir);
console.log('Done!');
