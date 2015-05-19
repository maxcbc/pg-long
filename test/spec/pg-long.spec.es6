import Long from '../../src/pg-long';
import TEST_BITS from '../helper/test-bits';
import TEST_ADD_BITS from '../helper/test-add-bits';
import TEST_SUB_BITS from '../helper/test-sub-bits';
import TEST_MUL_BITS from '../helper/test-mul-bits';
import TEST_DIV_BITS from '../helper/test-div-bits';
import TEST_STRINGS from '../helper/test-strings';

// Interprets the given numbers as the bits of a 32-bit int.  In particular,
// this takes care of the 32-bit being interpreted as the sign.
function toInt32s (arr) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = arr[i] & 0xFFFFFFFF;
  }
}

toInt32s(TEST_BITS);
toInt32s(TEST_ADD_BITS);
toInt32s(TEST_SUB_BITS);
toInt32s(TEST_MUL_BITS);
toInt32s(TEST_DIV_BITS);

function createTestComparisons (i) {
  return () => {
    let vi = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
    for (let j = 0; j < TEST_BITS.length; j += 2) {
      let vj = Long.fromBits(TEST_BITS[j + 1], TEST_BITS[j]);
      expect(i === j).toEqual(vi.equals(vj));
      expect(i !== j).toEqual(vi.notEquals(vj));
      expect(i < j).toEqual(vi.lessThan(vj));
      expect(i <= j).toEqual(vi.lessThanOrEqual(vj));
      expect(i > j).toEqual(vi.greaterThan(vj));
      expect(i >= j).toEqual(vi.greaterThanOrEqual(vj));
    }
  };
}

function createTestBitOperations (i) {
  return () => {
    let vi = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
    expect(~TEST_BITS[i]).toEqual(vi.not().getHighBits());
    expect(~TEST_BITS[i + 1]).toEqual(vi.not().getLowBits());

    for (let j = 0; j < TEST_BITS.length; j += 2) {
      let vj = Long.fromBits(TEST_BITS[j + 1], TEST_BITS[j]);
      expect(TEST_BITS[i] & TEST_BITS[j]).toEqual(vi.and(vj).getHighBits());
      expect(TEST_BITS[i + 1] & TEST_BITS[j + 1]).toEqual(vi.and(vj).getLowBits());
      expect(TEST_BITS[i] | TEST_BITS[j]).toEqual(vi.or(vj).getHighBits());
      expect(TEST_BITS[i + 1] | TEST_BITS[j + 1]).toEqual(vi.or(vj).getLowBits());
      expect(TEST_BITS[i] ^ TEST_BITS[j]).toEqual(vi.xor(vj).getHighBits());
      expect(TEST_BITS[i + 1] ^ TEST_BITS[j + 1]).toEqual(vi.xor(vj).getLowBits());
    }

    expect(TEST_BITS[i]).toEqual(vi.shiftLeft(0).getHighBits());
    expect(TEST_BITS[i + 1]).toEqual(vi.shiftLeft(0).getLowBits());
    expect(TEST_BITS[i]).toEqual(vi.shiftRight(0).getHighBits());
    expect(TEST_BITS[i + 1]).toEqual(vi.shiftRight(0).getLowBits());
    expect(TEST_BITS[i]).toEqual(vi.shiftRightUnsigned(0).getHighBits());
    expect(TEST_BITS[i + 1]).toEqual(vi.shiftRightUnsigned(0).getLowBits());

    for (let len = 1; len < 64; ++len) {
      if (len < 32) {
        expect((TEST_BITS[i] << len) | (TEST_BITS[i + 1] >>> (32 - len))).toEqual(vi.shiftLeft(len).getHighBits());
        expect(TEST_BITS[i + 1] << len).toEqual(vi.shiftLeft(len).getLowBits());

        expect(TEST_BITS[i] >> len).toEqual(vi.shiftRight(len).getHighBits());
        expect((TEST_BITS[i + 1] >>> len) | (TEST_BITS[i] << (32 - len))).toEqual(vi.shiftRight(len).getLowBits());

        expect(TEST_BITS[i] >>> len).toEqual(vi.shiftRightUnsigned(len).getHighBits());
        expect((TEST_BITS[i + 1] >>> len) | (TEST_BITS[i] << (32 - len)))
          .toEqual(vi.shiftRightUnsigned(len).getLowBits());
      } else {
        expect(TEST_BITS[i + 1] << (len - 32)).toEqual(vi.shiftLeft(len).getHighBits());
        expect(0).toEqual(vi.shiftLeft(len).getLowBits());

        expect(TEST_BITS[i] >= 0 ? 0 : -1).toEqual(vi.shiftRight(len).getHighBits());
        expect(TEST_BITS[i] >> (len - 32)).toEqual(vi.shiftRight(len).getLowBits());

        expect(0).toEqual(vi.shiftRightUnsigned(len).getHighBits());
        if (len === 32) {
          expect(TEST_BITS[i]).toEqual(vi.shiftRightUnsigned(len).getLowBits());
        } else {
          expect(TEST_BITS[i] >>> (len - 32)).toEqual(vi.shiftRightUnsigned(len).getLowBits());
        }
      }
    }

    expect(TEST_BITS[i]).toEqual(vi.shiftLeft(64).getHighBits());
    expect(TEST_BITS[i + 1]).toEqual(vi.shiftLeft(64).getLowBits());
    expect(TEST_BITS[i]).toEqual(vi.shiftRight(64).getHighBits());
    expect(TEST_BITS[i + 1]).toEqual(vi.shiftRight(64).getLowBits());
    expect(TEST_BITS[i]).toEqual(vi.shiftRightUnsigned(64).getHighBits());
    expect(TEST_BITS[i + 1]).toEqual(vi.shiftRightUnsigned(64).getLowBits());
  };
}

function createTestDivMod (i, c) {
  let count = c;
  return () => {
    let vi = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
    for (let j = 0; j < TEST_BITS.length; j += 2) {
      let vj = Long.fromBits(TEST_BITS[j + 1], TEST_BITS[j]);
      if (!vj.isZero()) {
        let divResult = vi.div(vj),
            modResult,
            combinedResult;
        expect(TEST_DIV_BITS[count++]).toEqual(divResult.getHighBits());
        expect(TEST_DIV_BITS[count++]).toEqual(divResult.getLowBits());

        modResult = vi.modulo(vj);
        combinedResult = divResult.multiply(vj).add(modResult);
        expect(vi.equals(combinedResult)).toBeTruthy();
      }
    }
  };
}

function createTestToFromString (i) {
  return () => {
    let vi = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]),
        str = vi.toString(10);
    expect(TEST_STRINGS[i / 2]).toEqual(str);
    expect(TEST_BITS[i]).toEqual(Long.fromString(str, 10).getHighBits());
    expect(TEST_BITS[i + 1]).toEqual(Long.fromString(str, 10).getLowBits());

    for (let radix = 2; radix <= 36; ++radix) {
      let result = vi.toString(radix);
      expect(TEST_BITS[i]).toEqual(Long.fromString(result, radix).getHighBits());
      expect(TEST_BITS[i + 1]).toEqual(Long.fromString(result, radix).getLowBits());
    }
  };
}

describe('Long', () => {
  let methods = ['fromInt', 'fromNumber', 'toHexString', 'toOctalString', 'toBinaryString'];

  methods.forEach((method) => {
    it('should define method ' + method, () => {
      expect(Long[method]).toBeDefined();
    });
  });

  it('should toHexString', () => {
    expect(Long.toHexString(Long.MAX_VALUE)).toEqual('7ffffffffffff000');
    expect(Long.toHexString(Long.MAX_UNSIGNED_VALUE)).toEqual('fffffffffffff000');
  });

  it('should toOctalString', () => {
    expect(Long.toOctalString(Long.MAX_VALUE)).toEqual('777777777777777770000');
  });

  it('should toBinaryString', () => {
    expect(Long.toBinaryString(Long.MAX_VALUE)).
      toEqual('111111111111111111111111111111111111111111111111111110000000000');
  });

  it('should get to/from bytes via bits', () => {
    let expected = Long.fromBits(-778288915, 1130952387),
        actual = Long.fromBytes(Long.toBytes(expected));
    expect(Long.toBytes(actual)).toEqual(Long.toBytes(expected));
    expect(actual.getHighBits()).toEqual(expected.getHighBits());
    expect(actual.getLowBits()).toEqual(expected.getLowBits());
    expect(actual.equals(expected)).toBeTruthy();
  });

  it('should to/from bytes unsigned', () => {
    let expected = Long.fromNumber(1024),
        actual = Long.fromBytes(Long.toBytes(expected));
    expect(Long.toBytes(actual)).toEqual(Long.toBytes(expected));
    expect(actual.getHighBits()).toEqual(expected.getHighBits());
    expect(actual.getLowBits()).toEqual(expected.getLowBits());
    expect(actual.equals(expected)).toBeTruthy();
  });

  it('should to/from bytes signed', () => {
    let expected = Long.fromNumber(-8078141297006908891),
        actual = Long.fromBytes(Long.toBytes(expected));
    expect(Long.toBytes(actual)).toEqual(Long.toBytes(expected));
    expect(actual.getHighBits()).toEqual(expected.getHighBits());
    expect(actual.getLowBits()).toEqual(expected.getLowBits());
    expect(actual.equals(expected)).toBeTruthy();
  });

  it('should to/from bits', () => {
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      let val = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
      expect(TEST_BITS[i]).toEqual(val.getHighBits());
      expect(TEST_BITS[i + 1]).toEqual(val.getLowBits());
    }
  });

  it('should to/from int', () => {
    for (let i = 0; i < TEST_BITS.length; i += 1) {
      let val = Long.fromInt(TEST_BITS[i]);
      expect(TEST_BITS[i]).toEqual(val.toInt());
    }
  });

  it('should to/from number', () => {
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      let num = TEST_BITS[i] * Math.pow(2, 32) +
          TEST_BITS[i + 1] >= 0 ? TEST_BITS[i + 1] : Math.pow(2, 32) + TEST_BITS[i + 1],
          val = Long.fromNumber(num);
      expect(num).toEqual(val.toNumber());
    }
  });

  it('should handle zero', () => {
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      let val = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
      expect(TEST_BITS[i] === 0 && TEST_BITS[i + 1] === 0).toEqual(val.isZero());
    }
  });

  it('should handle negative', () => {
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      let val = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
      expect((TEST_BITS[i] >> 31) !== 0).toEqual(val.isNegative());
    }
  });

  it('should handle odd', () => {
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      let val = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
      expect((TEST_BITS[i + 1] & 1) !== 0).toEqual(val.isOdd());
    }
  });

  it('should handle odd', () => {
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      let val = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
      expect((TEST_BITS[i + 1] & 1) !== 0).toEqual(val.isOdd());
    }
  });

  it('should handle comparisons', () => {
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      createTestComparisons(i).call();
    }
  });

  it('should handle bit operations', () => {
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      createTestBitOperations(i).call();
    }
  });

  it('should handle negation', () => {
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      let vi = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
      if (TEST_BITS[i + 1] === 0) {
        expect((~TEST_BITS[i] + 1)|0).toEqual(vi.negate().getHighBits());
        expect(0).toEqual(vi.negate().getLowBits());
      } else {
        expect(~TEST_BITS[i]).toEqual(vi.negate().getHighBits());
        expect((~TEST_BITS[i + 1] + 1)|0).toEqual(vi.negate().getLowBits());
      }
    }
  });

  it('should handle add', () => {
    let count = 0;
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      let vi = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
      for (let j = 0; j < i; j += 2) {
        let vj = Long.fromBits(TEST_BITS[j + 1], TEST_BITS[j]),
            result = vi.add(vj);
        expect(TEST_ADD_BITS[count++]).toEqual(result.getHighBits());
        expect(TEST_ADD_BITS[count++]).toEqual(result.getLowBits());
      }
    }
  });

  it('should handle subtract', () => {
    let count = 0;
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      let vi = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
      for (let j = 0; j < TEST_BITS.length; j += 2) {
        let vj = Long.fromBits(TEST_BITS[j + 1], TEST_BITS[j]),
            result = vi.subtract(vj);
        expect(TEST_SUB_BITS[count++]).toEqual(result.getHighBits());
        expect(TEST_SUB_BITS[count++]).toEqual(result.getLowBits());
      }
    }
  });

  it('should handle multiply', () => {
    let count = 0;
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      let vi = Long.fromBits(TEST_BITS[i + 1], TEST_BITS[i]);
      for (let j = 0; j < i; j += 2) {
        let vj = Long.fromBits(TEST_BITS[j + 1], TEST_BITS[j]),
            result = vi.multiply(vj);
        expect(TEST_MUL_BITS[count++]).toEqual(result.getHighBits());
        expect(TEST_MUL_BITS[count++]).toEqual(result.getLowBits());
      }
    }
  });

  it('should handle divide', () => {
    let countPerDivModCall = 0,
        countDivMod;
    for (let j = 0; j < TEST_BITS.length; j += 2) {
      let vj = Long.fromBits(TEST_BITS[j + 1], TEST_BITS[j]);
      if (!vj.isZero()) {
        countPerDivModCall += 2;
      }
    }

    countDivMod = 0;
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      createTestDivMod(i, countDivMod).call();
      countDivMod += countPerDivModCall;
    }
  });

  it('should to/from string', () => {
    for (let i = 0; i < TEST_BITS.length; i += 2) {
      createTestToFromString(i).call();
    }
  });
});
