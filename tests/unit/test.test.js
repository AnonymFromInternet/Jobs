// Синтаксис vitest

import { describe, it, expect } from 'vitest';
import {testingFunction} from "./test";

describe('Testing tests', () => {
    it("adds two numbers", () => {
        expect(4 + 4).equals(8)
    })

    it("Returns odd or even", () => {
        expect(testingFunction(8)).equals('Even')
    })
});
