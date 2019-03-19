import React from 'react'
import { connect } from 'react-redux'
import { setLastName } from '../actions'

const setLast = ({ dispatch }) => {
  let input;

  return (
    <div>
        <p>What is your last name?</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(setLastName(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">SAVE RESULTS!</button>
      </form>
    </div>
  )
}

export default connect()(setLast);