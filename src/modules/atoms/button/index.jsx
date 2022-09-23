import React from "react";
import './masterBtn.css'

export default function Button({ title ,className}) {
  return <button className={`${className} master-btn`} >{title}</button>;
}
