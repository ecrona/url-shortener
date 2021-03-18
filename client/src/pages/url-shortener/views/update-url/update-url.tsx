import { Grid, InputAdornment, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Alert } from '@material-ui/lab'
import { UrlField } from 'components/url-field'
import { UrlResult } from 'components/url-result'
import { getLinkUrl } from 'helpers/url'
import React from 'react'
import {
  setExistingShortUrlIdentifier,
  setUrl,
  updateUrl
} from './store/actions'
import { useCanUpdate, useShortUrl, useUrlError } from './store/selectors'
import { useUpdateUrlStore } from './store/store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    result: {
      width: 'max-content',
      margin: '0 auto',
      padding: theme.spacing(2, 4)
    }
  })
)

export const UpdateUrl = () => {
  const [
    viewState,
    existingShortUrlIdentifier,
    url
  ] = useUpdateUrlStore((state) => [
    state.viewState,
    state.existingShortUrlIdentifier,
    state.url
  ])
  const shortUrl = useShortUrl()
  const urlError = useUrlError()
  const canUpdate = useCanUpdate()
  const classes = useStyles()

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle2">
          Want to update an existing url? Enter your short url and a new url
          below!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Enter an existing short url"
              value={existingShortUrlIdentifier}
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {getLinkUrl('')}
                  </InputAdornment>
                )
              }}
              onChange={(e) => setExistingShortUrlIdentifier(e.target.value)}
            />
          </Grid>
          <Grid item xs>
            <UrlField url={url} error={urlError} setUrl={setUrl} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="secondary"
            disabled={!canUpdate}
            onClick={updateUrl}
          >
            Update Url
          </Button>
        </div>
      </Grid>
      <Grid item xs={12}>
        {viewState !== 'not-found' && <UrlResult shortUrl={shortUrl} />}
        {viewState === 'not-found' && (
          <Alert severity="error">Could not find matching short url</Alert>
        )}
      </Grid>
    </Grid>
  )
}
