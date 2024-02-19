/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element) => {

    //console.log('generatorFunctionsComonent');
    //const myGenerator = myFirstGeneratorFunction();
    //console.log(myGenerator.next());
    //console.log(myGenerator.next());
    //console.log(myGenerator.next());
    //console.log(myGenerator.next());
    //console.log(myGenerator.next());
    //console.log(myGenerator.next());
    //const genId = idGenerator();
    //console.log(genId.next());
    //console.log(genId.next());
    //console.log(genId.next());
    //console.log(genId.next());
    const {value} = myFirstGeneratorFunction().next();
    console.log(value);

    const genId = idGenerator();
    const button = document.createElement('button');
    button.innerHTML = 'Click me';
    element.append(button);

    const renderButton = () => {
        const {value} = genId.next();
        button.innerHTML = `Click ${value}`;
    }

    button.addEventListener('click', renderButton);
}

function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction(){
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';
    yield 'Ya no pueden hacer nada';
}