class Controller{
    async home(req,res){
        res.send("Welcome to home page.")
    }
    async about (req,res){
        res.send("Welcome to About Us page.")
    }
    async contact (req,res){
        res.send("Welcome to Contact Us page.")
    }
}

module.exports = new Controller;