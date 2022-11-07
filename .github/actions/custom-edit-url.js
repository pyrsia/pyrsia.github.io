const fs = require("fs")
const path = require("path")
const { argv } = require('node:process');

const getAllFiles = function (dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file))
        }
    })
    return arrayOfFiles
}

const prependFile = (file, text) => {
    const data = fs.readFileSync(file)
    const fd = fs.openSync(file, 'w+')
    const insert = Buffer.from(text)
    fs.writeSync(fd, insert, 0, insert.length, 0)
    fs.writeSync(fd, data, 0, data.length, insert.length)
    fs.close(fd, (err) => {
        if (err) throw err;
    });
}

const insertFile = (file, text, position) => {
    const data = fs.readFileSync(file)
    const fd = fs.openSync(file, 'w+')
    const insert = Buffer.from(text)

    fs.writeSync(fd, data, 0, position, 0)
    fs.writeSync(fd, insert, 0, insert.length, position)
    fs.writeSync(fd, data, position, data.length - position, position + insert.length)

    fs.close(fd, (err) => {
        if (err) throw err;
    });
}

// https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
const addFrontMatter = (file, field) => {
    const data = fs.readFileSync(file)
    if (!data.toString().startsWith('---'))
        prependFile(file, `---\n${field}\n---\n\n`)
    else
        insertFile(file, field + '\n', 4)
}


// Parse CLI
const dir = argv[2]
const repo = argv[3]
const branch = argv[4] || 'main'

const result = getAllFiles(dir).filter((value) => value.endsWith('.md') || value.endsWith('.mdx'))
for (const file of result) {
    const value = file.substring((dir + '/').length)
    console.log(value)
    addFrontMatter(file,
        `custom_edit_url: https://github.com/${repo}/blob/${branch}/${value}`
    )
}
