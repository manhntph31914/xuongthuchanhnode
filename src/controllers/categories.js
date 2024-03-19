import Categorie from "../models/Categories.js";

class CategoriesController {

    async GetAllCategories(req, res) {
        try {
            const categories = await Categorie.find();
            res.status(200).json({
                message: "Hien thi ALL san pham",
                data: categories,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }     
    async GetCategoriedetail(req, res) {
        try {
            const categorie = await Categorie.findById(req.params.id);
            if(!categorie) {
                return res.status(404).json({
                    message: "Khong the connect",
                });
            }
            res.status(200).json({
                message: "Hien thi chi tiet san pham",
                data: categorie,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async createlCategorie(req, res) {
        const newcategorie = new Categorie(req.body);
        const saveCategorie = await newcategorie.save();

        res.status(201).json({
            message: "Tao categorie thanh cong",
            data: saveCategorie,
        });
    }
    async updateCategorie(req, res) {
        try {
            const categorie = await Categorie.findByIdAndUpdate(req.params.id, req.body);
            if(!categorie) {
                return res.status(404).json({
                    message: "Khong the update san pham",
                });
            }
            const updatecategorie = await Categorie.findById(req.params.id);
            res.status(200).json({
                message: "Update san pham thanh cong",
                data: updatecategorie,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async deleteCategorie(req, res) {
        try {
            const categorie = await Categorie.findByIdAndDelete(req.params.id);
            if(!categorie) {
                return res.status(404).json({
                    message: "Khong the connect",
                });
            }
            res.status(200).json({
                message: "Xoa san pham thanh cong",
                data: categorie,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }


}
export default CategoriesController;
