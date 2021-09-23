const fs = require('fs');
const { arch } = require('os');
let par = String(process.argv[2])
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
        let totalChar = 0
        archivos.forEach(txt => {
            let archivo = String(fs.readFileSync(`files/${txt}`))
            let cantChar = archivo.length;
            totalChar += cantChar
            fs.appendFileSync('summary.txt', `${txt} ${cantChar} chars \n`) 
        })
        fs.appendFileSync('summary.txt', `\n ${totalChar} chars \n`)
        break
    case 'search':
        let aBuscar = String(process.argv[3])
        archivos.forEach(txt => {
            let archivoTxt = String(fs.readFileSync(`files/${txt}`))
            
            if(archivoTxt.includes(aBuscar)){
                console.log(txt);
            }
        })
        break
    default:
        console.log(`El comando "${par}" no se reconoce. Los comandos validos son: count, size, length, search`)
        break
}