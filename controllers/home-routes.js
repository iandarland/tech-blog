const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post, Comment } = require('../models')

router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ]
        });
        const allPosts = postData.map((post) => post.get({ plain: true }));
    
        res.render('homepage', {
            allPosts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try{
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Comment,
                    attributes: ['content', 'user_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['name']
                        }
                    ]
                }
            ]
        })
        const post = postData.get({ plain: true });
        console.log(post)
        
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req,res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }]
        });
        const user = userData.get({ plain: true });
        console.log(user)

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/create', withAuth, async (req, res) => {
    try {
        const userData =  await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] }
        });
        const user = userData.get({ plain: true });

        res.render('create', {
            ...user,
            logged_in: true
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
