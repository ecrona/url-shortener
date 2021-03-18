import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { grey } from '@material-ui/core/colors'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { UrlField } from 'components/url-field'
import { UrlResult } from 'components/url-result'
import React, { useEffect } from 'react'
import { createUrl, resetState, setUrl } from './store/actions'
import { useCanCreate, useShortUrl, useUrlError } from './store/selectors'
import { useCreateUrlStore } from './store/store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    result: {
      background: grey[800],
      color: theme.palette.common.white,
      width: 'max-content',
      margin: '0 auto',
      padding: theme.spacing(2, 4),
      opacity: 0,
      transition: 'opacity 200ms linear'
    },
    showResult: {
      opacity: 1
    }
  })
)

export const CreateUrl = () => {
  const url = useCreateUrlStore((state) => state.url)
  const shortUrl = useShortUrl()
  const urlError = useUrlError()
  const canCreate = useCanCreate()
  const classes = useStyles()

  useEffect(() => resetState, [])

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle2">
          Want to shorten a URL? Enter your URL below!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <UrlField url={url} error={urlError} autoFocus setUrl={setUrl} />
      </Grid>
      <Grid item xs={12}>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="secondary"
            disabled={!canCreate}
            onClick={createUrl}
          >
            Shorten Url
          </Button>
        </div>
      </Grid>
      <Grid item xs={12}>
        <UrlResult shortUrl={shortUrl} />
      </Grid>
    </Grid>
  )
}
