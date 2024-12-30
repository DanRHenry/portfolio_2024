const navBtns = document.getElementsByClassName("navBtns");
const navbar = document.getElementById("navbar");

const homeList = ["home", []];

const appList = [
  "apps",
  [
    {
      name: "Bathroom Helper",
      description:
        "This is one of my favorites, because of its simplicity. \nThis simple website is used in a high school setting to help with bathroom monitoring.\nTo prevent screen burn-in on OLED displays, I used a random vertical positioning variable.",
      link: "https://danhenrydev.com/bathroom_helper/index.html",
      image: {
        URL: "../media/Bathroom Helper.png",
        altText: "Bathroom Helper Image",
      },
      width: 1000,
      height: 800,
    },
    {
      name: "Meal Planner",
      description: "",
      link: "https://danhenrydev.com/apps/shoppingList/client/index.html",
      image: {
        URL: "../media/Meal Planner.png",
        altText: "Meal Planner Image",
      },
      width: 1000,
      height: 800,
    },
  ],
];

const gamesList = [
  "games",
  [
    {
      name: "Jeopardy",
      description:
        "This project began as a jeopardy clone, and expanded into a full-stack app that uses Websockets to create real-time cooperative gameplay, and an interface where teachers can create categories, questions and answers, and assign games to classes and units for their lesson planning.",
      image: {
        URL: "../media/Jeopardy.png",
        altText: "Jeopardy Game Image",
      },
      link: "https://danhenrydev.com/projects/jeopardy/client/index.html",
      width: 1000,
      height: 800,
    },
    {
      name: "Zorkington",
      description:
        "Zorkington began as a terminal-based Zork clone, that I later expanded to an interactive web app.",
      image: {
        URL: "../media/Zorkington.png",
        altText: "Zorkington Game Image",
      },
      link: "https://danhenrydev.com/projects/zorkington/index.html",
      width: 1000,
      heigh: 800,
    },
    // {
    //   name: "Battleship",
    //   description:
    //     "I wrote a version of Battleship to get more practice working with Websocket technology, in order to let two players play head-to-head, in real time.",
    //   image: {
    //     URL: "",
    //     altText: "Battleship Game Image",
    //   },
    //   link: "https://danhenrydev.com/projects/battleship/index.html",
    //   width: 1000,
    //   heigh: 800,
    // },
    {
      name: "Scrabble",
      description:
        "I began writing this game after a couple months of learning HTML, CSS, and a little JavaScript. While I did expand on ideas learned from other past projects, this was the first project I created on my own.",
      image: {
        URL: "../media/Scrabble.png",
        altText: "Scrabble Game Image",
      },
      link: "https://danhenrydev.com/projects/scrabble/index.html",
      width: 1000,
      heigh: 800,
    },
  ],
];

const aboutList = ["about", []];
const contactList = ["contact", []];

const navMenuItems = ["navbar", [appList, gamesList, aboutList, contactList]];

populateMenu("categories", navMenuItems[0], navMenuItems[1]);

function populateMenu(parentNode, childNodeName, menuItemsContentArray) {
  for (let i = 0; i < menuItemsContentArray.length; i++) {
    const item = document.createElement("div");
    item.className = `${childNodeName}_items`;
    item.textContent = menuItemsContentArray[i][0];
    item.addEventListener("mouseover", () => {
      const existingItems = document.getElementsByClassName(
        `${childNodeName}_items`
      );
      for (let item of existingItems) {
        item.style.color = "";
      }

      item.style.color = "white";
    });
    item.addEventListener("click", () => {
      populateMenuSubItems(item, menuItemsContentArray[i][1]);
    });
    document.getElementById(parentNode).append(item);
  }
}

function populateMenuSubItems(item, array) {
  const descriptionWindow = document.getElementById("descriptionWindow");
  descriptionWindow.textContent = "";

  const children = document.getElementsByClassName(
    `${item.className}_children`
  );

  for (let i = children.length; i >= 0; i--) {
    children[i]?.remove();
  }

  for (let i = 0; i < array.length; i++) {
    const menuSubItem = document.createElement("div");
    // menuSubItem.href = array[i].link;
    // menuSubItem.target = "_blank";

    menuSubItem.addEventListener("click", () => {
      document.getElementById("contentImage")?.remove();
      const descriptionWindow = document.getElementById("descriptionWindow");
      descriptionWindow.textContent = "";
      descriptionWindow.textContent = array[i].description;
      const image = document.createElement("img");
      image.src = array[i].image.URL;
      image.alt = array[i].image.altText;
      image.id = "contentImage";
      const br = document.createElement("br");
      descriptionWindow.append(br);
      descriptionWindow.append(image);

    const appBtn = document.createElement("button");
    appBtn.textContent = "Open";
    appBtn.id = "appBtn";

    appBtn.addEventListener("click", () => {
      window.open(
        (this.href = array[i].link),
        "newwindow",
        `width=${array[i].width},height=${array[i].height}`
      );
      return false;
    });

    const appBtnDiv = document.createElement("div")
    appBtnDiv.id = "appBtnDiv"
    document.getElementById("appBtnDiv")?.remove()

    appBtnDiv.appendChild(appBtn)

    descriptionWindow.after(appBtnDiv);

    });

    menuSubItem.textContent = array[i].name;
    menuSubItem.className = `${item.className}_children`;
    menuSubItem.style.width = 100;

    document.getElementById("submenu").append(menuSubItem);
  }
}
