import {heroes} from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = (element) => {
    console.log('demoComponent');

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHero = (hero1, hero2) => {
        element.innerHTML = `${hero1.name}-${hero2.name}`;
    }

    const renderError = (error) => {
        element.innerHTML = `
        <h1>Error</h1>
        <h3>${error}</h3>
        `;
    }

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    let hero1;

    //!Forma 0
    //Buscar 1 heroe
    //findHero(id1)
        //.then(superHero => renderHero(superHero));
    //    .then(renderHero)
    //   .catch(renderError);

    //!Forma 3
    //Promise all
    //Se espera que ambas resuelvan la promesa
    //Si una da error, no se ejecuta nada
    //Se puede usar siempre y cuando las promesas no dependen entre ellas
    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then(([hero1, hero2]) => renderTwoHero(hero1, hero2))
    .catch(renderError);


    //!Forma2
    //Retornar promesa para hacer cadenas de then
    //findHero(id1)
    //    .then(hero => {
    //        hero1 = hero;
    //        return findHero(id2);
    //   }).then(hero2 => {
    //        renderTwoHero(hero1, hero2);
    //    })
    //    .catch(renderError);;

    //!Forma1
    //Promise hell, dificil de leer
    //findHero(id1)
    //    .then((hero1)=>{
    //        findHero(id2)
    //            .then((hero2)=>{
    //             renderTwoHero(hero1, hero2);
    //            })
    //            .catch(renderError);

    //   })
    //    .catch(renderError);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {
    return new Promise((resolve, reject)=>{
        const hero = heroes.find(hero => hero.id === id);

        if(hero){
            resolve(hero);
            return;
        }
        reject(`Hero with id ${id} not found`);
    });
}