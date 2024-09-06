/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

describe("페이지 진입 시 콘텐츠 노출 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("주요 게시글 목록이 노출된다.", () => {
    cy.get("[data-test-id=feature-post-list]").within(() => {
      cy.findByText("주요 게시글");
      cy.fixture("postList").then((postList) => {
        //서버에서 함수로 데이터 불러오는 경우 테스트가 어려움, 좀 더 알아본 후 업데이트
        // postList.forEach(({ title }) => {
        //   cy.contains(title);
        // });
      });
    });
  });
  it("최근 게시글 목록이 노출된다.", () => {
    cy.fixture("postList").as("recentPostsList");
    cy.get("[data-test-id=recent-post-list]").within(() => {
      cy.findByText("최근 게시글");
    });
  });
});
