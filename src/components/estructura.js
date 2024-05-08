let total = 0;
//para el total de puntos todo el año
allposts.map((post) => {
  if (post.usuario === 'maria' && post.fecha.toDate().getFullYear() === 2024) {
    total += 1;
  }
});

console.log(total);
