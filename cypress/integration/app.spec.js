context("sonalake-task-react App", () => {
  it("should display the title in default route", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "List View");
  });

  it("should paginate", () => {
    cy.contains("Next").click();
    cy.contains("Previous").click();
  });

  it("should navigate ok", () => {
    cy.contains("Add new character").click();
    cy.get("h1").should("have.text", "Add View");
    cy.contains("List View").click();
    cy.get("h1").should("have.text", "List View");
  });

  it("should display the title in add character route", () => {
    cy.visit("/add");
    cy.get("h1").should("have.text", "Add View");
  });

  it("should add character ok", () => {
    cy.get("#nameInput").type("test");
    cy.get("#speciesSelect").select("Droid");
    cy.get("#male").check();
    cy.contains("Add character").click();
  });

  it("should edit character ok", () => {
    cy.visit("/edit/1");
    cy.get("#nameInput").type(" test");
    cy.contains("Submit changes").click();
  });

  it("should display the title in edit character route and has correct from value", () => {
    cy.visit("/edit/3");
    cy.get("h1").should("have.text", "Edit View");
    cy.get("#nameInput").should("have.value", "R2-D2");
  });

  it("should fire validation error after clicking submit if form value is empty", () => {
    cy.get("#nameInput").clear();
    cy.contains("Submit changes").click();
  });
});
