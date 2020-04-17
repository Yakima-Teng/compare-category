const path = require('path')
const fse = require('fs-extra')
const chalk = require('chalk')
const glob = require('glob')

const log = (color, text) => console.log(chalk[color](text))
const logError = (text) => log('red', text)

// 判断是否存在指定的路径（可能是文件、也可能是目录）
const exists = (fileOrFolderPath) => fse.pathExistsSync(fileOrFolderPath)
const isFile = (fileOrFolderPath) => exists(fileOrFolderPath) && fse.statSync(fileOrFolderPath).isFile()
const isDir = (fileOrFolderPath) => exists(fileOrFolderPath) && fse.statSync(fileOrFolderPath).isDirectory()

const traverseFolderOrFile = async (folderOrFilePath, cb) => {
    try {
        const boolExists = fse.pathExists(folderOrFilePath)
    } catch (err) {
        throw err
    }
        .then
    if (isFile(folderOrFilePath)) {
        cb(folderOrFilePath)
        return
    }
    if (isDir(folderOrFilePath)) {

    }
}

module.exports = (sourceDir, targetDir) => {
    if (!/^\//.test(sourceDir)) {
        sourceDir = path.join(process.cwd(), sourceDir)
    }
    if (!/^\//.test(targetDir)) {
        targetDir = path.join(process.cwd(), targetDir)
    }
    if (!sourceDir) {
        logError('Source directory is not provided!')
        process.exit(1)
    }
    if (!targetDir) {
        logError('Target directory is not provided')
        process.exit(1)
    }
    if (!exists(sourceDir)) {
        logError(`Source path (${sourceDir}) is not existed, please check your input!`)
        process.exit(1)
    }
    if (!exists(targetDir)) {
        logError(`Target path (${targetDir}) is not existed, please check your input!`)
        process.exit(1)
    }

    const arrDiffs = []
    const subFoldersOrFiles = glob.sync(path.join(sourceDir, '*'))
    console.log(subFoldersOrFiles)
}
