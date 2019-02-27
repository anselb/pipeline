const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../../db/models')

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const username = args.username

  let token
  const user = await db.User
    .create({
      username: username,
      password: password,
      email: args.email,
      firstName: args.firstName,
      lastName: args.lastName
    }).then(() => db.User.findOrCreate({
      where: { username }
    })).spread((user, created) => {
      // Create a new jwt token
      token = jwt.sign({ userId: user.id }, process.env.SECRET, {
        expiresIn: "60 days"
      })

      console.log(user)
      return user.get({ plain: true })
    })
    .catch((err) => {
      throw new Error(`Error: ${err}`)
    })

  return {
    token,
    user,
  }
}

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
  signup,
  postJob,
  updateJob,
  deleteJob,
}
