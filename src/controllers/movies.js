import Movie from "../models/MovieModels.js";

class MoviesController {

    async GetAllMovies(req, res) {
        try {
            const movies = await Movie.find();
            res.status(200).json({
                message: "Hien thi ALL san pham",
                data: movies,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }     
    async GetMoviedetail(req, res) {
        try {
            const movie = await Movie.findById(req.params.id);
            if(!movie) {
                return res.status(404).json({
                    message: "Khong the connect",
                });
            }
            res.status(200).json({
                message: "Hien thi chi tiet san pham",
                data: movie,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async createlMovie(req, res) {
        const newmovie = new Movie(req.body);
        const saveMovie = await newmovie.save();

        res.status(201).json({
            message: "Tao movie thanh cong",
            data: saveMovie,
        });
    }
    async updateMovie(req, res) {
        try {
            const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
            if(!movie) {
                return res.status(404).json({
                    message: "Khong the update san pham",
                });
            }
            const updatemovie = await Movie.findById(req.params.id);
            res.status(200).json({
                message: "Update san pham thanh cong",
                data: updatemovie,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async deleteMovie(req, res) {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            if(!movie) {
                return res.status(404).json({
                    message: "Khong the connect",
                });
            }
            res.status(200).json({
                message: "Xoa san pham thanh cong",
                data: movie,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }


}
export default MoviesController;
