import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CourseList() {

  let qntCourse = useSelector(state => state.qnt)


  const courses = useSelector(state => state.data.slice(0, qntCourse)
  )
  const dispatch = useDispatch()

  function addCourse() {
    qntCourse++
    console.log(qntCourse)
    dispatch({ type: 'ADD_COURSE', title: "Curso 0"+qntCourse, qnt: qntCourse})
    
  }

  return (
    <>
      <ul>
        {courses.map(course => <li key={course}>{course}</li>)}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  )
}
