import React from 'react';
import { connect } from 'react-redux'
import { formPrevious, formNext } from '../actions'

const prev = require('../left-arrow.png');
const next = require('../right-arrow.png');

const prevNext = ({ dispatch }) =>{
    return(
        <>
            <button>
                <img src={prev}
                    alt="previous"
                    onClick={()=>{dispatch(formPrevious())}}
                >
                </img>
            </button>
            <button>
                <img src={next}
                    alt="next"
                    onClick={()=>{dispatch(formNext())}}
                >
                </img>
            </button>
        </>
    )
};

export default connect()(prevNext);
