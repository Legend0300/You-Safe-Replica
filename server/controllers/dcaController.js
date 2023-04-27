const DCA = require('../models/dcaModel');

// GET all sites

const getAllDCAs = async (req, res) => {
    try {
        const dcas = await DCA.find();
    
        res.json(dcas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// GET one site by ID

const getDCAById = async (req, res) => {
    try {
        const dca = await DCA.findById(req.params.id);
    
        if (dca == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
        res.json(dca);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

// CREATE a new site

const createNewDCA = async (req, res) => {
        
            const dca = new DCA({
                formName: req.body.formName,
                questions: req.body.questions,
                status: req.body.status,
            });
        
            try {
                const newDCA = await dca.save();
            
                res.status(201).json(newDCA);
            } catch (err) {
                res.status(400).json({ message: err.message });
            }
            }

// UPDATE one site by ID

const updateDCAById = async (req, res) => {
    try {
        const dca = await DCA.findById(req.params.id);
    
        if (dca == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
        if (req.body.dcaName != null) {
            dca.dcaName = req.body.dcaName;
        }
        if (req.body.department != null) {
            dca.department = req.body.department;
        }
        if (req.body.status != null) {
            dca.status = req.body.status;
        }
    
        try {
            const updatedDCA = await dca.save();
        
            res.json(updatedDCA);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
// DELETE one site by ID

const deleteDCAById = async (req, res) => {

    try {
        const dca = await DCA.findById(req.params.id);
    
        if (dca == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
        await dca.remove();
    
        res.json({ message: 'Deleted site' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }


// GET one site by ID

const getDCAquestions = async (req, res) => {
    try {
        const dca = await DCA.find({});
        const questions = [];
        
        dca.forEach(doc => {
          const formName = doc.formName;
          const docQuestions = doc.questions.map(q => ({
            formName: formName,
            heading: q.Heading,
            question: q.Question
          }));
          questions.push(...docQuestions);
        });
        
        console.log(questions);
        res.json(questions);
        
        if (dca == null) {
            return res.status(404).json({ message: 'Cannot find site' });
        }
    
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }



module.exports = {
    getAllDCAs,
    getDCAById,
    createNewDCA,
    updateDCAById,
    deleteDCAById,
    getDCAquestions
}




