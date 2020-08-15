const uploadHelper = require('../utils/upload');

class UploadFileService {
  uploadLocal(file) {
    const name = `${new Date().toTimeString()}.${file.type}`;
    const saved = uploadHelper.saveFile(file, './files', name);
    return {
      name,
      mimetype: saved.mimetype,
      size: saved.size,
    }
  }
};

module.exports = UploadFileService;