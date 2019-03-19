import React from 'react'
import { connect } from 'react-redux'
import { setFamilySize } from '../actions'

const familySize = ({ dispatch }) => {
  let input;

  return (
    <div>
        <p>How big is your family?</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(setFamilySize(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">SAVE RESULTS!</button>
      </form>
    </div>
  )
}

export default connect()(familySize);