import foodModel from "../models/foodModels.js";

// add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    })

    try {
        await food.save();
        res.json({success: true, message: 'Food Added'})
    } catch (error) {
        res.json({success: false, message: 'Error'})
    }
}

export {addFood}