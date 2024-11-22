<<<<<<< HEAD
const fs = require('fs');
const path = "./Bíblia Sagrada-utf8.txt"
fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    getVerse(data, "GÊNESIS")
    var book = data.find(`»${book}`);
    // O conteúdo do arquivo está em data
    console.log(data);

    // Agora você pode processar o texto da Bíblia, por exemplo:
    const versiculos = data.split('\n');
    console.log('Número de versículos:', versiculos.length);
});


const getVerse = (text, book, chapter, verse) => {
    let livro = text.find(`»${book}`);
=======
const fs = require('fs');
const path = "./Bíblia Sagrada-utf8.txt"
fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    getVerse(data, "GÊNESIS")
    var book = data.find(`»${book}`);
    // O conteúdo do arquivo está em data
    console.log(data);

    // Agora você pode processar o texto da Bíblia, por exemplo:
    const versiculos = data.split('\n');
    console.log('Número de versículos:', versiculos.length);
});


const getVerse = (text, book, chapter, verse) => {
    let livro = text.find(`»${book}`);
>>>>>>> 60109d3 (First Init)
}