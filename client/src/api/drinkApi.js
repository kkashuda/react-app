class DrinkApi {  
  static getAllDrinks() {
    return fetch('http://localhost:3001/api/drinks').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


 static getDrink (id) {
    this.fetch(`http://localhost:3001/api/drinks/${id}`)
      .then(drink => {
      return drink.json();
    }).catch(error => {
      return error;
    });
  }

}

export default DrinkApi; 