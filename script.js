const faqList = document.querySelector(".faq-list");

faqList.addEventListener("click", function (event) {
  const clickedItem = event.target.closest(".faq-item");

  if (!clickedItem) return;

  if (clickedItem.classList.contains("show")) {
    clickedItem.classList.remove("show");
  } else {
    const currentlyShownItem = faqList.querySelector(".faq-item.show");
    if (currentlyShownItem) {
      currentlyShownItem.classList.remove("show");
    }

    clickedItem.classList.add("show");
  }
});
