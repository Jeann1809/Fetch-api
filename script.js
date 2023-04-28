let url = "https://rickandmortyapi.com/api/character/?page=19";
fetch(url)
  .then((data) => {
    data.json()
      .then((json) => {
        console.log(json);
        alert(json.name)
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((error) => {
    error;
  });
