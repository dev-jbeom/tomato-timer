import React from "react"
import PropTypes from "prop-types"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

const Button = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  )
}

export default Button
