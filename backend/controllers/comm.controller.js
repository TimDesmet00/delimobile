const Comm = require("../models/Comm.model");

const getAll = async (req, res) => {
  try {
    const comms = await Comm.find();
    res.status(200).json(comms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const comm = await Comm.findById(req.params.id);
    if (!comm)
      return res.status(404).json({ message: "Commentaire non trouvé" });
    res.status(200).json(comm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const add = async (req, res) => {
  const newComm = new Comm(req.body);
  try {
    const comm = await newComm.save();
    res.status(201).json(comm);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "il y a eux un problème lors de la creation du commentaire",
    });
  }
};

const edit = async (req, res) => {
  try {
    await Comm.findByIdAndUpdate(req.params.id, req.body);
    console.log(req.body);
    res.status(200).json({ message: "Commentaire modifié" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "il y a eux un problème lors de la modification du commentaire",
    });
  }
};

const del = async (req, res) => {
  try {
    await Comm.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Commentaire supprimé" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "il y a eux un problème lors de la suppression du commentaire",
    });
  }
};
