import {heroes} from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async(element) => {

    console.time('Start');

    //Dispara todas las promesas de manera simultanea
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]);

    element.innerHTML = `
        value1: ${value1} <br/>
        value2: ${value2} <br/>
        value3: ${value3} <br/>
    `;
    console.time('End');
}


const slowPromise = () => new Promise(resolve => {
    setTimeout(()=>{
        resolve('Slow Promise');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(()=>{
        resolve('Medium Promise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(()=>{
        resolve('Fast Promise');
    }, 1000);
});