import { existsSync, readdirSync, statSync } from "fs";
import { join } from "path";

export const getExternal = (path: string): string[] => {
    let externalSet = new Set<string>()
    if (existsSync(path)) {
        readdirSync(path).forEach(function (file, index) {
            let curPath = join(path, file);
            if (statSync(curPath).isDirectory() && file.includes('assets')) {
                for (const f of readdirSync(curPath)) {
                    externalSet.add(`${file}/${f}`)
                }
            }
        });
    } else throw Error('md path not exist')
    return Array.from(externalSet)
}