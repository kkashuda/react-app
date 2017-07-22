class DrinkApi {  
  static getAllDrinks() {
    return fetch('http://localhost:3001/api/drinks').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default DrinkApi; 