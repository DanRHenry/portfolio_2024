const navBtns = document.getElementsByClassName("navBtns");
const navbar = document.getElementById("navbar");

const homeList = ["home"];

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
const aboutList = ["about"];
const contactList = ["contact"];

const menuItemContentInformation = `<a href=${appList[1].link} onclick="window.open(this.href, 'newwindow', 'width=${appList[1].width},height=${appList[1].height}'); return false;">Bathroom Helper</a>`;
const navMenuItems = [
  "navbar",
  [homeList, appList, gamesList, aboutList, contactList],
  // [appList, gamesList, aboutList, contactList],
];

populateMenu(navBtns, navMenuItems[0], navMenuItems[1]);

function populateMenu(
  existingMenuItemsToCycleThrough,
  node,
  menuItemsContentArray
) {
  const nodeToAppend = document.getElementById(node);
  for (let i = 0; i < existingMenuItemsToCycleThrough.length; i++) {
    existingMenuItemsToCycleThrough[i].addEventListener("click", () => {
      const oldDisplay = document.getElementById("display");
      oldDisplay?.remove();

      const display = document.createElement("div");
      display.id = "display";

      for (let j = 0; j < menuItemsContentArray[i].length; j++) {
        console.log("menuItemsContentArray[i]: ", menuItemsContentArray[i]);
        console.log(
          "menuItemsContentArray[i][j]: ",
          menuItemsContentArray[i][j]
        );
        for (let k = 0; k < menuItemsContentArray[i][j].length; k++) {
          // for (let k = 0; k < menuItemsContentArray[i][j].length; k++) {
          //   const menuItem = menuItemsContentArray[j];
        //   console.log("K: ",k)
        //   console.log(menuItemsContentArray[i][j])
          const item = document.createElement("div");
          item.textContent = menuItemsContentArray[i][j][k].name;
        // item.textContent = menuItemsContentArray[i][k].name;
          item.className = "menuItems";
          item.id = `${(i, j, k)}`;
          item.addEventListener("click", () => {
            document.getElementById("descriptionSection")?.remove();

            const descriptionSection = document.createElement("div");
            descriptionSection.id = "descriptionSection";
            descriptionSection.textContent =
              menuItemsContentArray[i][j][k].description;
            item.append(descriptionSection);

            const link = document.createElement("a");
            link.id = "urlLink";
            link.href = menuItemsContentArray[i][j][k].link;
            link.textContent = `${menuItemsContentArray[i][j][k].name} Link`;
            link.target = "_blank";
            document.getElementById("urlLink")?.remove();
            item.after(link);
          });
          //   item.addEventListener("click", () => {
          //     const oldItems = document.getElementsByClassName("menuItems")
          //     for (let k = 0; k < oldItems.length; k++) {
          //         console.log(oldItems[k])
          //         const child = document.getElementById("active")
          //         oldItems[k].removeChild(child)
          //     }

          //     const itemDescription = document.createElement("div");
          //     itemDescription.textContent = menuItem[j].description;
          //     itemDescription.id = "active"
          //     item.after(itemDescription);
          //   });
          display.append(item);
        }
      }
      nodeToAppend.after(display);
    });
  }
}
