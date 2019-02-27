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

async function users (parent, args, context, info) {
  // const userId = getUserId(context)

  return db.User
    .findAll()
    .then((users) => {
      console.log("Got Users: ", users[0])
      return users
    })
    .catch((err) => {
      throw new Error(`Error: ${err}`)
    })
}

async function user (parent, args, context, info) {
  // const userId = getUserId(context)

  return db.User
    .findOne({
      where: { id: args.id }
    })
    .then((user) => {
      console.log("Got User: ", user)
      return user
    })
    .catch((err) => {
      throw new Error(`Error: ${err}`)
    })
}

module.exports = {
  users,
  user,
  jobs,
  job,
}
