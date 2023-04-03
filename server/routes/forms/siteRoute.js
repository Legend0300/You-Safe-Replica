express = require('express');
router = express.Router();

router.get('/', (req, res) => {
    res.send("works!");
    }
);


router.post('/', (req, res) => {
    res.send("works!");
    }
);

router.delete('/', (req, res) => {
    res.send("works!");
    }
);

router.put('/', (req, res) => {
    res.send("works!");
    }
);





module.exports = router;

