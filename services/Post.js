const BaseService = require("./BaseService");

const PostModel = require("../models/Post");
class Post extends BaseService {
    constructor() {
        super(PostModel);
    }

}

module.exports = Post;