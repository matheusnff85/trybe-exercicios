const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      'INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)',
      [title, directedBy, releaseYear],
    );

  return {
    id: result.insertId,
  };
};

const serialize = (movieData) => ({
  id: movieData.id,
  title: movieData.title,
  directedBy: movieData.directed_by,
  releaseYear: movieData.release_year,
});

const getOne = async (id) => {
  const [result] = await connection
  .execute(
    'SELECT * FROM model_example.movies WHERE id = ?',
    [id],
  );
  if(result[0] === undefined) return {};
  return serialize(result[0]);
};

module.exports = {
  create,
  getOne,
};