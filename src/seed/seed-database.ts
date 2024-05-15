import { initialData } from "./seed";

interface Abc {
    asd:String
}

async function main() {

            
    console.log(initialData);





    console.log('Seed ejecutado correctamente')
}

(() =>{
    if (process.env.NODE_ENV === 'production') return;

    main();
})(); 