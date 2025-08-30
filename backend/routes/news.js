const express = require('express');
const router = express.Router();


// GET /api/news
router.get('/', (req, res) => {
const news = [
{ id: 1, title: 'Local cooperative sets up weekly medicine delivery point' },
{ id: 2, title: 'Subsidized seeds available at the Gram Panchayat from next Monday' },
{ id: 3, title: 'New mobile banking van to visit remote villages every Thursday' }
];
res.json(news);
});


module.exports = router;