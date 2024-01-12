const Practice = () => {
    let sales: number = 123_456_789;
    let course: string = "TypeScript";
    let is_published: boolean = true;
    let level: number;

    let user: [number, string] = [1, "Sample"];

    const enum Size {
            Small = 0,
            Medium,
            Large
    };

    let mySize: Size = Size.Large

    function render(level: number){
        console.log(level);
    }

    render(200);

    calculateTax(200);

    function calculateTax(income: number): number{
        if(income < 50_000)
            return income;
        return income;
    };

    type Employee = {
        id: number,
        name: string,
        retire: (date: Date) => void
    };

    let employee: Employee = {
        id: 1,
        name: "",
        retire: (date: Date) => {
            ""
        }
    };

    function kgToLbs(weight: number | string){ 
        if (typeof weight === 'number'){
            return weight * 2.2;
        }
        else{
            return parseInt(weight) * 2.2;
        }
    }

    type Draggable = {
        drag: () => void,
    };

    type Resizable = {
        resize: () => void
    };

    type UIWidget = Draggable & Resizable;

    let textBox: UIWidget = {
        drag: () => {},
        resize: () => {}
    };

    type Quantity = 50 | 100;

    let quantity: Quantity = 50;

    function greet(name: string){
        console.log(name.toUpperCase());
    };

    greet("Sample");

    return(
        <>
        </>
    )
}

export default Practice;