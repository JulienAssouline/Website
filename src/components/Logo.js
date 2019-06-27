import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import "../styling/styles.css"
import {scaleLinear} from "d3-scale"
import {lineRadial, curveBasis} from "d3-shape"
import {csv} from "d3-fetch"



function Logo(props) {

  const w = 700,
        h = 400

  const margin = {
          top: 0,
          bottom: 40,
          left: 40,
          right: 40
        }

  const width = w - margin.left - margin.right;
  const height = h - margin.top - margin.bottom;

  const radians = scaleLinear()
      .range([-Math.PI / 2, Math.PI / 2]);

  const arc = lineRadial()
          .curve(curveBasis)
          .angle(function(d){ return radians(d); })


const data = [
  {
    from: 1,
    to: 2
  },
  {
    from: 2,
    to: 3
  },
  {
    from: 3,
    to: 4
  },
  {
    from: 1,
    to: 2
  },
  {
    from: 1,
    to: 2
  },
]

console.log(data)

  return (
    <div className = "logo-container">
      <svg className = "chart" width = {w} height = {h}>
        <g transform={`translate(${margin.left},${margin.top})`}>


        </g>
      </svg>
    </div>
    )
}

export default Logo