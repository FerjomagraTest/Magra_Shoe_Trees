const controller = {}

controller.baseRoute = (req,res) => {
    res.render('spanish/guitartStands/index',{
        message : req.flash('messagesend'),
        messageReset : req.flash('resetMessage')
    })
}

    
module.exports = controller;