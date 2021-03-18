import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider
} from '@material-ui/core'
import { amber, pink } from '@material-ui/core/colors'
import React from 'react'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[500]
    },
    secondary: {
      main: pink[100]
    }
  }
})

const useStyles = makeStyles((theme) => ({
  layout: {
    maxWidth: 930,
    margin: `${theme.spacing(4)}px auto`
  }
}))

export const Layout: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.layout}>{children}</div>
    </ThemeProvider>
  )
}
