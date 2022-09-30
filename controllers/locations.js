const Locations = require('../models/location.json');

exports.getLocations = (req, res) => {
    res.status(200).json({message:"Locations Fetched Successfully", locations: Locations})
}
