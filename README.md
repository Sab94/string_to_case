Ported from https://github.com/ianstormtaylor/to-case
# string_to_case
[![Build Status](https://travis-ci.org/Sab94/string_to_case.svg?branch=master)](https://travis-ci.org/Sab94/string_to_case)

Convert string to different cases

## Usage

```typescript
import { toNoCase,
        toSpaceCase,
        toCamelCase,
        toCapitalCase,
        toSnakeCase,
        toDotCase,
        toConstantCase,
        toPascalCase,
        toSentenceCase,
        toTitleCase } from "https://raw.githubusercontent.com/Sab94/string_to_case/master/mod.ts";

const a = toNoCase('this is a string');
console.log(a) //result: 'this is a string'

const b = toSpaceCase('thisIsAString');
console.log(b) //result: 'this is a string'

const c = toCamelCase('this is a string');
console.log(c) //result: 'thisIsAString'

const d = toCapitalCase('this is a string');
console.log(d) //result: 'This Is A String'

const e = toSnakeCase('this is a string');
console.log(e) //result: 'this_is_a_string'

const f = toDotCase('this is a string');
console.log(f) //result: 'this.is.a.string'

const g = toPascalCase('this is a string');
console.log(g) //result: 'ThisIsAString'

const h = toSentenceCase('This is a string');
console.log(h) //result: 'ThisIsAString'

const i = toTitleCase('aCamelCaseOfString');
console.log(i) //result: 'A Camel Case of String'

```
## Tests

```
deno test.ts
````
## License

MIT
