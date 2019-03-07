import React, { Component } from 'react'

class Job extends Component {
  render() {
    return (
      <div>
        <div>
          <span>{this.props.job.companyName}  |  </span>
          <span>{this.props.job.title}  |  </span>
          <span>{this.props.job.status}  |  </span>
          <span>{this.props.job.location}  |  </span>
          <span>{this.props.job.description}  |  </span>
          <span><a href={this.props.job.url}>Original Posting</a></span>
        </div>
      </div>
    )
  }
}

export default Job
