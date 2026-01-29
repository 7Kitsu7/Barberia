const BarberiaRepo = require('./barberia.repository');

const getBarberias = async (req, res) => {
  try {
    const data = await BarberiaRepo.getAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBarberia = async (req, res) => {
  try {
    const nueva = await BarberiaRepo.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getBarberias, createBarberia };