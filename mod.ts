const hasSpace = /\s/;
const hasSeparator = /(_|-|\.|:)/;
const hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;
const separatorSplitter = /[\W_]+(.|$)/g;
const camelSplitter = /(.)([A-Z]+)/g;
const minors = [
    'a',
    'an',
    'and',
    'as',
    'at',
    'but',
    'by',
    'en',
    'for',
    'from',
    'how',
    'if',
    'in',
    'neither',
    'nor',
    'of',
    'on',
    'only',
    'onto',
    'out',
    'or',
    'per',
    'so',
    'than',
    'that',
    'the',
    'to',
    'until',
    'up',
    'upon',
    'v',
    'v.',
    'versus',
    'vs',
    'vs.',
    'via',
    'when',
    'with',
    'without',
    'yet'
];
const escaped = minors.map(escapeStringRegexp);
const minorMatcher = new RegExp('[^^]\\b(' + escaped.join('|') + ')\\b', 'ig');
const punctuationMatcher = /:\s*(\w)/g;

import { escapeStringRegexp } from "https://raw.githubusercontent.com/Sab94/escape-string-regexp/master/mod.ts";

export function toNoCase(string: string): string {
    if (hasSpace.test(string)) return string.toLowerCase();
    if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
    if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
    return string.toLowerCase();
}

function unseparate(string: string): string {
    return string.replace(separatorSplitter, function (m, next) {
        return next ? ' ' + next : '';
    })
}

function uncamelize(string: string): string {
    return string.replace(camelSplitter, function (m, previous, uppers) {
        return previous + ' ' + uppers.toLowerCase().split('').join(' ');
    })
}

export function toSpaceCase(string: string): string {
    return toNoCase(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
        return match ? ' ' + match : ''
    }).trim()
}

export function toCamelCase(string: string): string {
    return toSpaceCase(string).replace(/\s(\w)/g, function (matches, letter) {
        return letter.toUpperCase();
    })
}

export function toCapitalCase(string: string): string {
    return toSpaceCase(string).replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
        return previous + letter.toUpperCase();
    })
}

export function toSnakeCase(string: string): string {
    return toSpaceCase(string).replace(/\s/g, '_');
}

export function toDotCase(string: string): string {
    return toSpaceCase(string).replace(/\s/g, '.');
}

export function toConstantCase(string: string): string {
    return toSnakeCase(string).toUpperCase();
}

export function toPascalCase(string) {
    return toSpaceCase(string).replace(/(?:^|\s)(\w)/g, function (matches, letter) {
        return letter.toUpperCase();
    })
}

export function toSentenceCase(string) {
    return toNoCase(string).replace(/[a-z]/i, function (letter) {
        return letter.toUpperCase()
    }).trim()
}

export function toTitleCase(string) {
    return toSentenceCase(string)
        .replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
            return previous + letter.toUpperCase()
        })
        .replace(minorMatcher, function (minor) {
            return minor.toLowerCase()
        })
        .replace(punctuationMatcher, function (letter) {
            return letter.toUpperCase()
        })
}