const controller = {}

controller.baseRoute = (req,res) => {
    res.render('spanish/principal',{
        message : req.flash('messagesend'),
        messageReset : req.flash('resetMessage')
    })
}

    
module.exports = controller;