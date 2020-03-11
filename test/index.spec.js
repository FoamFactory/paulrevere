import { expect } from 'chai';
import { PaulRevere } from '../src/index';

describe ('PaulRevere', () => {
  it ('should load the module', () => {
    expect(PaulRevere).to.not.be.null;
  });

  describe ('#getMessenger', () => {
    it ('should return an instance of PaulRevere', () => {
      let instance = PaulRevere.getMessenger();

      expect(instance).to.not.be.null;
    });
  });
});
