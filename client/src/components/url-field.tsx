import { TextField } from '@material-ui/core'
import React from 'react'

interface Props {
  url: string
  error: boolean
  autoFocus?: boolean
  setUrl: (url: string) => void
}

export const UrlField: React.FC<Props> = ({
  url,
  error,
  autoFocus,
  setUrl
}) => (
  <TextField
    fullWidth
    variant="outlined"
    label="Enter a URL"
    autoFocus={autoFocus}
    value={url}
    error={error}
    helperText={error && 'You must enter a valid url'}
    onChange={(e) => setUrl(e.target.value)}
  />
)
