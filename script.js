document.getElementById('loginButton').addEventListener('click', function() {
    var login = prompt('INPUT LOGIN', '');
  
    if (login === 'ADMIN') {
      var password = prompt('INPUT PASSWORD:', '');
  
      if (password === '123') {
        alert('WELCOME BACK');
      } else if (password === null) {
        alert('CANCELED');
      } else {
        alert('WRONG PASSWORD');
      }
    } else if (login === null || login === '') {
      alert('CANCELED');
    } else {
      alert('I DONT KNOW YOU');
    }
  });

        var username = prompt('YOUR NAME:');
      
        var birthYear = prompt('BIRTH YEAR:');
        
        birthYear = parseInt(birthYear);
        
        var currentYear = new Date().getFullYear();
        var age = currentYear - birthYear;
        
        document.write(username + ': ' + age);

           // Получаем номер месяца с помощью prompt
    var monthNumber = prompt('MONTH NUMBER:');
    
    // Преобразуем введенное значение в число
    monthNumber = parseInt(monthNumber);
    
    // Определяем сезон года на основе номера месяца
    var season;
    if (monthNumber >= 1 && monthNumber <= 12) {
      if (monthNumber >= 3 && monthNumber <= 5) {
        season = 'SPRING';
      } else if (monthNumber >= 6 && monthNumber <= 8) {
        season = 'SUMMER';
      } else if (monthNumber >= 9 && monthNumber <= 11) {
        season = 'FALL';
      } else {
        season = 'WINTER';
      }
      
      // Выводим сезон года
      alert('SEASON: ' + season);
    } else {
      alert('WRONG.');
    }