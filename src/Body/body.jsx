import { Button } from "@mui/material";
import { useState } from "react";
import './body.module.css';

export default function Body(){
    const [color, setColor] = useState('primary');
  
    function handleClick() {
      setColor(color === 'primary' ? 'secondary' : 'primary');
    }

    return (
        <div className="body">
        <h1>React Material UI Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus unde dignissimos quis ducimus fugit, itaque inventore sequi suscipit quam. Magni minima sint voluptate tenetur fuga excepturi nihil mollitia assumenda commodi?</h1>
        <Button variant="contained" color={color} onClick={handleClick} title="Click to toggle button color">
          Click me
        </Button>
        </div>
    )
}