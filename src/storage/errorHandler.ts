export class ErrorHandler {
    errorHandle: Error | Object | Array<string | Object>;
    status: number

    constructor(errorToHandle: any) {
        this.errorHandle = errorToHandle.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description;
        this.status = 400
    }

    showMessage() {
        return { status: 400, message: this.errorHandle };
    }
}