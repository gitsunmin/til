import * as fs from 'fs';
import * as path from 'path';

function changeMdToMdx(dirPath: string): void {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            changeMdToMdx(fullPath);
        } else if (path.extname(file) === '.md') {
            const newFilePath = path.join(dirPath, path.basename(file, '.md') + '.mdx');
            fs.renameSync(fullPath, newFilePath);
            console.log(`Renamed: ${fullPath} -> ${newFilePath}`);
        }
    });
}

const targetDirectory = path.resolve(__dirname, '../../');
changeMdToMdx(targetDirectory);