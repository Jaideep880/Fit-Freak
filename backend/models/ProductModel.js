const mongoose=require('mongoose')


const reviewSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

const productSchema=mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Assuming 'User' is the name of your user model
            required: true // Ensure 'User' is required
          },
      
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      reviews: [reviewSchema],
      rating: {
        type: Number,
        required: true,
        default: 0,
      },
      numReviews: {
        type: Number,
        required: true,
        defualt: 0,
      },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
      countInStock: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    { timestamps: true }
)

const Product = mongoose.model('Product',productSchema)
module.exports= Product;
