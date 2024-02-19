window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".sidebar-tab");
  const lastNews = document.querySelector(".last-news");

  const oren = [
    {
      text: "За работу автобусов в Оренбурге чиновники ставят двойку, но просят тайм-аут",
      img: "assets/img/newImage.jpg",
    },

    {
      text: "За работу автобусов в Оренбурге чиновники ставят двойку, но просят тайм-аут",
      img: "assets/img/newImage.jpg",
    },
    {
      text: "За работу автобусов в Оренбурге чиновники ставят двойку, но просят тайм-аут",
    },
    {
      text: "За работу автобусов в Оренбурге чиновники ставят двойку, но просят тайм-аут",
      img: "assets/img/newImage.jpg",
    },
  ];

  const another = [
    {
      text: "За работу автобусов в КАРГАЛЕ чиновники ставят двойку, но просят тайм-аут",
      img: "assets/img/newImage.jpg",
    },

    {
      text: "За работу автобусов в Оренбурге чиновники ставят двойку, но просят тайм-аут",
    },
    {
      text: "За работу автобусов в Оренбурге чиновники ставят двойку, но просят тайм-аут",
      img: "assets/img/newImage.jpg",
    },

    {
      text: "За работу автобусов в КАРГАЛЕ чиновники ставят двойку, но просят тайм-аут",
      img: "assets/img/newImage.jpg",
    },
    {
      text: "За работу автобусов в КАРГАЛЕ чиновники ставят двойку, но просят тайм-аут",
      img: "assets/img/newImage.jpg",
    },
    {
      text: "За работу автобусов в КАРГАЛЕ чиновники ставят двойку, но просят тайм-аут",
    },
  ];

  renderLastNews(another, lastNews);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) return 0;
      else {
        document
          .querySelector(".sidebar-tab.active")
          .classList.remove("active");
        tab.classList.add("active");

        const renderContent =
          tab.innerHTML === "Оренбург" ? [...oren] : [...another];
        lastNews.innerHTML = "";

        renderLastNews(renderContent, lastNews);
      }
    });
  });
});

function renderLastNews(news, block) {
  news.forEach((newItem) => {
    block.innerHTML += `<div
                class="font-times font-light pb-3 mb-6 border-mainOrange border-b-[1px]"
              >
                ${
                  newItem?.img
                    ? `
                    <img src="${newItem.img}" class="mb-5" alt="" />
                  `
                    : ""
                }
                <a href="">${newItem.text}</a>
              </div>`;
  });
}
