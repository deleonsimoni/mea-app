const Dissertation = require('../../models/dissertation.schema');
const S3Uploader = require('./../aws.controller');
const config = require('./../../config/config');

class CompletedGuidelinesController {
  static async create(data) {
    let fileName = config.PATH_S3_DEV + 'pdfs/' + data.archive.name;
    const dissertation = JSON.parse(data.body.formulario);

    await S3Uploader.uploadFile(fileName, data.archive.data).then(
      fileData => {
        dissertation.link = fileName;

        return new Dissertation(dissertation).save();
      },
      err => {
        console.log('Erro ao enviar imagem para AWS: ' + fileName);
        retorno.temErro = true;
        retorno.mensagem =
          'Servidor momentaneamente inoperante. Tente novamente mais tarde.';
      }
    );
  }

  static list() {
    return Dissertation.find();
  }

  static update(data) {
    return Dissertation.update(data);
  }

  static delete(id) {
    return Dissertation.deleteOne({ _id: id });
  }
}

module.exports = CompletedGuidelinesController;
