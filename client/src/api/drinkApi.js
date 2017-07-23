class DrinkApi {  
  static getAllDrinks() {
    return fetch('http://localhost:3001/api/drinks').then(response => {
        debugger
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default DrinkApi; 