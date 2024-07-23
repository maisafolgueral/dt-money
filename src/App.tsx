import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/dafault"
import { GlobalStyle } from "./styles/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      
      <h1>Hello world!</h1>
    </ThemeProvider>
  )
}

