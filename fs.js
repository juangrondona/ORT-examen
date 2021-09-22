const fs = require('fs')
let par = String(process.argv.slice(2))
let archivos = fs.readdirSync('files');
switch (par) {
    case 'count'
        console.log(`En la carpeta files hay ${archivos.length} archivos`)
        break
}