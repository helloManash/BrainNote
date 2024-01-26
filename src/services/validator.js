export class ValidatorService{
    static min(inputValue, min){
        if(inputValue.length < min){
            return `can't be less than ${min} characters`;
        }
    }

    static max(inputValue, max){
        if(inputValue.length > max){
            return `can't be more than ${max} characters`;
        }
    }

}