/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

const assertElementLength = (element, length) => {
  cy.findAllByTestId(element).should("have.length", length);
};

Cypress.Commands.add("getElementByIndex", (element, index) => {
  return cy.findAllByTestId(element).eq(index);
});

describe("페이지 진입 시 콘텐츠 노출 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("주요 게시글 타이틀이 노출된다.", () => {
    cy.findByTestId("feature-post-list").within(() => {
      cy.findByText("주요 게시글").should("exist");
    });
  });

  it("주요 게시글 목록이 노출된다.", () => {
    cy.findByTestId("feature-post-list").within(() => {
      assertElementLength("post-card", 8);
    });
  });
  it("주요 게시글 포스트 카드를 클릭하면 포스트 상세 페이지로 이동한다.", () => {
    cy.findByTestId("feature-post-list").within(() => {
      cy.getElementByIndex("post-card", 0)
        .find("a")
        .invoke("attr", "href")
        .then((postUrl) => {
          cy.getElementByIndex("post-card", 0).click();
          cy.url().should("eq", `${Cypress.env("baseUrl")}${postUrl}`);
        });
    });
  });

  it("최근 게시글 타이틀이 노출된다.", () => {
    cy.findByTestId("recent-post-list").within(() => {
      cy.findByText("최근 게시글").should("exist");
    });
  });

  it("최근 게시글 목록이 노출된다.", () => {
    cy.findByTestId("recent-post-list").within(() => {
      assertElementLength("post-list-item", 10);
    });
  });

  it("최신 게시글 포스트 카드를 클릭하면 포스트 상세 페이지로 이동한다.", () => {
    cy.findByTestId("recent-post-list").within(() => {
      cy.getElementByIndex("post-list-item", 0)
        .find("a")
        .invoke("attr", "href")
        .then((postUrl) => {
          cy.getElementByIndex("post-list-item", 0).click();
          cy.url().should("eq", `${Cypress.env("baseUrl")}${postUrl}`);
        });
    });
  });
});
