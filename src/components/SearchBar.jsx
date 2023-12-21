import { useState } from "react"

export default ({onSearch})=>{
    const [inputValue, setInputValue] = useState('')
    return(
        <div id="searchbar">
            <input type="text" 
            value={inputValue}
            onChange={e=>{
                setInputValue(e.target.value)
            }}
            onKeyUp={e=> e.key=== "Enter" && onSearch(inputValue)}
            />
            <button
            onClick={()=>onSearch(inputValue)}
            >Find</button>
        </div>
    )
}