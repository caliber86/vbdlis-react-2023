
export default class DataHelper {
  static getDataJson = (url) => {
    return (fetch(url)
      .then(function (res) {
        return res.json();
      })
      // .then(function (json) {
      //   return json;
      // })
    );
  };
}

export const isEmpty = (value) => {
  if (value === undefined || value === null || value === '') {
    return true;
  }
  if (typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
};
