const menus = [
  {
    name: "I. Hệ thống vận hành cơ sở dữ liệu đất đai",
    id: "app1",
    subtabs: [
      {
        name: "1. Tài liệu hướng dẫn",
        id: "document",
      },
      {
        name: "2. Video hướng dẫn",
        id: "video",
      }
    ]
  },
  {
    name: "II. Hệ thống xây dựng cơ sở dữ liệu đất đai",
    id: "app2",
    subtabs: [
      {
        name: "1. Tài liệu hướng dẫn",
        id: "document",
      },
      {
        name: "2. Video hướng dẫn",
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
