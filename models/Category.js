const mongoose = require('mongoose');

const schema = new mongoose.Schema({ name: String, description: String });

const Category = mongoose.model('Category', schema);
