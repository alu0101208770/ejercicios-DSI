"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const ejercicio_2_1 = require("../src/ejercicio-2");
describe('performNichomachusClassification test', () => {
    it('performNichomachusClassification([6,28,12,24,8]) returns', () => {
        chai_1.expect(ejercicio_2_1.performNichomachusClassification([6, 28, 12, 24, 8])).to.be.equal();
    });
});
