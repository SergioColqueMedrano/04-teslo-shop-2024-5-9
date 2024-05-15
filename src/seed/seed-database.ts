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

    // Productos

    const categoriesDB = await prisma.category.findMany();

    const categoriesMap = categoriesDB.reduce((map, category) =>{
        map[ category.name.toLowerCase() ] = category.id;
    
        return map;
    }, {} as Record<string, string>);

    console.log(categoriesMap);


    console.log('Seed ejecutado correctamente')
}

(() =>{
    if (process.env.NODE_ENV === 'production') return;

    main();
})(); 