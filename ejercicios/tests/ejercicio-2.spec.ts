import 'mocha';
import {expect} from 'chai';
import {performNichomachusClassification} from '../src/ejercicio-2';

describe ('performNichomachusClassification test', () => {
  it ('performNichomachusClassification([6,28,12,24,8]) returns', () => {
    expect(performNichomachusClassification([6,28,12,24,8])).to.be.equal([ 'perfecto', 'perfecto', 'abundante', 'abundante', 'deficiente' ]);
  });
});