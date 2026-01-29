const pool = require('../../config/db');

const getAll = async () => {
  const { rows } = await pool.query('SELECT * FROM barberias ORDER BY created_at DESC');
  return rows;
};

const create = async (barberia) => {
  const { nombre, direccion, telefono } = barberia;
  const { rows } = await pool.query(
    'INSERT INTO barberias (nombre, direccion, telefono) VALUES ($1, $2, $3) RETURNING *',
    [nombre, direccion, telefono]
  );
  return rows[0];
};

module.exports = { getAll, create };