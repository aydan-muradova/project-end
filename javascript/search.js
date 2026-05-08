document.addEventListener("DOMContentLoaded", () => {

  const searchInputs =
    document.querySelectorAll(".search-box input");

  searchInputs.forEach(input => {

    input.addEventListener("input", function () {

      const value =
        this.value.toLowerCase();

      // bütün kartlar
      const cards = document.querySelectorAll(
        ".card, .new-card"
      );

      cards.forEach(card => {

        let text = "";

        // normal card
        const normalName =
          card.querySelector(".name");

        // new card
        const newName =
          card.querySelector("h3");

        if (normalName) {
          text = normalName.innerText.toLowerCase();
        }

        if (newName) {
          text = newName.innerText.toLowerCase();
        }

        if (text.includes(value)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});