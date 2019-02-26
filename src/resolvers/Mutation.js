const db = require('../../db/models')

async function postJob (parent, args, context, info) {
  // const userId = getUserId(context)

  return db.Job
    .create({
      companyName: args.companyName,
      title: args.title,
      description: args.description,
      status: args.status,
      location: args.location,
      url: args.url,
    })
    .then((job) => {
      console.log("New Job: ", job)

      return job
    })
    .catch((err) => {
      throw new Error(`Error: ${err}`)
    })
}

async function updateJob (parent, args, context, info) {
  // const userId = getUserId(context)

  return db.Job
    .update(args, {
      where: { id: args.id },
      returning: true
    })
    .then((job) => {
      job = job[1][0].dataValues
      console.log("Updated Job: ", job)

      return job
    })
    .catch((err) => {
      throw new Error(`Error: ${err}`)
    })
}

async function deleteJob (parent, args, context, info) {
  // const userId = getUserId(context)

  return db.Job
    .destroy({
      where: { id: args.id },
      returning: true
    })
    .then((deleted) => {
      deleted ? deleted = true : deleted = false
      console.log("Deleted Job?: ", deleted)

      return deleted
    })
    .catch((err) => {
      throw new Error(`Error: ${err}`)
    })
}


module.exports = {
  postJob,
  updateJob,
  deleteJob,
}
