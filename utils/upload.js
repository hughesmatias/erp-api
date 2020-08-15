const saveFile = (file, dir, name) => {
  file.mv(`${dir}/${name}`);
  return file;
}

module.exports = {
  saveFile,
};
