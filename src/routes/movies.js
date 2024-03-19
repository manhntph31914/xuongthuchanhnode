import express  from "express";
import MoviesController from "../controllers/movies.js";
const moviesRouter = express.Router();
const moviesController =  new MoviesController();

moviesRouter.get("/",moviesController.GetAllMovies );    
moviesRouter.get("/:id",moviesController.GetMoviedetail);    
moviesRouter.post("/",moviesController.createlMovie);    
moviesRouter.put("/:id", moviesController.updateMovie);    
moviesRouter.delete("/:id", moviesController.deleteMovie);    
export default moviesRouter;