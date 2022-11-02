module.exports = class CustomApiError extends Error {
    constructor(message, status = 500) {
      // super permet d'appeler le constructeur de la classe parente
      super(message);
      this.status = status;
    }
}