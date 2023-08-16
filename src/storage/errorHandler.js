export class ErrorHandler {
    constructor(errorToHandle) {
        this.errorHandle = errorToHandle.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description;
        this.status = 400;
    }
    showMessage() {
        return { status: 400, message: this.errorHandle };
    }
}
