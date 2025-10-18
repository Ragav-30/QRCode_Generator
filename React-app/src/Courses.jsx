import PropTypes from "prop-types";
import { useState} from "react";
const defaultCourse = "HTML";

function Courses(props) {
console.log("Rendering Courses component...");
  const[count, setCount] = useState(0);

  if (!props.show) {
    return null;
  }

function bought(price){
  setCount(prev => {
const newValue = prev + 1;
console.log("Updated count:", newValue);
return newValue;
});

let confrm=  confirm("Are you sure you want to buy this course?");
    
if(confrm){
alert(`You have bought the course ${props.course} for price $${price}`);
}
else{
   alert("Purchase cancelled");
}
  
   
  }
  return (
    <div className="course">
      <img src={props.image} alt="Course" />
      <h3>{props.course}</h3>
      <p>{props.statement}</p>
      <button onClick={()=>bought(99)}>Buy Now</button>
      <button onClick={()=>props.delete(props.id)} id="del">Delete</button>
      <p>You bought it: {count} times!
        <span><br />{count>3?"Hot Product!!":""}</span></p>
    </div>
  );
}

Courses.defaultProps = {
  course: defaultCourse,
  statement: "This is a very good course",
  show: true,
};

Courses.propTypes = {
  course: PropTypes.string,
  statement: PropTypes.string,
  show: PropTypes.bool,
  image: PropTypes.string,
};

export default Courses;
