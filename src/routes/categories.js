import express  from "express";
import CategoriesController from "../controllers/categories.js";
const categoriesRouter = express.Router();
const categoriesController =  new CategoriesController();

categoriesRouter.get("/",categoriesController.GetAllCategories );    
categoriesRouter.get("/:id",categoriesController.GetCategoriedetail);    
categoriesRouter.post("/",categoriesController.createlCategorie);    
categoriesRouter.put("/:id", categoriesController.updateCategorie);    
categoriesRouter.delete("/:id", categoriesController.deleteCategorie);    
export default categoriesRouter;