import React from 'react'
import { connect } from 'react-redux'
import { setFirstName } from '../actions'

const setName = ({ dispatch }) => {
  let input

  return (
    <div>
        <p>What is your first name?</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(setFirstName(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Okay got it!</button>
      </form>
    </div>
  )
}

export default connect()(setName)