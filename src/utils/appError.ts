class AppError{
    message: string
    codeNumber: number

    constructor(message: string, codeNumber: number = 400){
        this.message = message
        this.codeNumber = codeNumber
    }
}

export {AppError}