const hasSpace = /\s/;
const hasSeparator = /(_|-|\.|:)/;
const hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;
const separatorSplitter = /[\W_]+(.|$)/g;
const camelSplitter = /(.)([A-Z]+)/g;

export function toNoCase(string: string): string {
    if (hasSpace.test(string)) return string.toLowerCase();
    if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
    if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
    return string.toLowerCase();
}

function unseparate(string: string): string {
    return string.replace(separatorSplitter, function (m, next) {
        return next ? ' ' + next : ''
    })
}

function uncamelize(string: string): string {
    return string.replace(camelSplitter, function (m, previous, uppers) {
        return previous + ' ' + uppers.toLowerCase().split('').join(' ')
    })
}

export function toSpaceCase(string: string): string {
    return toNoCase(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
        return match ? ' ' + match : ''
    }).trim()
}

export function toCamelCase(string: string): string {
    return toSpaceCase(string).replace(/\s(\w)/g, function (matches, letter) {
        return letter.toUpperCase()
    })
}

export function toCapitalCase(string) {
    return toSpaceCase(string).replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
        return previous + letter.toUpperCase()
    })
}

export function toSnakeCase(string) {
    return toSpaceCase(string).replace(/\s/g, '_')
}

export function toDotCase(string) {
    return toSpaceCase(string).replace(/\s/g, '.')
}