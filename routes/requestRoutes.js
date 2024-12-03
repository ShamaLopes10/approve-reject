const express = require('express');
const Request = require('../models/Request');
const router = express.Router();

// Get all pending requests
router.get('/', async (req, res) => {
  try {
    const requests = await Request.findAll({ where: { status: 'Pending' } });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching requests' });
  }
});

// Submit a new request
router.post('/', async (req, res) => {
  try {
    const { eventName, eventDate, venue, details } = req.body;
    const newRequest = await Request.create({ eventName, eventDate, venue, details });
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: 'Error submitting request' });
  }
});

// Approve or reject a request
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const request = await Request.findByPk(req.params.id);

    if (request) {
      request.status = status;
      await request.save();
      res.json(request);
    } else {
      res.status(404).json({ error: 'Request not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating request status' });
  }
});

module.exports = router;

