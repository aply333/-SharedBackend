const express = require("express");
const router = express.Router();
const boardModel = require("../models/boardModel");

router.route("/").get((req, res) => {
  res.status(200).json({ location: "At board root." });
});

router.route("/userboards/:user").get(async (req, res) => {
  try {
    const id = req.params.user;
    const boards = await boardModel.getAllBoards(id);
    res.status(200).json({ boards: boards });
  } catch (err) {
    res.status(404).json({ status: "No boards found", error: err });
  }
});

router
  .route("/columns/:board")
  .get(async (req, res) => {
    try {
      const id = req.params.board;
      const columns = await boardModel.getBoardColumns(id);
      res.status(200).json({ columns: columns });
    } catch (err) {
      res.status(404).json({ status: "No columns were found." });
    }
  })
  .post(
    async(req, res) => {
      try {
        let board = req.params.board;
        let newColumn = req.body.newColumn;
        const updatedBoard = await boardModel.postNewColumn(board, newColumn);
        res.status(200).json({ board: updatedBoard });
      } catch (err) {
        res
          .status(404)
          .json({ status: "Failed to post new column", error: err });
      }
    })
  

router.route("/cards/:column").get(async (req, res) => {
  try {
    const id = req.params.column;
    const cards = await boardModel.getBoardColumns(id);
    res.status(200).json({ cards: cards });
  } catch (err) {
    res.status(404).json({ status: "No cards were found." });
  }
}).post(async (req, res) => {
    try{
        const column = req.params.column
        const newCard = req.body.newCard
        const updatedBoard = await boardModel.postNewCard(column, newCard)
        res.status(200).json({board: updatedBoard})
    }catch(err){
        res.status(404).json({status: "Card failed to post."})
    }
})

router.route("/completeBoard/:board").get(async (req, res) => {
  try {
    const id = req.params.board;
    const board = await boardModel.completeBoard(id);
    res.status(200).json({ board: board });
  } catch (err) {
    res.status(404).json({ status: "Board was not found." });
  }
});

module.exports = router;
