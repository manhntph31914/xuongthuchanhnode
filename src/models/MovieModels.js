import mongoose from "mongoose";
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        required: true,
        type: String,
        
    },
    poster: {
        type: String,
        
    },
    director: {
        type: String,
    },
    cast: {
        type: String,
    },
    genre: {
        type: String,
    },
    runingTime: {
        type: Number,
    },
    language: {
        type: String,
    },
    rated: {
        type: Number,
    },
    trailer: {
        type: String,
    },
    imgBanner: {
        type: String,
    }

},
{
    versionKey: false
}
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

