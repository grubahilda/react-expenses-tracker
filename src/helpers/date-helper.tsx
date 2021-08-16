const separator: string = '-';

export class DateService {

    static today(): string {
        const dateObject = new Date();
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth();
        const day = dateObject.getDay();

        return `${day}-${month}-${year}`;
    }

    static todayAsDate(): Date {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), today.getDay());
    }

    static convertStringToDateObject(date: string): Date {
        const dateString = date.split(separator);
        console.log(date);
        
        let dateObject = {} as Date;

        if (dateString && dateString.length === 3) {
            dateObject = new Date(+dateString[2], +dateString[1] - 1, +dateString[0]);
            console.log(dateObject);
            console.log(dateString);
            
        }
        
        return dateObject;
    }
}