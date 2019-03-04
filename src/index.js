import React, { Component } from 'react'
import glamorous from 'glamorous'

export default class AvatarThumb extends Component {

  render() {

    const { src, firstName, lastName, style } = this.props
    
    let { bgColor, radius, fontSize, color } = this.props
    if (!bgColor) { bgColor = '#7DCE82'}
    if (!fontSize) { fontSize = '18px'}
    if (!radius) { radius = '45px'}
    if (!color) { color = 'white'}

    const AvatarDIV = glamorous.div({
      width: radius,
      height: radius,
      borderRadius: `${(parseFloat(radius) / 2)}px`,
      overflow: 'hidden',
    })

    let element
    if (src) {
      const AvatarIMG = glamorous.img({
        width: 'auto',
        height: 'auto',
        minWidth: radius,
        minHeight: radius,
      })
      element = <AvatarIMG src={src} alt={ `${firstName} ${lastName}` }/>
    } else {
      const Circle = glamorous.div({
        width: radius,
        height: radius,
        lineHeight: radius,
        backgroundColor: bgColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: `${radius/2}px`,
        color: color,
        textAlign: 'center',
      })
      const initials = firstName && lastName
        ? firstName.charAt(0) + lastName.charAt(0)
        : firstName.charAt(0)
      element = <Circle>{ initials }</Circle>
    }

    return (
      <AvatarDIV style={style}>
        { element }
      </AvatarDIV>
    )
  }
}