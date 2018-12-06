import express from 'express';
import Cheat from '../models/Cheats';

export default {
  /**
   * getCheats - get all cheats
   * @param {object} req 
   * @param {object} res 
   */
  getCheats(req, res) {
    Cheat.find({}, (error, cheats) => {
      if (error) return res.status(500).send({ error: 'Error while fetching cheats!' });
      return res.status(200).send({ cheats })
    });
  },

  /**
   * addCheat - add new cheat
   * @param {object} req 
   * @param {object} res 
   */
  addCheat(req, res) {
    const { owner, title, detail } = req.body;
    const newCheat =  new Cheat({ owner, title, detail })
    newCheat.save(error => {
      if (error) return res.status(500).send(error);
      return res.status(200).send({ id: newCheat.id, owner, title, detail });
    });
  },

  /**
   * editCheat - modify cheat
   * @param {object} req 
   * @param {object} res 
   */
  editCheat(req, res) {
    Cheat.findById(req.params.id, (error, cheat) => {
      if (error) return res.status(404).send({ error: 'Cheat does not exit' });

      cheat.title = req.body.title || cheat.title;
      cheat.detail = req.body.detail || cheat.detail;

      cheat.save(error => {
        if (error) return res.status(500).send({ error: 'Error occured while updating cheat!' })
        return res.status(200).send({ id: cheat.id, owner: cheat.owner, title: cheat.title, detail: cheat.detail });
      });
    });
  }
}