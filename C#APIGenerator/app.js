const fs = require('fs');
const readline = require('readline');
const { generateApi } = require('./index');

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(`Erro ao ler o arquivo: ${err.message}`);
            } else {
                resolve(data);
            }
        });
    });
}

async function runApp() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Informe o caminho do arquivo de definições de classes: ', async (filePath) => {
        try {
            const fileContent = await readFile(filePath);

            generateApi(fileContent);

            console.log('API generated!');
        } catch (err) {
            console.error(`Error: ${err}`);
        } finally {
            rl.close();
        }
    });
}

runApp();