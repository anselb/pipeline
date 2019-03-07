import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Job from './Job'

const ALL_JOBS = gql`
  query {
    jobs {
      id
      companyName
      title
      status
      location
      description
      url
    }
  }
`

class JobList extends Component {
  render() {
    return (
      <Query query={ ALL_JOBS }>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const jobsToRender = data.jobs

          return (
            <div>
              { jobsToRender.map(job => <Job key={ job.id } job={ job } />) }
            </div>
          )
        }}
      </Query>
    )
  }
}

export default JobList
