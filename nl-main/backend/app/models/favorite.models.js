const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        id_music: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "music"
        },
    }
);

schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model("favorite", schema);