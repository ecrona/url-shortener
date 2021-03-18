import { Paper } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import React from 'react'
import { setView } from './store/actions'
import { useUrlShortenerStore } from './store/store'
import { CreateUrl } from './views/create-url/create-url'
import { UpdateUrl } from './views/update-url/update-url'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    },
    content: {
      borderRadius: 0,
      padding: theme.spacing(2)
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  })
)

export const UrlShortener = () => {
  const [view] = useUrlShortenerStore((state) => [state.view])
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Url Shortener
          </Typography>
          <Button
            startIcon={view === 'create' ? <EditIcon /> : <AddIcon />}
            color="inherit"
            onClick={() => setView(view === 'create' ? 'update' : 'create')}
          >
            {view === 'create' ? 'Update url' : 'Create url'}
          </Button>
        </Toolbar>
      </AppBar>
      <Paper className={classes.content}>
        {view === 'create' && <CreateUrl />}
        {view === 'update' && <UpdateUrl />}
      </Paper>
    </div>
  )
}
