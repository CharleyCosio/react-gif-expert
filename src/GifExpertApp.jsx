import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //EVITAR DUPLICADOS
        if (categories.includes(newCategory)) return;
        //OPT 1
        setCategories([newCategory, ...categories])
        //OPT2
        // setCategories(cat=>[...cat,'valorant'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                //  onAddCategory={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* listado targetas */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
}
