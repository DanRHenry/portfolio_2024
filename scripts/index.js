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
      width: 1000,
      height: 800,
    },
    {
      name: "Meal Planner",
      description: "",
      link: "https://danhenrydev.com/apps/shoppingList/client/index.html",
      width: 1000,
      height: 800,
    },
  ],
];

const gamesList = [
  "games",
  {
    name: "Jeopardy",
    description:
      "This project began as a jeopardy clone, and expanded into a full-stack app that uses Websockets to create real-time cooperative gameplay, and an interface where teachers can create categories, questions and answers, and assign games to classes and units for their lesson planning.",
    link: "https://danhenrydev.com/apps/jeopardy/client/index.html",
    width: 1000,
    height: 800,
  },
  {
    name: "Zorkington",
    description:
      "Zorkington began as a terminal-based Zork clone, that I later expanded to an interactive web app.",
    link: "https://danhenrydev.com/apps/zorkington/client/index.html",
    width: 1000,
    heigh: 800,
  },
];

const aboutList = ["about", []];
const contactList = ["contact", []];

// const menuItemContentInformation = `<a href=${appList[1].link} onclick="window.open(this.href, 'newwindow', 'width=${appList[1].width},height=${appList[1].height}'); return false;">Bathroom Helper</a>`;

const navMenuItems = [
  "navbarContent",
  [homeList, appList, gamesList, aboutList, contactList],
  // [appList, gamesList, aboutList, contactList],
];

populateMenu("navbar", navMenuItems[0], navMenuItems[1]);

function populateMenu(parentNode, childNodeName, menuItemsContentArray) {
  const childNode = document.createElement("div");
  childNode.id = childNodeName;

  for (let i = 0; i < menuItemsContentArray.length; i++) {
    const item = document.createElement("div");
    item.className = `${childNodeName}_items`;
    item.textContent = menuItemsContentArray[i][0];
    item.addEventListener("click", () => {
      populateMenuSubItems(item, menuItemsContentArray[i][1]);
    });
    childNode.append(item);
  }

  document.getElementById(parentNode).append(childNode);
}

function populateMenuSubItems(item, array) {
  const children = document.getElementsByClassName(
    `${item.className}_children`
  );

  console.log(children, children.length);

  for (let i = children.length; i >= 0; i--) {
    children[i]?.remove();
  }

  for (let i = 0; i < array.length; i++) {
    // console.log("item:",item)
    const menuSubItem = document.createElement("a");
    menuSubItem.href = array[i].link;
    menuSubItem.addEventListener("click", () => {
      window.open(
        this.href,
        "newwindow",
        `width=${array[i].width},height=${array[i].height}`
      );
      return false;
    });

    menuSubItem.textContent = array[i].name;
    menuSubItem.className = `${item.className}_children`;
    item.after(menuSubItem);
  }
}
