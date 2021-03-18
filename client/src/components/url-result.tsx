import { Link, Paper } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'

interface Props {
  shortUrl: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: grey[800],
      color: theme.palette.common.white,
      width: 'max-content',
      margin: '0 auto',
      padding: theme.spacing(2, 4),
      opacity: 0,
      transition: 'opacity 200ms linear'
    },
    show: {
      opacity: 1
    }
  })
)

export const UrlResult: React.FC<Props> = ({ shortUrl }) => {
  const classes = useStyles()

  return (
    <Paper className={clsx(classes.root, shortUrl && classes.show)}>
      Your shortened url:{' '}
      <Link color="secondary" href={shortUrl} target="_blank">
        {shortUrl}
      </Link>
    </Paper>
  )
}
