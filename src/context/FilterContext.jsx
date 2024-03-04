import { createContext, useContext, useState } from "react";
import { Categories } from "../data/categories";

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(Categories[0])
    const [selectedCity, setSelectedCity] = useState("ALL")
    const [minPrice , setMinPrice] = useState(0)
    const [maxPrice , setMaxPrice] = useState(null)
    return (
        <FilterContext.Provider value={{
            selectedCategory,
            setSelectedCategory,
            selectedCity,
            setSelectedCity,
            minPrice,
            setMinPrice,
            maxPrice,
            setMaxPrice
        }}>
            {children}
        </FilterContext.Provider>
    )
}
export const useSearch = () => useContext(FilterContext);
