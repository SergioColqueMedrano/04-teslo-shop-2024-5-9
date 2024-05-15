import prisma from "../lib/prisma";
import { initialData } from "./seed";


interface Abc {
    asd:String
}

async function main() {

    // 1 Borrar registros previos
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ])

    const { categories, products } = initialData;
    // Categorias
    const categoriesData = categories.map((name) => ({name}));
    
    await prisma.category.createMany({
        data: categoriesData
    });



    console.log('Seed ejecutado correctamente')
}

(() =>{
    if (process.env.NODE_ENV === 'production') return;

    main();
})(); 