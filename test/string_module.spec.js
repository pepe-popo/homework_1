import { myToLowerCase, fixSpaces, howManyWords} from "../task_1/string_module.js";
import assert from "assert";

describe("checking myToLowerCase", ()=>{
    it('tEsTsTrInG to lower case', ()=> {
        assert.equal(myToLowerCase("tEsTsTrInG"), "Teststring");
    })
})

describe("checking fixSpaces", ()=>{
    it('string correction', ()=> {
        assert.equal(fixSpaces(` Пример  строки   , тут много    лишних               пробелов . `),
         `Пример строки, тут много лишних пробелов.`);
    })
})

describe("how many words", ()=>{
    it('how many words', ()=> {
        assert.equal(howManyWords("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"),
         13);
    })

    it('how many words 2', ()=> {
        assert.equal(howManyWords("Текст, в котором слово текст несколько раз встречается и слово тоже"),
         11);
    })

    it('how many words 3', ()=> {
        assert.equal(howManyWords(" ,  !    . "),
         0);
    })
})


