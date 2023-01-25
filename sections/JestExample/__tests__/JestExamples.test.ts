import React from 'react';
// import '@testing-library/jest-dom'
// import { jest } from '@jest/globals';


import { getName } from '../examples';


describe('Jest Examples Test', () => {
  describe('getName', () => {
    it('Should return correct name', () => {
      const mock = { name: 'Joe'};

      const result = getName(mock);
      expect(result).toBeDefined();
    })
  })
})