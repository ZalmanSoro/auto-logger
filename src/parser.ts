export class Parser {
    static parse(parameter: any): string {
        let parsedParameter;
        const parameterType = typeof parameter;
        switch (parameterType) {
            case 'string':
                parsedParameter = Parser.parseString(parameter);
                break;

            case 'number':
                parsedParameter = Parser.parseNumber(parameter);
                break;

            case 'undefined':
                parsedParameter = Parser.parseUndefined();
                break;

            case 'function':
                parsedParameter = Parser.parseFunction(parameter);
                break;

            case 'boolean':
                parsedParameter = Parser.parseBoolean(parameter);
                break;

            case 'object':
                parsedParameter = Parser.parseObject(parameter);
                break;
            default:
                parsedParameter = Parser.parseDefault(parameter);
                break;
        }
        return parsedParameter;
    }
    static parseObject(parameter: object): string {
        if (Array.isArray(parameter)) {
            return `${parameter.length} items: ${parameter.slice(0, 3)}...`
        }
        return `${parameter.constructor}`
    }
    static parseDefault(parameter: any) {
        return parameter;
    }
    static parseBoolean(parameter: boolean) {
        return `${parameter}`
    }
    static parseFunction(parameter: Function) {
        return `${parameter.name ?? 'anonymous'} function`
    }
    static parseUndefined() {
        return 'undefined';
    }
    static parseNumber(parameter: number) {
        return parameter.toString();
    }
    static parseString(parameter: string) {
        return `${parameter.slice(0, 30)}...`;
    }
}