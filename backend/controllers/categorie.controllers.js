const Categorie = require("../models/categorie");
//add categorie
exports.addCategorie = async (req, res) => {

    try {
      const newCategorie = await new Categorie(req.body);
      newCategorie.save();
      res.send(newCategorie);
    } catch (error) {
      res.status(500).json({errors: error.message});
    }
  };
  
  //update categorie
  exports.putCategorie = async (req, res) => {
    try {
      let newCategorieEdited= await Categorie.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
      res.send(newCategorieEdited)
      
   
  } catch (error) {
      return res.status(500).json({msg: error.message})
  }
};
//delete categorie
exports.deletCategorie = async (req, res) => {
    try {
      const newCategorie = await Categorie.findByIdAndDelete(req.params.id);
      res.send({msg: `${newCategorie.name} was successfully deleted`});
    } catch (error) {
      res.status(500).json({errors: error.message});
    }
  };
  //get categorie
  exports.getCategorie = async (req, res) => {
    try {
      let listCategorie= await Categorie.find()
      res.send(listCategorie)
    } catch (error) {
      res.status(500).json({errors: error.message});
    }
  };
  //get categorie by id
  exports.getCategorieById = async (req, res) => {
    try {
      let categorieId= await Categorie.findById(req.params.id)
      res.send(categorieId)
    } catch (error) {
      res.status(500).json({errors: error.message});
    }
  };