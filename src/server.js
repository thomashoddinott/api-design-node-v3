import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('logging')
  next()
}
// app.use(log) // run for everything

const router = express.Router()

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

app.use('/api', router)

//shorthand
router.route('/cat')
  .get()
  .post()
router.route('/cat/:id')
  .get()
  .put()
  .delete()

// can also pass an array of middlewares
app.get('/data', log, (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
