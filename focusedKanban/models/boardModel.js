module.exports = {
  getAllBoards,
  getBoardColumns,
  getColumnCards,
  completeBoard,
  postNewColumn,
  postNewCard
};

const db = require("./dbconfig");

function getAllBoards(user_id) {
  const boards = db("boards").where("user", user_id);
  return boards;
}

function getBoardColumns(board_id) {
  const columns = db("columns").where("board", board_id);
  return columns;
}

function getColumnCards(column_id) {
  const cards = db("cards").where("column", column_id);
  return cards;
}

async function completeBoard(board_id) {
  const columns = await getBoardColumns(board_id);
  const board = [];
  for await (col of columns) {
    let template = {
      column_id: col.column_id,
      id: col.col_position,
      title: col.column_name,
      cards: await getColumnCards(col.column_id),
    };
    board.push(template);
  }
  return board;
}

async function postNewColumn(board_id, new_column) {
  if (new_column.position && new_column.name) {
    await db("columns").insert({
      col_position: new_column.position,
      column_name: new_column.name,
      board: board_id,
    });
    let updatedBoard = await completeBoard(board_id)
    return updatedBoard
  }else{
    return "Inputs are not complete."
  }
}

async function putColumn(column_id, updated_column) {
  return;
}

async function deleteColumn(column_id) {
  return;
}

async function postNewCard(column_id, new_card) {
  let currentTime = new Date()
  if(new_card.position && new_card.title ){
    let newCardTemplate = {
      position: new_card.position,
      card_name: new_card.title,
      date: currentTime.toDateString(), 
      description: new_card.description,
      column: column_id
    }
    await db("cards").insert(newCardTemplate)
    return "New Card Posted."
  }else{
    return "Inputs are not valid."
  }
}

async function putCard(card_id, updated_card) {
  return;
}

async function deleteCard(card_id) {
  return;
}
