import React from 'react'
import { connect } from 'react-redux'
import { setAge } from '../actions'

const age = ({ dispatch }) => {
  let input

  return (
    <div>
        <p>How old are you?</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(setAge(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">SAVE RESULTS!</button>
      </form>
    </div>
  )
}

export default connect()(age);