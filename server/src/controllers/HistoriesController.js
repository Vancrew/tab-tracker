const {
  History,
  Song
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      }).map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history
        ))
      res.send(_.uniqBy(histories, history => history.SongId))
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the history.'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body
      const history = await History.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (history) {
        const updateHistory = await History.update(history.toJSON(), {
          where: {
            id: history.id
          }
        })
        res.send(updateHistory)
      }
      const newHistory = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newHistory)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create / update the history.'
      })
    }
  }
}
