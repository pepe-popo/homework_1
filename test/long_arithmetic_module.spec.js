import { sum, subtraction, multiply, divide } from "../task_2/long_arithmetic_module.js";
import assert from 'assert';

describe('sum', () => {
    it("0 + 0 = 0", () => {
        assert.equal(sum('0', '0'), '0');
    })

    it("99 + 99 = 198", () => {
        assert.equal(sum('99', '99'), '198');
    })

    it("0 + 1 = 1", () => {
        assert.equal(sum('0', '1'), '1');
    })

    it("999999999999999999999999999999999999999998 + 1 = 999999999999999999999999999999999999999999", () => {
        assert.equal(sum('999999999999999999999999999999999999999998', '1'), '999999999999999999999999999999999999999999');
    })

    it("3424310124342614990014 + 234872389328989325789742343 = 234875813639113668404732357", () => {
        assert.equal(sum('3424310124342614990014', '234872389328989325789742343'), '234875813639113668404732357');
    })
})

describe('substraction', () => {
    it('0 - 0 = 0', () => {
        assert.equal(subtraction('0', '0'), '0')
    })

    it('1 - 1 = 0', () => {
        assert.equal(subtraction('1', '1'), '0')
    })

    it('234500052236800079 - 836489000345040 = 233663563236455039', () => {
        assert.equal(subtraction('234500052236800079', '836489000345040'), '233663563236455039')
    })

    it('100 - 1 = 99', () => {
        assert.equal(subtraction('100', '1'), '99')
    })

    it('10 - 1 = 9', () => {
        assert.equal(subtraction('10', '1'), '9')
    })

    it('111111 - 11111 = 100000', () => {
        assert.equal(subtraction('111111', '11111'), '100000')
    })

    it('1 - 10 = -9', () => {
        assert.equal(subtraction('1', '10'), '-9')
    })

    it('134534000000068785773400 - 14656765234645006790001000000 = -14656630700645006721215226600', () => {
        assert.equal(subtraction('134534000000068785773400', '14656765234645006790001000000'), '-14656630700645006721215226600')
    })

    it('0 - 1 = -1', () => {
        assert.equal(subtraction('0', '1'), '-1')
    })

    it('0 - 4776865261346346457658678675867867865734567 = -4776865261346346457658678675867867865734567', () => {
        assert.equal(subtraction('0', '4776865261346346457658678675867867865734567'), '-4776865261346346457658678675867867865734567')
    })
})

describe('multiply', () => {
    it("0 * 0 = 0", () => {
        assert.equal(multiply('0', '0'), '0');
    })

    it("0 * 123456 = 0", () => {
        assert.equal(multiply('0', '123456'), '0');
    })

    it("1 * 1 = 1", () => {
        assert.equal(multiply('1', '1'), '1');
    })

    it("1 * 12345 = 12345", () => {
        assert.equal(multiply('1', '12345'), '12345');
    })

    it("34243101243420014 * 2348729789742343 = 80427791983583653626941189452802", () => {
        assert.equal(multiply('34243101243420014', '2348729789742343'), '80427791983583653626941189452802');
    })
})

describe('divide', () => {
    it("123 / 0 = Infinity", () => {
        assert.equal(divide('123', '0'), 'Infinity');
    })

    it("0 / 123456 = 0", () => {
        assert.equal(divide('0', '123456'), '0');
    })

    it("123657235867978723445755 / 5 = 24731447173595744689151", () => {
        assert.equal(divide('123657235867978723445755', '5'), '24731447173595744689151');
    })

    it("99999999999999998 / 2 = 49999999999999999", () => {
        assert.equal(divide('99999999999999998', '2'), '49999999999999999');
    })

    it("123456 / 1 = 123456", () => {
        assert.equal(divide('123456', '1'), '123456');
    })

    it("99999999999999999999999999999999998 / 499999999999999999999999999992 = 200000", () => {
        assert.equal(divide('99999999999999999999999999999999999', '499999999999999999999999999999'), '200000');
    })
})

