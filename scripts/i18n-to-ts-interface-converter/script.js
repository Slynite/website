import { transform } from 'json-to-typescript'
import { readFile, } from 'fs/promises'
import { resolve } from 'path'
import { writeFileSync } from 'fs'

(async () => {
    const args = process.argv

    const inputFile = args[3]
    const outputFile = args[5]

    console.log("i18n to ts interface converter")
    console.log("------------------------------\n\n")

    if (!inputFile || !outputFile) {
        console.error(`❌ Missing input and/or output file.\nPlease set parameter using --input and --output \n\nExample: node scripts/i18n-to-ts-interface-converter/script.js --input ./i18n/en.json --output ./src/types/i18n-types.ts`)
        return
    }

    if (!inputFile.endsWith(".json")) {
        console.error(`❌ Input file '${inputFile}' must be a json file`)
        return
    }

    if (!outputFile.endsWith(".ts")) {
        console.error(`❌ Output file '${inputFile}' must be a typescript file`)
        return
    }

    console.log(`converting ${inputFile} to ${outputFile} ...`)

    try {
        const input = resolve(process.env.PWD + inputFile)
        const output = resolve(process.env.PWD + outputFile)
        const content = JSON.parse(await readFile(input, { encoding: 'utf-8' }))
        writeFileSync(output, await transform("i18n", { ...content }))
    } catch (error) {
        console.error(`❌ Something went wrong: ${error}`)
        return
    }
    console.log("done ✅")
})();