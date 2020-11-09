import { Style } from "./enums";

export class Logger {
    static log(msg: String, style: Style): void {
        console.log(`%c${msg}`, `color:${style}`);
    }
}