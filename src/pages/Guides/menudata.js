const menus = [
  {
    name: "App 1",
    id: "app1",
    subtabs: [
      {
        name: "Document",
        id: "document",
      },
      {
        name: "Video",
        id: "video",
      }
    ]
  },
  {
    name: "App 2",
    id: "app2",
    subtabs: [
      {
        name: "Document",
        id: "document",
      },
      {
        name: "Video",
        id: "video",
      }
    ]
  }
];

export function getMenu(menuId) {
  return menus.find(({ id }) => id === menuId);
}

export function getMenus() {
  return menus;
}
