import path, { basename } from 'path'

// join two or more file
const fullpath=path.join('/path','index.py','file.java')
// console.log(fullpath)

// absolute path
const absolutepath=path.resolve()
// console.log(absolutepath)

// filedirectory
const directoryName=path.dirname('/main.java')
// console.log(directoryName)

// base path
const basepath=path.basename('/public/java/constructor.java')
// console.log(basename)

// extension
const extName=path.extname('arjit.mp3')
console.log(extName)