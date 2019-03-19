import React from 'react'
import { connect } from 'react-redux'
import { setDependant } from '../actions'

const dependant = ({ dispatch }) => {
  let input;

  return (
    <div>
        <p>What is your dependants name?</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(setDependant(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">SAVE RESULTS!</button>
      </form>
    </div>
  )
}

export default connect()(dependant);