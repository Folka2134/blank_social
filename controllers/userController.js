const Post = require("../models/postModel");

module.exports = {
  getFeedPage: async (req, res) => {
    try {
      const postItems = await Post.find();
      res.render("feed.ejs", {
        posts: postItems,
        user: req.user,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getCreatePost: async (req, res) => {
    try {
      res.render("createPost.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (req, res) => {
    try {
      await Post.create({
        image: req.body.image,
        caption: req.body.caption,
        likes: 0,
        createdBy: req.user.id,
        createdAt: new Date(),
        deleted: false,
      });
      console.log("Post has been added!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
  addLike: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        {
          createdBy: req.body.createdBy,
          caption: req.body.caption,
          likes: req.body.likes,
        },
        {
          $set: {
            likes: req.body.likes + 1,
          },
        }
      );

      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },

  //   app.put('/addOneLike', (request, response) => {
  //     db.collection('rappers').updateOne({stageName: request.body.stageNameS, birthName: request.body.birthNameS,likes: request.body.likesS},{
  //         $set: {
  //             likes:request.body.likesS + 1
  //           }
  //     },{
  //         sort: {_id: -1},
  //         upsert: true
  //     })
  //     .then(result => {
  //         console.log('Added One Like')
  //         response.json('Like Added')
  //     })
  //     .catch(error => console.error(error))

  // })
};
