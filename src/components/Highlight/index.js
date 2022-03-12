import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import HighlightCard from './HighlightCard'

function Highlight( { report }) {
  const data = report && report.length ? report[report.length - 1] : []
  const summary = [
    {
      title: 'Confirmed',
      count: data.Confirmed,
      type: 'confirmed'
    },
    {
      title: 'Recovered',
      count: data.Active,
      type: 'recovered'
    },
    {
      title: 'Death',
      count: data.Deaths,
      type: 'death'
    }
  ]

  return (
    <Grid container spacing={3}>
      {
        summary.map(item => (<Grid item sm={4} xs={12} key={item.type}>
          <HighlightCard title={item.title} count={item.count} type={item.type}/>
          
        </Grid>))
      }
    </Grid>
  )
}

export default Highlight