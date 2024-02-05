import React, { useState } from 'react'

const categoriesData = [
    {            
                subtitles: "Groceries",
                items: [
                    {
                        subtitlesName: "Oils",
                        items: [
                            { name: "Sunflower Oil" },
                            { name: "Rice Bran Oil" },
                            { name: "Groundnut Oil" },
                        ],
                    },
                    {
                        subtitlesName: "Sugar",
                        items: [
                            { name: "brown sugar" },
                            { name: "black sugar" },
                            { name: "sugar free" },
                        ],
                    },
                    {
                        subtitlesName: "Dal",
                        items: [
                            { name: "Urad Dal" },
                            { name: "Moong Dal" },
                            { name: "Channa Dal" },
                        ],
                    },
                ],
            },
            { subtitles: "Clothes" },
            { subtitles: "Kitchen Items" },
        ];
    


export default function MultilevelDDL() {

    const [category,SetCategory]=useState('')
    const [subcategoryOptions,setSubcategoryOptions]= useState([])
    const [selectedSubcategory,setSelctdSubcatgry]=useState('')
    const [finaloptions,setFinaloptions]= useState([])

    const categorySelector=(e)=>{
      SetCategory(e.target.value)
     const subcategories= categoriesData.find(c=>c.subtitles===e.target.value)
    //  console.log(subcategories.items)
       if(subcategories&&subcategories.items){
         setSubcategoryOptions(subcategories.items)
       } else {
        setSubcategoryOptions([])
       }
    }
    const subcategoryselector=(e)=>{
       setSelctdSubcatgry(e.target.value)
       
       const individual= subcategoryOptions.find(i=>i.subtitlesName===e.target.value)
       console.log(individual)
       if(individual && individual.items){
        setFinaloptions(individual.items)
       }

    }
    // console.log(finaloptions)
    // console.log(selectedSubcategory)
    // console.log(subcategoryOptions,'subcategory')
// console.log(categoriesData.map(e=>{console.log(e.subtitles)})  )  
    return (
        <div>
        <select value={category} onChange={categorySelector}>
            <option>categories</option>
            {categoriesData.map(e=>
        <option>{e.subtitles}</option>
        )}
        </select>

        { category && 
        <select value={selectedSubcategory} onChange={subcategoryselector}>
            <option>select Subcategories</option>
            {subcategoryOptions.map(e=>
            <option>{e.subtitlesName}</option>)
            }
        </select>

        }
        {
            selectedSubcategory&&
            <select>
                <option>select</option>
                {finaloptions.map(e=>
                <option>{e.name}</option>

                )}
            </select>
        }
        
        </div>
    )
}
