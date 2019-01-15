import React  from 'react'
//import styles
import {Button} from 'styles/Tabs/styles'
//import Prop
import PropTypes from 'prop-types'

export function Butn(props) {
    return(
      <Button inputColor={props.inputColor} onClick={props.handleTabChange}>
        {props.title}
      </Button>)
}

Butn.propTypes = {
  title:PropTypes.string.isRequired,
  inputColor:PropTypes.bool.isRequired,
  handleTabChange:PropTypes.func.isRequired
}
