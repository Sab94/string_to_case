import { assert, test, runTests } from "https://deno.land/x/testing/mod.ts";
import { toNoCase } from "./mod.ts";

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
        assert.equal(toNoCase('rAnDom -junk$__loL!'), 'random -junk$__lol!');
}});

runTests();