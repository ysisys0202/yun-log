const getColorTheme = () => {
  return window.localStorage.getItem("colorTheme");
};

const initColorTheme = () => {
  const savedColorTheme = getColorTheme();

  if (savedColorTheme) {
    if (savedColorTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    return;
  }

  const colorThemeMatch = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = colorThemeMatch.matches;

  if (isDark) {
    document.body.classList.add("dark");
  }

  colorThemeMatch.addEventListener("change", (event) => {
    if (event.matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
};

initColorTheme();
