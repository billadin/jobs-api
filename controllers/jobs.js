const getAllJobs = async (req, res) => {
    res.send('Get all job')
}
const getJob = async (req, res) => {
    res.send('Get job')
}
const createJob = async (req, res) => {
    res.json(req.user)
}
const updateJob = async (req, res) => {
    res.send('Update job')
}
const deleteJob = async (req, res) => {
    res.send('Delete all job')
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}