import { Parser } from "./parser";

describe('Test parameter parser selector', () =>{
    it('Should select string parser', () => {
        const parsedParameter = Parser.parse('a string');
        expect(parsedParameter).toEqual('a string...');
    });
    it('Should select array parser', () => {
        const testParameter = [1,2,3,4];
        const parsedParameter = Parser.parse(testParameter);
        expect(parsedParameter).toEqual(`4 items: 1,2,3...`);
    });
});

