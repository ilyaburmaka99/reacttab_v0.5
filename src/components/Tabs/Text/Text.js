import React  from 'react'
//import styles
import {Text} from 'styles/Tabs/styles'
//import constants
import {myContent} from 'constants/Tabs/Constant'
//import Prop
import PropTypes from 'prop-types'


export function Welcome(props){
  if (props.name === myContent.FIRST) {
  return (<Text><img src={props.name} alt="pict"/></Text>)
  }
  else return (<Text>{props.name}</Text>)
}

Welcome.propTypes = {
  name:PropTypes.string.isRequired
}
