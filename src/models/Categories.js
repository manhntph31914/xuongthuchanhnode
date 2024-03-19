import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorieschema = new Schema({
    categories: {
        type: String,
    },
    mota: {
        type: String,
    }

},
{
    versionKey: false
}
);

const Categorie = mongoose.model("Categorie", categorieschema);

export default Categorie;

