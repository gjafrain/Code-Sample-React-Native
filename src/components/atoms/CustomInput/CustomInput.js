/** @format */

import React, { useCallback, useState } from "react"
import { View, Text, TextInput } from "react-native"
//
import Styles from "./Style"

export default function CustomInput({
  label = "",
  name = "",
  value = "",
  inputStyle = {},
  editable = true,
  type = "default",
  required = false,
  error = false,
  errorMsg = "Required",
  onChange = () => {},
  submitted = true,
  placeholder,
  multiline,
  numberOfLines = 1,
}) {
  const [inputFocus, setInputFocus] = useState(false)

  const activeInput = inputFocus
    ? Styles.activeInputLabel
    : value
    ? Styles.activeInputLabel
    : {}
  error = error || (required && submitted && !value) ? Styles.error : null

  const onChangeText = (text) => {
    onChange(name, text)
  }

  return (
    <View style={[Styles.inputBox, editable ? {} : Styles.disableText]}>
      {label ? (
        <Text numberOfLines={1} style={[Styles.label, activeInput]}>
          {label} {required ? <Text>*</Text> : <></>}
        </Text>
      ) : (
        <></>
      )}
      <TextInput
        style={[
          Styles.input,
          inputFocus && Styles.activeInput,
          error,
          inputStyle,
        ]}
        editable={editable}
        name={name}
        keyboardType={type}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        numberOfLines={numberOfLines}
        multiline={multiline}
        maxLines={4}
      />
      {error ? <Text style={Styles.errorText}>{errorMsg}</Text> : <></>}
    </View>
  )
}
