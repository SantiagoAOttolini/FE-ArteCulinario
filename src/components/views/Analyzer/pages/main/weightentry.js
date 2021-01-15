import React from 'react'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    paddingTop: '0.5em',
    flexWrap: 'wrap',
    marginRight: '1.5em',
    marginLeft: '1.5em'
  },
  inputField: {
    display: 'flex',
    width: '100%'
  }
})

function WeightEntry(props) {
  const { classes, handleChange } = props

  return (
    /**
     * these allow you to create input fields
     */
    <div className={classes.root}>
      <div className={classes.inputField}>
        <TextField
          id='outlined-dense'
          label='Peso corporal'
          name='bodyWeight'
          type='tel'
          pattern='[0-9]*'
          value={props.bodyWeight}
          onChange={handleChange}
          fullWidth
          margin='dense'
          variant='outlined'
        />
      </div>

      <div className={classes.inputField}>
        <TextField
          id='outlined-dense'
          label='Altura (cm)'
          name='height'
          type='tel'
          pattern='[0-9]*'
          value={props.height}
          onChange={handleChange}
          fullWidth
          margin='dense'
          variant='outlined'
        />
      </div>

      <div className={classes.inputField}>
        <TextField
          id='outlined-dense'
          label='Edad'
          name='age'
          type='tel'
          pattern='[0-9]*'
          value={props.age}
          onChange={handleChange}
          fullWidth
          margin='dense'
          variant='outlined'
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(WeightEntry)
