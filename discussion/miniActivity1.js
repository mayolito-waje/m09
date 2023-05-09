const favoriteVideoGame = {
  title: 'Bloodborne',
  publisher: 'Sony Computer Entertainment',
  year: 2014,
  price: '$19.99',
  director: 'Hidetaka Miyazaki',
  isAvailable: true,
};

for (const key in favoriteVideoGame) {
  console.log(`${key}: ${favoriteVideoGame[key]}`);
}
