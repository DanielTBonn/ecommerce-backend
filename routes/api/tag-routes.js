const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    const tagData = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product}],
    });

    if (!tagData) {
      res.status(404).json({"message": "No tag data found."})
    } else {
      console.log("Success!");
      res.status(200).json(tagData);
    }

  } catch (err) {
    res.status(500).json(err);
    console.log("Error occured");
    console.log(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find all tags
    const tagData = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Product data
      include: [{ model: Product}],
    });

    if (!tagData) {
      res.status(404).json({"message": "No tag with this id."})
    } else {
      console.log("Success!");
      res.status(200).json(tagData);
    }
    
  } catch (err) {
    res.status(500).json(err);
    console.log("Error occured");
    console.log(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tag) => {
    // if there's product tags, we need to create pairings to bulk create in the ProductTag model
    if (req.body.productIds.length) {
      const productTagIdArr = req.body.productIds.map((product_id) => {
        return {
          tag_id: tag.id,
          product_id,
        };
      });
      return ProductTag.bulkCreate(productTagIdArr);
    }
    // if no product tags, we respond with
    res.status(200).json(tag);
  })
  .then((productTagIds) => res.status(200).json(productTagIds))
  .catch((err) => {
    console.log("Error occured")
    console.log(err);
    res.status(400).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try { 
    const tagData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({"message": "No tags with this id." });
      return;
    }
    console.log("Successfully deleted!")
    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
    console.log("Error occured");
    console.log(err);
  }
});

module.exports = router;
