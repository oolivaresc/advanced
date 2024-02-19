import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async(element) => {

    console.log('demoComponent');
    const heroGenerator = getHeroGenerator();

    let isFinished = false;

    do{
        const {value, done} = await heroGenerator.next()
        isFinished = done;
        element.innerHTML = value;
        if(isFinished) break;
    }while(!isFinished)
    //Se envuelve entre parentesis el heroGenerator.next() para recorrer todos
    //!(await heroGenerator.next()).done
}

async function* getHeroGenerator(){
    for(const hero of heroes){
        await sleep();
        yield hero.name;
    }
    //Cancela la función generadora
    return 'No hay más';
}

const sleep = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve();
        }, 1000);
    });
}