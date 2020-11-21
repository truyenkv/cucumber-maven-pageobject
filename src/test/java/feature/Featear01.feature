@feature01
Feature: Register Account and Login

  @register @test1 @textContext
  Scenario: Register Account
    Given I open the Home page
    When I click on Visit here link
    And I input my email to the Email ID field and Submit
    Then I get the UserID and Password
    When I back to Home page
    And I enter the UserID and Password to the login form
    And I click on Login button
    Then I can see my UserID on the Dashboard

  @create @test2
  Scenario Outline: Create User Account
    Given I open the Home page
    And I enter the UserId "mngr295153" and Password is "Esavupy" to the login form
    When I click New Customer on the Left menu
    Then I add the user information
      |CustomerName  | DateofBirth  |Address  |City  |State  | PIN | MobileNumber  | Email | Password |
      |<CustomerName>| <DateofBirth>|<Address>|<City>|<State>|<PIN>| <MobileNumber>|<Email>|<Password>|
    When I click the Submit button
    Then I see the information of Customer displays correctly
      |CustomerName  | DateofBirth  |Address  |City  |State  | PIN | MobileNumber  | Email | Password |
      |<CustomerName>| <DateofBirth>|<Address>|<City>|<State>|<PIN>| <MobileNumber>|<Email>|<Password>|
    When I click Continue button
    Then I back to Dashboard button and see "mngr295153" display.


    Examples:
    |CustomerName | DateofBirth | Address         | City          | State       | PIN       | MobileNumber | Email            | Password |
    |Truyenkieu   | 10-10-1991  | 123 Ngo Tat To  | Ho Chi Minh   | Phu Nhuan   | 123456   | 0984443434   | t40d@yop.com | Aa123456 |

