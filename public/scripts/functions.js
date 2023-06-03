export function nextChord(current) {
    const possibilities = [];
  
    switch (current) {
      case 1:
        possibilities.push(2, 3, 4, 5, 6, 7);
        break;
      case 2:
        possibilities.push(3, 4, 5, 6, 7);
        break;
      case 3:
        possibilities.push(4, 6, 7);
        break;
      case 4:
        possibilities.push(1, 4, 5, 6);
        break;
      case 5:
        possibilities.push(3, 5, 6, 7);
        break;
      case 6:
        possibilities.push(2, 3, 5, 6, 7);
        break;
      case 7:
        possibilities.push(1, 2, 4, 5, 6);
        break;
    }
  
    const randomIndex = Math.floor(Math.random() * possibilities.length);
    return possibilities[randomIndex];
  }