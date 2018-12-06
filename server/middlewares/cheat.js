class Cheat {
  static validateOwner(req, res, next) {
    // check if owner field is supplied

    // check if the owner field is not an empyt string

    // check if the owner id passed is the same with the one in jwt

    // next
  };

  static validateTitle(req, res, next) {
    // check if the title field is supplied

    // check title field is not an empty string

    // next
  };

  static validateDetail(req, res, next) {
    // check if the detail field is an array and that it is supplied

    // check if the array contains descriptions and commands which are not empty

    //next
  }
}

export default Cheat;