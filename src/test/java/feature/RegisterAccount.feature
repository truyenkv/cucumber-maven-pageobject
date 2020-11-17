Feature: Register Account and Login

#  Scenario: Register Account
#    Given I open the Home page
#    When I click on Visit here link
#    And I input my email to the Email ID field and Submit
#    Then I get the UserID and Password
#    When I back to Home page
#    And I enter the UserID and Password to the login form
#    And I click on Login button
#    Then I can see my UserID on the Dashboard


  Scenario Outline: Register Account
    Given I open the Home page
    And I enter the UserId "mngr295153" and Password is "Esavupy" to the login form
    When I click New Customer on the Left menu
    Then I add the user information
      |Customer Name  | Date of Birth  |Address  |City  |State  | PIN | Mobile Number  | Email | Password |
      |<Customer Name>| <Date of Birth>|<Address>|<City>|<State>|<PIN>| <Mobile Number>|<Email>|<Password>|
    When I click the Submit button
    Then I see the information of Customer displays correctly
    When I click Continue button
    Then I back to Dashboard button


    Examples:
    |Customer Name  | Date of Birth | Address         | City          | State       | PIN       | Mobile Number | Email             | Password |
    |Truyen kieu    | 10/10/1991    | 123 Ngo Tat To  | Ho Chi Minh   | Phu Nhuan   | 1234565   | 0984443434    | truyen01@yop.com  | 1234556  |

