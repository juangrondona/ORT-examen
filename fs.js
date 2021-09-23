const fs = require('fs')
let par = String(process.argv.slice(2))
let archivos = fs.readdirSync('files');
switch (par) {
    case 'count':
        console.log(`En la carpeta files hay ${archivos.length} archivos`)
        break
    case 'size':
        archivos.forEach(txt => {
            let stats = fs.statSync(`files/${txt}`)
            fs.appendFileSync('summary.txt', `${txt} ${stats.size} bytes \n`) 
        })        
        break
    case 'length':
        archivos.forEach(txt => {
            let archivo = String(fs.readFileSync(`files/${txt}`))
            let cantChar = archivo.length;
            fs.appendFileSync('summary.txt', `${txt} ${cantChar} chars \n`) 
        })
        break
}