import { Style } from "./enums";
import { Logger } from "./logger";

function AutoLogger(target: any, key: string, descriptor: PropertyDescriptor) {

    const wrrappedMethod = descriptor.value;

    descriptor.value = function () {
        const prefix = () => `${(new Date()).toISOString()} [AutoLogger] [${target.constructor.name}] ${key}`;
        const argsLog = `${prefix()} was called with ${arguments.length} arguments`;
        const wrrappedMethodResult = wrrappedMethod.apply(this, arguments);
        const returnLog = `${prefix()} return with ${wrrappedMethodResult}`;
        Logger.log(argsLog, Style.Info);
        Logger.log(returnLog, Style.Info);
        return wrrappedMethodResult;
    };

    return descriptor;
}

class Person {

    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    @AutoLogger
    public saySomething(something: string, somethingElse: string): string {
        return this.name + " " + this.surname + " says: " + something + " " + somethingElse;
    }
}

var p = new Person("remo", "jansen");
p.saySomething("I love playing", "halo");