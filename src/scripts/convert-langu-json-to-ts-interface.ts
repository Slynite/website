import { transform } from 'json-to-typescript'
import { readFile, } from 'fs/promises'
import { resolve } from 'path'
import { writeFileSync } from 'fs'

(async () => {
    const input = resolve('./dictionaries/en.json')
    const output = resolve('./src/types/i18n-types.ts')
    const content = JSON.parse(await readFile(input, { encoding: 'utf-8' }))
    writeFileSync(output, await transform("i18n", { ...content }))
})();