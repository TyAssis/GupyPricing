const app = require('../../../app/app');

const router = require('express').Router();

const { JobManager } = require('../managers/job-manager');
const { JobRepository } = require('../infrastructure/job-repository');

router.get('/', async (req, res) => {
    res.json({});
});

router.get('/:id', async (req, res) => {
    const repository = new JobRepository(JobModel);
    const manager = new JobManager(repository);
    const job = await manager.getJobById(req.params.id);
    res.json(job);
});

router.post('/', async (req, res) => {
    const repository = new JobRepository();
    const manager = new JobManager(repository);
    const newJob = await manager.insertJob(req.body);
    res.json(newJob);
});

app.use('/job', router);

module.exports = router;
