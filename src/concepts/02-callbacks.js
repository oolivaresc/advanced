import {heroes} from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    console.log('callbacksComponent');

    const id = '5d86371f1efebc31def272e2';

    findHero(id, (error, hero) => {
       //element.innerHTML = hero?.name || 'No hay heroe';
       if(error){
            element.innerHTML = error;
            return;
       }
       element.innerHTML = hero.name;
        //findHero(id2, (error, hero2) => {
        //if(error){
        //     element.innerHTML = error;
        //     return;
        //}
        //element.innerHTML = `${hero1.name} / ${hero2.name}`;
        //})
    });
}

/**
 * error?: String
 * error: String|Null
 * @param {String} id 
 * @param {(error: String|Null, hero: Object)=>void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero){
        callback(`Hero with id ${id} not found.`);
        return; //undefined
    }
    //Trabajo a destiempo en vez de return
    callback(null, hero);
}