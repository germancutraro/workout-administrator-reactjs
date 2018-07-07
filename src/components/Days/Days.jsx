import React from 'react';
import Day from '../Day/Day';

const Days = (props) => {
  const days = props.days.map( (d, i) => <Day title={ d } key={ i } /> );

 return (
   <div>
     { days }
   </div>
 )
};

export default Days;