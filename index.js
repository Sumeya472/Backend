const fs = require('fs').promises;

async function readFiles() {
    const files = ['a.txt', 'b.txt', 'c.txt'];
    let totalChars = 0;

    try {
        const contents = await Promise.all(
            files.map(file => fs.readFile(file, 'utf8'))
        );

        for (let i = 0; i < files.length; i++) {
            console.log(`${files[i]} content:`);
            console.log(contents[i]);
            console.log(`Number of characters: ${contents[i].length}\n`);
            totalChars += contents[i].length;
        }

        console.log('--------------');
        console.log(`Total characters: ${totalChars}`);

    } catch (error) {
        console.error('Error reading files:', error.message);
    }
}

readFiles();