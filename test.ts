import { assert, test, runTests } from "https://deno.land/x/testing/mod.ts";
import { toNoCase,
        toSpaceCase,
        toCamelCase,
        toCapitalCase,
        toSnakeCase,
        toDotCase,
        toConstantCase,
        toPascalCase } from "./mod.ts";

test({name: "toNoCase", fn: () => {
        assert.equal(toNoCase('this is a string'), 'this is a string');
        assert.equal(toNoCase('thisIsAString'), 'this is a string');
        assert.equal(toNoCase('THIS_IS_A_STRING'), 'this is a string');
        assert.equal(toNoCase('UPPERCASE'), 'uppercase');
        assert.equal(toNoCase('lowercase'), 'lowercase');
        assert.equal(toNoCase('ThisIsAString'), 'this is a string');
        assert.equal(toNoCase('AStringIsThis'), 'a string is this');
        assert.equal(toNoCase('AString'), 'a string');
        assert.equal(toNoCase('this-is-a-string'), 'this is a string');
        assert.equal(toNoCase('This is a string.'), 'this is a string.');
        assert.equal(toNoCase('This: Is a String'), 'this: is a string');
        assert.equal(toNoCase('rAnDom -junk$__loL!'), 'random -junk$__lol!');
        assert.equal(toNoCase('$50,000,000'), '$50,000,000');
}});

test({name: "toSpaceCase", fn: () => {
        assert.equal(toSpaceCase('this is a string'), 'this is a string');
        assert.equal(toSpaceCase('thisIsAString'), 'this is a string');
        assert.equal(toSpaceCase('THIS_IS_A_STRING'), 'this is a string');
        assert.equal(toSpaceCase('this.is.a.string'), 'this is a string');
        assert.equal(toSpaceCase('ThisIsAString'), 'this is a string');
        assert.equal(toSpaceCase('This is a string'), 'this is a string');
        assert.equal(toSpaceCase('This is a string'), 'this is a string');
        assert.equal(toSpaceCase('This is a string'), 'this is a string');
        assert.equal(toSpaceCase('-this__is$%a-string...'), 'this is a string');
}});

test({name: "toCamelCase", fn: () => {
        assert.equal(toCamelCase('this is a string'), 'thisIsAString');
        assert.equal(toCamelCase('thisIsAString'), 'thisIsAString');
        assert.equal(toCamelCase('THIS_IS_A_STRING'), 'thisIsAString');
        assert.equal(toCamelCase('this.is.a.string'), 'thisIsAString');
        assert.equal(toCamelCase('ThisIsAString'), 'thisIsAString');
        assert.equal(toCamelCase('This is a string'), 'thisIsAString');
        assert.equal(toCamelCase('This is a string'), 'thisIsAString');
        assert.equal(toCamelCase('This is a string'), 'thisIsAString');
        assert.equal(toCamelCase('-this__is$%a-string...'), 'thisIsAString');
}});

test({name: "toCapitalCase", fn: () => {
        assert.equal(toCapitalCase('this is a string'), 'This Is A String');
        assert.equal(toCapitalCase('thisIsAString'), 'This Is A String');
        assert.equal(toCapitalCase('THIS_IS_A_STRING'), 'This Is A String');
        assert.equal(toCapitalCase('this.is.a.string'), 'This Is A String');
        assert.equal(toCapitalCase('ThisIsAString'), 'This Is A String');
        assert.equal(toCapitalCase('This is a string'), 'This Is A String');
        assert.equal(toCapitalCase('This is a string'), 'This Is A String');
        assert.equal(toCapitalCase('This is a string'), 'This Is A String');
        assert.equal(toCapitalCase('-this__is$%a-string...'), 'This Is A String');
}});

test({name: "toSnakeCase", fn: () => {
        assert.equal(toSnakeCase('this is a string'), 'this_is_a_string');
        assert.equal(toSnakeCase('thisIsAString'), 'this_is_a_string');
        assert.equal(toSnakeCase('THIS_IS_A_STRING'), 'this_is_a_string');
        assert.equal(toSnakeCase('this.is.a.string'), 'this_is_a_string');
        assert.equal(toSnakeCase('ThisIsAString'), 'this_is_a_string');
        assert.equal(toSnakeCase('This is a string'), 'this_is_a_string');
        assert.equal(toSnakeCase('This is a string'), 'this_is_a_string');
        assert.equal(toSnakeCase('This is a string'), 'this_is_a_string');
        assert.equal(toSnakeCase('-this__is$%a-string...'), 'this_is_a_string');
}});

test({name: "toDotCase", fn: () => {
        assert.equal(toDotCase('this is a string'), 'this.is.a.string');
        assert.equal(toDotCase('thisIsAString'), 'this.is.a.string');
        assert.equal(toDotCase('THIS_IS_A_STRING'), 'this.is.a.string');
        assert.equal(toDotCase('this.is.a.string'), 'this.is.a.string');
        assert.equal(toDotCase('ThisIsAString'), 'this.is.a.string');
        assert.equal(toDotCase('This is a string'), 'this.is.a.string');
        assert.equal(toDotCase('This is a string'), 'this.is.a.string');
        assert.equal(toDotCase('This is a string'), 'this.is.a.string');
        assert.equal(toDotCase('-this__is$%a-string...'), 'this.is.a.string');
}});

test({name: "toConstantCase", fn: () => {
        assert.equal(toConstantCase('this is a string'), 'THIS_IS_A_STRING');
        assert.equal(toConstantCase('thisIsAString'), 'THIS_IS_A_STRING');
        assert.equal(toConstantCase('THIS_IS_A_STRING'), 'THIS_IS_A_STRING');
        assert.equal(toConstantCase('this.is.a.string'), 'THIS_IS_A_STRING');
        assert.equal(toConstantCase('ThisIsAString'), 'THIS_IS_A_STRING');
        assert.equal(toConstantCase('This is a string'), 'THIS_IS_A_STRING');
        assert.equal(toConstantCase('This is a string'), 'THIS_IS_A_STRING');
        assert.equal(toConstantCase('This is a string'), 'THIS_IS_A_STRING');
        assert.equal(toConstantCase('-this__is$%a-string...'), 'THIS_IS_A_STRING');
}});

test({name: "toPascalCase", fn: () => {
        assert.equal(toPascalCase('this is a string'), 'ThisIsAString');
        assert.equal(toPascalCase('thisIsAString'), 'ThisIsAString');
        assert.equal(toPascalCase('THIS_IS_A_STRING'), 'ThisIsAString');
        assert.equal(toPascalCase('this.is.a.string'), 'ThisIsAString');
        assert.equal(toPascalCase('ThisIsAString'), 'ThisIsAString');
        assert.equal(toPascalCase('This is a string'), 'ThisIsAString');
        assert.equal(toPascalCase('This is a string'), 'ThisIsAString');
        assert.equal(toPascalCase('This is a string'), 'ThisIsAString');
        assert.equal(toPascalCase('-this__is$%a-string...'), 'ThisIsAString');
}});

runTests();