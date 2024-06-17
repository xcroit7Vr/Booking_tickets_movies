// import jwt from "jsonwebtoken";
// import mongoose from "mongoose";
// import Admin from "../models/Admin.js";
import initModels from "../models/init-models.js";

const { tbl_movies: Movie } = initModels();

export const addMovie = async (req, res, next) => {

  let adminId;

  //create new movie
  const { name, cast,  img_url, trailer_url, sinopsis, director, age, duration, price } =
    req.body;
  if (
    !name &&
    name.trim() === "" &&
    !cast &&
    cast.trim() == "" &&
    !img_url &&
    img_url.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  let movie;
  try {
    movie = await Movie.create({
      cast,      
      sinopsis,
      director,      
      img_url,
      trailer_url,
      name,
      age,
      duration,
      price
    });
    
    

  } catch (err) {
    return console.log(err);
  }

  if (!movie) {
    return res.status(500).json({ message: "Request Failed" });
  }

  return res.status(201).json({ movie });
};

export const getAllMovies = async (req, res, next) => {
  let movies;

  try {
    movies = await Movie.findAll();
  } catch (err) {
    return console.log(err);
  }

  if (!movies) {
    return res.status(500).json({ message: "Request Failed" });
  }
  return res.status(200).json({ movies });
};

export const getMovieById = async (req, res, next) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findByPk(id);
  } catch (err) {
    return console.log(err);
  }

  if (!movie) {
    return res.status(404).json({ message: "Invalid Movie ID" });
  }

  return res.status(200).json({ movie });
};
