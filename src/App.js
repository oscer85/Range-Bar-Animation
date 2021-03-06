import * as React from "react";
import './App.css';

function IconAntennaBars5({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-antenna-bars-5" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line id="line1" x1={6} y1={18} x2={6} y2={15} />
    <line id="line2" x1={10} y1={18} x2={10} y2={12} />
    <line id="line3" x1={14} y1={18} x2={14} y2={9} />
    <line id="line4" x1={18} y1={18} x2={18} y2={6} /></svg>;
}

export default IconAntennaBars5;