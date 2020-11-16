Feature: Register Account and Login
  Scenario: Register Account
    Given I open the Home page
    When I click on Visit here link
    And I input my email to the Email ID field and Submit
    Then I get the UserID and Password
    When I back to Home page
    And I enter the UserID and Password to the login form
    And I click on Login button
    Then I can see my UserID on the Dashboard
