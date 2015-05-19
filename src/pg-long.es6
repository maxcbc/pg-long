import JDataView from 'jdataview';
import _ from 'lodash';
import dcodeIOLong from 'long';

/**
 * All possible chars for representing a number as a String
 */
const integerDigits = [
    '0', '1', '2', '3', '4', '5',
    '6', '7', '8', '9', 'a', 'b',
    'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
];

class Long extends dcodeIOLong {
  constructor (low, high, unsigned) {
    super(low, high, unsigned);
  }

  static toHexString (i) {
    return Long.toUnsignedString0(i, 4);
  }

  static toOctalString (i) {
    return Long.toUnsignedString0(i, 3);
  }

  static toBinaryString (i) {
    return Long.toUnsignedString0(i, 1);
  }

  static toBytes (i, pad) {
    let dv = new JDataView(8),
        bytes = [],
        j;

    dv.setInt32(0, i.getHighBits());
    dv.setInt32(4, i.getLowBits());

    for (j = 0; j < 8; j++) {
      bytes.push(dv.getUint8(j));
    }

    if (pad) {
      for (j = bytes.length; j < pad; ++j) {
        bytes.unshift(0);
      }
    }

    return bytes;
  }

  static fromBytes (bytes) {
    let dv = new JDataView(bytes),
        hi, lo;
    hi = dv.getInt32(0);
    lo = dv.getInt32(4);
    return Long.fromBits(lo, hi);
  }

  /**
   * Format a long (treated as unsigned) into a String.
   * @param val the value to format
   * @param shift the log2 of the base to format in (4 for hex, 3 for octal, 1 for binary)
   */
  static toUnsignedString0 (val, shift) {
    // assert shift > 0 && shift <=5 : "Illegal shift value";
    let mag = Long.fromNumber(64).subtract(Long.numberOfLeadingZeros(val)).toNumber(),
        chars = Math.round(Math.max(((mag + (shift - 1)) / shift), 1)),
        buf = new Array(chars);

    Long.formatUnsignedLong(val, shift, buf, 0, chars);
    return buf.join('');
  }

  /**
   * Format a long (treated as unsigned) into a character buffer.
   * @param val the unsigned long to format
   * @param shift the log2 of the base to format in (4 for hex, 3 for octal, 1 for binary)
   * @param buf the character buffer to write to
   * @param offset the offset in the destination buffer to start at
   * @param len the number of characters to write
   * @return the lowest character location used
   */
  static formatUnsignedLong (value, shift, buf, offset, len) {
    let charPos = len,
        radix = 1 << shift,
        mask = radix - 1,
        val = value;
    do {
      buf[offset + --charPos] = integerDigits[val.toNumber() & mask];
      val = val.shiftRightUnsigned(shift);
    } while (!val.equals(Long.ZERO) && charPos > 0);

    return charPos;
  }

  /**
   * Returns the number of zero bits preceding the highest-order
   * ("leftmost") one-bit in the two's complement binary representation
   * of the specified {@code long} value.  Returns 64 if the
   * specified value has no one-bits in its two's complement representation,
   * in other words if it is equal to zero.
   */
  static numberOfLeadingZeros (i) {
    if (i.equals(Long.ZERO)) {
      return 64;
    }
    let n = 1,
        x = i.shiftRightUnsigned(32);
    if (x.equals(Long.ZERO)) {
      n += 32;
      x = i;
    }
    if (x.shiftRightUnsigned(16).equals(Long.ZERO)) {
      n += 16;
      x = x.shiftLeft(16);
    }
    if (x.shiftRightUnsigned(24).equals(Long.ZERO)) {
      n += 8;
      x = x.shiftLeft(8);
    }
    if (x.shiftRightUnsigned(28).equals(Long.ZERO)) {
      n += 4;
      x = x.shiftLeft(4);
    }
    if (x.shiftRightUnsigned(30).equals(Long.ZERO)) {
      n += 2;
      x = x.shiftLeft(2);
    }
    return Long.fromNumber(n).subtract(x.shiftRightUnsigned(31));
  }

  static isLong (obj) {
    return !_.isUndefined(obj) && (obj instanceof Long || !_.isUndefined(obj.shiftRightUnsigned));
  }
}

export default Long;
