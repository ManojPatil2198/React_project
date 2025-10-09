// what is checkbox in react js
// checkbox is an input element that allows the user to select one or more options from a set of choices
import { useState } from "react"; 

function CheckBoxes() {
  const [skills, setSkills] = useState([]); // store selected checkboxes

  const handleChange = (e) => {
    const { value, checked } = e.target;  

    if (checked) {
      // add selected value
      setSkills([...skills, value]);
    } else {
      // remove unselected value
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <div>
      <h3>Select Your CheckBoxes</h3>

      <input type="checkbox" id="PHP" value="PHP" onChange={handleChange} />
      <label htmlFor="PHP">PHP</label>
      <br />

      <input type="checkbox" id="JS" value="JS" onChange={handleChange} />
      <label htmlFor="JS">JS</label>
      <br />

      <input type="checkbox" id="REACT" value="REACT" onChange={handleChange} />
      <label htmlFor="REACT">REACT</label>
      <br />

      <h1>{skills.toString()}</h1>
    </div>
  );
}

export default CheckBoxes;
