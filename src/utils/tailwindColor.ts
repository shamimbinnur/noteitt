const getBorderColor = (colorText: string) => {
  switch (colorText) {
    case "blue" : return "border-BLUE50"
    case "purple" : return "border-PURPLE100"
    case "orange" : return "border-orange-400"
    case "cyan" : return "border-CYAN100"

    default:
      return "border-BLUE50";
  }
}

const getBackgroundColor = (colorText: string) => {
  switch (colorText) {
    case "blue" : return "BLUE50"
    case "purple" : return "PURPLE100"
    case "orange" : return "orange-400"
    case "cyan" : return "CYAN100"

    default:
      return "BLUE50";
  }
}
export { getBorderColor, getBackgroundColor }