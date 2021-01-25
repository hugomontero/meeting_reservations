const { scheduleMeetingFile } = require("./utils/meeting-validations")

const { parseArgs } = require("./utils/params")

const [, , ...args] = process.argv

const main = (async (args) => {
 let pathArguments = parseArgs(args)
 await scheduleMeetingFile(pathArguments.path_file)
 console.log("end processing file")
})(args)
