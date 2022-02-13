import AsyncSelect from "react-select/async"
import { components } from "react-select"

const newStyles = {
  control: (styles, { isDisabled }) => {
    return {
      ...styles,
      width: 260,
      cursor: isDisabled ? "not-allowed" : "pointer",
    }
  },
  option: (styles, { isDisabled, isFocused }) => {
    return {
      ...styles,
      cursor: isDisabled ? "not-allowed" : "pointer",
      color: "#333",
      background: isFocused ? "#e2e2e2" : "initial",
    }
  },
}

const NoOptionsMessage = (props) => {
  return (
    <components.NoOptionsMessage {...props}>
      Type City's name...
    </components.NoOptionsMessage>
  )
}

const CityAsyncSelect = (props) => {
  const { components, styles, ...restProps } = props

  return (
    <AsyncSelect
      components={{ NoOptionsMessage }}
      styles={newStyles}
      {...restProps}
    />
  )
}

export default CityAsyncSelect
