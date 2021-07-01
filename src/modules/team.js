const team = () => {
  const commandPhotos = document.querySelectorAll(`.command__photo`);

  commandPhotos.forEach(photo => {
    let firstPhoto;
    photo.addEventListener(`mouseover`, () => {
      firstPhoto = photo.src;
      photo.src = photo.dataset.img;
    });
    photo.addEventListener(`mouseout`, () => {
      photo.src = firstPhoto;
    });
  });

};

export default team;