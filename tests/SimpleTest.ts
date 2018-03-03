import { Expect, Test, TestCase, TestFixture } from "alsatian";


import Simple from "../src/Simple";

@TestFixture('Simple Test')
export class SimpleTest {


    @Test('Testing add method')
    public testAdd() {
        let simple = new Simple();
        Expect(simple.add(1, 3)).toEqual(4);
    }
}