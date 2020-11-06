const myAwesomeValidator = require('../index');

const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

describe('Jest challenges', () => {
    it('should return the sum of a + b', () => {
        expect(add(6,4)).toBe(10);
        expect(add(5,4)).toBe(9);
        expect(add(17,3)).toBe(20);
    });

    it('should return the mul of a * b', () => {
        expect(mul(5,4)).toBe(20);
        expect(mul(9,15)).toBe(135);
        expect(mul(7,1)).toBe(7);
    });

    it('should return the subtraction of a - b', () => {
        expect(sub(10,5)).toBe(5);
        expect(sub(10,12)).toBe(-2);
        expect(sub(15,25)).toBe(-10);
    });

    it('should return the division of a / b', () => {
        expect(div(36,6)).toBe(6);
        expect(div(9,3)).toBe(3);
        expect(div(15,1)).toBe(15);
    });    

    it('should validate integers, strings and types on result ', () => {
        //Arrange 
        const users = [
            {
                id: 1,
                first_name: "Robert",
                last_name: "Schwartz",
                email: "rob23@gmail.com"
            },
            {
                id: 2,
                first_name: "Lucy",
                last_name: "Ballmer",
                email: "lucyb56@gmail.com"
            }
        ];
        const invalidUsers = [
            {
                id: 1,
                first_name: 12,
                last_name: "Schwartz",
                email: "rob23@gmail.com"
            }
        ];
        // Act
        const isDataValid = myAwesomeValidator(users);
        const isDataInvalid = myAwesomeValidator(invalidUsers);

        // Asserts        
        expect(isDataValid).toBe(true);
        expect(isDataInvalid).toBe(false);
    });
});

