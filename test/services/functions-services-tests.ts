import * as mocha from 'mocha';
import * as service from '../../api/services/functions-services';
import { expect } from 'chai';

describe('functions-services', () => {

  describe('isNullOrEmpty', () => {

    it('value is null - return true', () => {
      const result = service.isNullOrEmpty(null);
      expect(result).equal(true);
    });

    it('value is a - return false', () => {
      const result = service.isNullOrEmpty('a');
      expect(result).equal(false);
    });

    it('value is null - return true', () => {
      const result = service.isNullOrEmpty('');
      expect(result).equal(true);
    });

    it('value is null string - return false', () => {
      const result = service.isNullOrEmpty('null');
      expect(result).equal(false);
    });
  });

  describe('positiveDivisors', () => {
    it('0 - returns empty array', () => {
      const result = service.positiveDivisors(0);
      expect(result.length).equal(0);
    });

    it('60 - returns expected array', () => {
      const result = service.positiveDivisors(60);
      expect(result).eql([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60]);
    });

    it('42 - returns expected array', () => {
      const result = service.positiveDivisors(42);
      expect(result).eql([1, 2, 3, 6, 7, 14, 21, 42]);
    });
  });
  
  describe('getTriangleArea', () => {
    it('Invalid input params, negative values - throws error', () => {
      try {
        const result = service.getTriangleArea(-1, 10, 20);
      } catch (err) {
        expect(err).not.null;
      }
    })

    it('Invalid input params cannot make triangle - throws error', () => {
      try {
        const result = service.getTriangleArea(1, 10, 20);
      } catch (err) {
        expect(err).not.null;
      }
    })

    it('Valid Params - calculates area', () => {
      const result = service.getTriangleArea(3, 4, 5);
      expect(result).eql(6)
    })

    it('Valid Params - calculates area', () => {
      const result = service.getTriangleArea(5, 6, 7);
      expect(result).eql(14.696938456699069)
    })
  })

  describe('mostCommon', () => {
    it('get mostCommon - single Item', () => {
      const result = service.getMostCommon([2, 2, 1, 4, 2, 1]);
      expect(result).eql([2]);
    })
    
    it('get mostCommon - multiple Items', () => {
      const result = service.getMostCommon([5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4]);
      expect(result).eql([4, 5]);
    })

    it('get mostCommon - single Item', () => {
      const result = service.getMostCommon([1, 2, 3, 4, 5, 1, 6, 7]);
      expect(result).eql([1]);
    })
    
    it('get mostCommon - all items repeated same', () => {
      const result = service.getMostCommon([1, 2, 3, 4, 5, 6, 7]);
      expect(result).eql([1, 2, 3, 4, 5, 6, 7]);
    })
  });
})