const router = require('express').Router();
const helper = require('../utils/comment-helper');

/**
 * returns api
 */
router.get('/', (req, res) => {
    var reqUrl = `${req.protocol}://${req.hostname}:3000${req.baseUrl}`;
    var separator = reqUrl.endsWith('/') ? '' : '/';
    var response = {
        validate: {
            link: `${reqUrl}${separator}validate`,
            method: 'POST',
            description: 'to validate a comment or feedback'
        },
        moderate: {
            link: `${reqUrl}${separator}moderate`,
            method: 'POST',
            description: 'to moderate a comment or feedback'
        }
    };
    res.status(200).json(response);
});

/**
 * validates comment
 */
router.post('/validate', (req, res) => {
    res.status(200).json({
        comment: req.body.comment,
        valid: helper.validate(req.body.comment)
    });
});

/**
 * moderates comment
 */
router.post('/moderate', (req, res) => {
    res.status(200).json({
        comment: req.body.comment,
        moderated_comment: helper.moderate(req.body.comment)
    });
});

module.exports = router;