/* tslint:disable:no-console */

class Log {
    static d(...value: any) {
        console.log("  ", ...value);
    }
    static w(...value: any) {
        console.warn("  ", ...value);
    }

    static e(...value: any) {
        console.error("  ", ...value);
    }
}

export default Log;
