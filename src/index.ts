function Log(target: any, key: string, descriptor: PropertyDescriptor) {

    const wrrappedMethod = descriptor.value;

    descriptor.value = function () {
        const args = JSON.parse(JSON.stringify(arguments));
        let log = `${(new Date()).toISOString()} [AutoLogger] [${target.constructor.name}] ${key} was called with ${arguments.length} arguments`;
        const wrrappedMethodResult = wrrappedMethod.apply(this, args);
        console.log(log);
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

    @Log
    public saySomething(something: string, somethingElse: string): string {
        return this.name + " " + this.surname + " says: " + something + " " + somethingElse;
    }
}

var p = new Person("remo", "jansen");
p.saySomething("I love playing", "halo");