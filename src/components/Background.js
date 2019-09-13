import React, { useEffect, useState, useRef} from "react"
import d3 from "d3"

const createNodes = (numNodes, radius) => {
  let nodes = [],
  angle,
  x,
  y,
  i;

  const width = (radius * 2) + 50,
  height = (radius * 2) + 50;

  for (i=0; i<numNodes; i++) {
    angle = (i / (numNodes/2)) * Math.PI

    x = (radius * Math.cos(angle))
    y = (radius * Math.sin(angle))

    console.log(angle)
    nodes.push({"id": i, "x": x, "y": y})
  }
  // console.log(nodes)

  return nodes
}

var data = createNodes(100, 200)
var data2 = createNodes(80, 190)
var data3 = createNodes(80, 180)
var data4 = createNodes(80, 170)
var data5 = createNodes(80, 160)
var data6 = createNodes(80, 150)

let w = 900,
h = 900

function Background(props) {

  const [angle, setAngle] = useState(0)

  useEffect(() => {

  }, )

  console.log(data)

  let circles = data.map((d,i) => (
    <circle
      key = {i}
      r = {3}
      cx = {d.x}
      cy = {d.y}
      style = {{fill: "red"}}

    />
    ))

  let circles_2 = data2.map((d,i) => (
    <circle
      key = {i}
      r = {3}
      cx = {d.x}
      cy = {d.y}
      style = {{fill: "red"}}

    />
    ))

  let circles_3 = data3.map((d,i) => (
    <circle
      key = {i}
      r = {3}
      cx = {d.x}
      cy = {d.y}
      style = {{fill: "red"}}

    />
    ))
  let circles_4 = data4.map((d,i) => (
    <circle
      key = {i}
      r = {3}
      cx = {d.x}
      cy = {d.y}
      style = {{fill: "red"}}

    />
    ))
  let circles_5 = data5.map((d,i) => (
    <circle
      key = {i}
      r = {3}
      cx = {d.x}
      cy = {d.y}
      style = {{fill: "red"}}

    />
    ))
  let circles_6 = data6.map((d,i) => (
    <circle
      key = {i}
      r = {3}
      cx = {d.x}
      cy = {d.y}
      style = {{fill: "red"}}

    />
    ))



  return (
    <svg width = {w} height = {h}>
      <g transform =  {"translate(" + w/2 + "," + h/2 + ")"}>
        {circles}
        {circles_2}
        {circles_3}
        {circles_4}
        {circles_5}
        {circles_6}
      </g>
    </svg>
  )


}

export default Background
