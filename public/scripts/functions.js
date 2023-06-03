function nextChord(current, key) {
  switch (current) {
    case 1:
        return 4;
        break;
    case 2:
        return 5;
        break;
    case 3:
        return 6;
        break;
    case 4:
        return 5;
        break;
    case 5:
        return 1;
        break;
    case 6:
        return 2;
        break;
    case 7:
        return 6;
        break;
  }
}
