const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Product',
    },
  },
  { timestamps: true }
);

ReviewSchema.index({ product: 1, user: 1 }, { unique: true });

ReviewSchema.statics.calculateAverageRating = async function (productId) {
  const result = await this.aggregate([
    {
      $match: { product: productId },
    },
    {
      $group: {
        _id: null,
        averageRating: { $avg: '$rating' },
        numReviews: { $sum: 1 },
      },
    },
  ]);
  try {
    await this.model('Product').findOneAndUpdate(
      { _id: productId },
      {
        rating: Math.ceil(result[0]?.averageRating || 0),
        numReviews: result[0]?.numReviews || 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
ReviewSchema.post('save', async function () {
  await this.constructor.calculateAverageRating(this.product);
});
ReviewSchema.post('remove', async function () {
  await this.constructor.calculateAverageRating(this.product);
});
module.exports = mongoose.model('Review', ReviewSchema);
