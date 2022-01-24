
const Post = require("../services/Post");
const postService = new Post();
const index = (req, res) => {
    var id = req.params.id;
    postService.get(id).then(response => {
        if (!response) {
            res.status(404).send({
                message: "Log not found"
            });
        }
        res.status(200).send(response);
    })
        .catch(err => res.status(500).send(err));
}
const create = (req, res) => {
    postService.save(req.body).then(response => {
        res.status(200).send(response);
    }).catch(err => res.status(500).send(err));
}
module.exports = {
    index,
    create,
}