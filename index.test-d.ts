import {expectType} from 'tsd';
import matcher = require('.');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const options: matcher.Options = {};

expectType<string[]>(matcher(['foo', 'bar', 'moo'], ['*oo', '!foo']));
expectType<string[]>(matcher(['foo', 'bar', 'moo'], ['!*oo']));
expectType<string[]>(
	matcher(['foo', 'bar', 'moo'], ['!*oo'], {caseSensitive: true})
);

expectType<boolean>(matcher.isMatch('unicorn', 'uni*'));
expectType<boolean>(matcher.isMatch('UNICORN', 'UNI*', {caseSensitive: true}));
