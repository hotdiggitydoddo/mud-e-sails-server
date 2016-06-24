/**
 * ChatController
 *
 * @description :: Server-side logic for managing Chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	connect: function(req, res) {
        if (!req.isSocket)
            return res.badRequest();

            sails.sockets.join(req, 'test-room', function(err) {
                if (err)
                    return res.serverError(err);
                return res.json({
                    message: 'Subscribed to test room!'
                });
            });
    }
};

