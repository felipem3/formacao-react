import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

export default function Toast({ open, handleClose, children, severity }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} variant="filled" severity={severity}>
        {children}
      </Alert>
    </Snackbar>
  )
}
