import React from 'react';
import { AiFillDelete } from "react-icons/ai";

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item">
      {props.children}
      <AiFillDelete className='icon' onClick={deleteHandler} />
    </li>
  );
};

export default CourseGoalItem;
