import * as mocha from 'mocha';
import * as service from '../../api/services/utilities';
import { expect } from 'chai';

describe('utilities', () => {
  describe('startWith', () => {

    it('hang', () => {
      const result = 'hang the dj'.startsWithz('hang');
      expect(result).eql(true);
    })
    
    it('Hang', () => {
      const result = 'hang the dj'.startsWithz('Hang');
      expect(result).eql(false);
    })
    
    it('sentence not matching', () => {
      const result = 'hang the dj'.startsWithz('I’ve got a room for rent');
      expect(result).eql(false);
    })

    it('empty string', () => {
      const result = 'hang the dj'.startsWithz('');
      expect(result).eql(true);
    })

    it('hang the', () => {
      const result = 'hang the dj'.startsWithz('hang the');
      expect(result).eql(true);
    })

    it('han', () => {
      const result = 'hang the dj'.startsWithz('han');
      expect(result).eql(true);
    })

    it('hang t', () => {
      const result = 'hang the dj'.startsWithz('hang t');
      expect(result).eql(true);
    })

    it('not matching a number', () => {
      const result = 'hang the dj'.startsWithz('43');
      expect(result).eql(false);
    })

    it('not matching an object', () => {
      const obj = ({ first: 'Johnny' });
      const result = service.startWith('hang the dj', JSON.stringify(obj));
      expect(result).eql(false);
    })
  })

  describe('endsWith', () => {
    it('dj', () => {
      const result =  'hang the dj'.endsWithz('dj');
      expect(result).eql(true);
    })
    
    it('dj', () => {
      const result =  'hang the dj'.endsWithz('panic on the streets');
      expect(result).eql(false);
    })
    
    it('dj', () => {
      const result =  'hang the dj'.endsWithz('');
      expect(result).eql(true);
    })

    it('dj', () => {
      const result =  'hang the dj'.endsWithz('the dj');
      expect(result).eql(true);
    })

    it('dj', () => {
      const result =  'hang the dj'.endsWithz('e dj');
      expect(result).eql(true);
    })

    it('dj', () => {
      const result =  'hang the dj'.endsWithz('j');
      expect(result).eql(true);
    })

    it('dj', () => {
      const result =  'hang the dj'.endsWithz('42');
      expect(result).eql(false);
    })

    it('not matching an object', () => {
      const obj = ({ first: 'Johnny' });
      const result = 'hang the dj'.endsWithz(JSON.stringify(obj));
      expect(result).eql(false);
    })
  })
})