const loading = (() => {
  const spinner = {
    show(isShow) {
      console.log(isShow);
    }
  };

  return {
    spinner
  };
})();

export default loading;
