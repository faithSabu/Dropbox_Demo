const FILES = require('../model/fileSchema').files

module.exports = {
    fileUpload: (req, res) => {
        if (req.files === null) {
            return res.status(400).json({ msg: 'No file uploaded' })
        }
        const file = req.files.file;
        FILES.create({
            userId:file.userId,
            url: file.name,
        }).then(resp => {
            console.log(resp);
        })
        file.mv(`../Server/public/uploads/` + file.name, err => {
            if (err) {
                return res.status(500).send(err)
            }

            res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
        })
    }
}