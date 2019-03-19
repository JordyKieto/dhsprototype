import React from 'react'
import { connect } from 'react-redux'
import { setPhoneNumber } from '../actions'

const phoneNumer = ({ dispatch }) => {
  let input;

  return (
    <div>
        <p>What is your phone number?</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(setPhoneNumber(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">SAVE RESULTS!</button>
      </form>
    </div>
  )
}

export default connect()(phoneNumer);