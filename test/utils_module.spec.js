import { parseString } from "../task_3/utils_module.js";
import assert from 'assert';

describe("parse string", () => {
    it('parse a string into an array of arrays of substrings', ()=> {
        assert.equal(JSON.stringify(parseString('name-contains-fd&price-=2&quantity->5&description-ends-abc')),
        JSON.stringify([['name', 'contains', 'fd'], ['price', '=', '2'], ['quantity', '>', '5'], ['description', 'ends', 'abc']]))
    })
})

