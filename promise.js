const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotions) => {
  let promiseTheaterIXXArr = await promiseTheaterIXX();
  let promiseTheaterVGCArr = await promiseTheaterVGC();
  let allArr = promiseTheaterIXXArr.concat(promiseTheaterVGCArr);
  let angry = notAngry = 0;

  allArr.forEach(element => {
    if (element.hasil === 'marah') angry++;
    else notAngry++;
  });

  return emotions === 'marah'
        ? angry
        : notAngry;
};

module.exports = {
  promiseOutput,
};
