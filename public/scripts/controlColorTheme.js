const getColorTheme = () => {
  return window.localStorage.getItem("colorTheme");
};
const setColotTheme = (colorTheme) => {
  document.body.setAttribute("data-color-theme", colorTheme);
};
const initColorTheme = () => {
  const savedColorTheme = getColorTheme();

  if (savedColorTheme) {
    if (savedColorTheme === "dark") {
      setColotTheme("dark");
    } else {
      setColotTheme("light");
    }
    return;
  }

  const colorThemeMatch = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = colorThemeMatch.matches;

  if (isDark) {
    setColotTheme("dark");
  } else {
    setColotTheme("light");
  }

  colorThemeMatch.addEventListener("change", (event) => {
    if (event.matches) {
      setColotTheme("dark");
    } else {
      setColotTheme("light");
    }
  });
};

initColorTheme();
