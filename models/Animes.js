const mongoose = require ('mongoose');

const AnimesSch = mongoose.Schema(
    {
        name:  {
            type: String,
            required : true
        } ,
        author:{
            type : String,
            required : true
        }
    }
    )
module.exports = mongoose.model('Anime', AnimesSch);
