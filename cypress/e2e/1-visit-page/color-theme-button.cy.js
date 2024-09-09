/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

describe("colorThemeButton 동작 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-test-id=color-theme-button]").as("colorThemeButton");
  });

  it("페이지 방문 시 body에 적용된 color theme과 동일한 속성을 가진 버튼이 노출된다.", () => {
    cy.get("body")
      .invoke("attr", "data-color-theme")
      .then((initialcolorTheme) => {
        cy.get("@colorThemeButton")
          .invoke("attr", "data-color-theme")
          .should("eq", initialcolorTheme);
      });
  });

  it("colorThemeButton을 클릭 했을 때 body와 button의 data-color-theme 속성이 light라면 dark, dark라면 light로 전환된다.", () => {
    cy.get("body")
      .invoke("attr", "data-color-theme")
      .then((currentColorTheme) => {
        cy.get("@colorThemeButton").click();
        expect(
          cy
            .get("body")
            .invoke("attr", "data-color-theme")
            .should("eq", currentColorTheme === "dark" ? "light" : "dark")
        );
        expect(
          cy
            .get("@colorThemeButton")
            .invoke("attr", "data-color-theme")
            .should("eq", currentColorTheme === "dark" ? "light" : "dark")
        );
      });
  });
});
