import React from 'react'
import { connect } from 'react-redux'
import { setEducation } from '../actions'

const education = ({ dispatch }) => {
  let input;

  return (
    <div>
        <p>What is your highest level of education?</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(setEducation(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">SAVE RESULTS!</button>
      </form>
    </div>
  )
}

export default connect()(education);