import React,{useState} from "react";
function filter()
{
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
    return 
    (
    <label>
    <input type="checkbox" checked={checked}
    onChange={handleChange} />
    
    </label> 
    )
    
}