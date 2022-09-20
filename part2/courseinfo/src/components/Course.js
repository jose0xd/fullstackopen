import React from 'react'

const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <b>total of {sum} exercises</b>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <div>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </div>

const Course = ({course}) => {
  const total = course.parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total sum={total} />
    </div>
  )
}

export default Course