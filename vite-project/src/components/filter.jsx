import React, { useState } from 'react';
function Filter() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return
  (
    <div class="Filter">
      <label>
        <input type="checkbox" checked={checked}
          onChange={handleChange} />

      </label>
    </div>

  )

}
export default Filter;