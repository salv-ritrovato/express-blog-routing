const express = require('express');
const router = express.Router();

// Index
router.get('/', (req, res) => {
    res.send('Lista dei post');
});

// Show
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Dettagli del post ${id}`);
});

// Create
router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
});

// Update
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Aggiornamento del post ${id}`);
});

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Cancellazione del post ${id}`);
});

module.exports = router;