const Post = require("../models/post");

const slugify = require("slugify");

exports.create = (req, res) => {
    // console.log(req.body);

    const { title, content, user } = req.body;

    const slug = slugify(title);
    console.log(req.body)
    // validate

    switch (true) {
        case !title:
            return res.status(400).json({ error: "Title is required" });
            break;

        case !content:
            return res.status(400).json({ error: "Content is required" });
            break;
    }

    // create post

    Post.create({ title, content, user, slug }, (err, post) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: "Duplicate post. Try another title" });
        }
        res.json(post);
    });
};

exports.list = (req, res) => {
    Post.find({})
        .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, posts) => {
            if (err) console.log(err);
            res.json(posts);
        });

    exports.read = (req, res) => {
        // console.log(req.pramas.slug)
        const { slug } = req.params;
        Post.findOne({ slug }).exec((err, post) => {
            if (err) console.log(err);
            res.json(post);
        });
    };
};