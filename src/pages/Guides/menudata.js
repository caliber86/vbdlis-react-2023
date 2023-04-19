const menus = [
  {
    name: "I. Hệ thống vận hành Cơ sở dữ liệu Đất đai",
    id: "operating-app",
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
    name: "II. Hệ thống xây dựng Cơ sở dữ liệu Đất đai",
    id: "constructor-app",
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
