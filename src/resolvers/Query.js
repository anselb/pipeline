const db = require('../../db/models')

async function jobs (parent, args, context, info) {
  // const userId = getUserId(context)

  return db.Job
    .findAll()
    .then((jobs) => {
      console.log("Got Jobs: ", jobs[0])
      return jobs
    })
    .catch((err) => {
      throw new Error(`Error: ${err}`)
    })
}

async function job (parent, args, context, info) {
  // const userId = getUserId(context)

  return db.Job
    .findOne({
      where: { id: args.id }
    })
    .then((job) => {
      console.log("Got Job: ", job)
      return job
    })
    .catch((err) => {
      throw new Error(`Error: ${err}`)
    })
}

module.exports = {
  jobs,
  job,
}
