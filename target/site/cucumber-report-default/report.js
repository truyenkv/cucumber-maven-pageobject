$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegisterAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Register Account and Login",
  "description": "",
  "id": "register-account-and-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#  Scenario: Register Account"
    },
    {
      "line": 4,
      "value": "#    Given I open the Home page"
    },
    {
      "line": 5,
      "value": "#    When I click on Visit here link"
    },
    {
      "line": 6,
      "value": "#    And I input my email to the Email ID field and Submit"
    },
    {
      "line": 7,
      "value": "#    Then I get the UserID and Password"
    },
    {
      "line": 8,
      "value": "#    When I back to Home page"
    },
    {
      "line": 9,
      "value": "#    And I enter the UserID and Password to the login form"
    },
    {
      "line": 10,
      "value": "#    And I click on Login button"
    },
    {
      "line": 11,
      "value": "#    Then I can see my UserID on the Dashboard"
    }
  ],
  "line": 14,
  "name": "Register Account",
  "description": "",
  "id": "register-account-and-login;register-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I open the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter the UserId \"mngr295153\" and Password is \"Esavupy\" to the login form",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click New Customer on the Left menu",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I add the user information",
  "rows": [
    {
      "cells": [
        "Customer Name",
        "Date of Birth",
        "Address",
        "City",
        "State",
        "PIN",
        "Mobile Number",
        "Email",
        "Password"
      ],
      "line": 19
    },
    {
      "cells": [
        "\u003cCustomer Name\u003e",
        "\u003cDate of Birth\u003e",
        "\u003cAddress\u003e",
        "\u003cCity\u003e",
        "\u003cState\u003e",
        "\u003cPIN\u003e",
        "\u003cMobile Number\u003e",
        "\u003cEmail\u003e",
        "\u003cPassword\u003e"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see the information of Customer displays correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click Continue button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I back to Dashboard button",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "register-account-and-login;register-account;",
  "rows": [
    {
      "cells": [
        "Customer Name",
        "Date of Birth",
        "Address",
        "City",
        "State",
        "PIN",
        "Mobile Number",
        "Email",
        "Password"
      ],
      "line": 28,
      "id": "register-account-and-login;register-account;;1"
    },
    {
      "cells": [
        "Truyen kieu",
        "10/10/1991",
        "123 Ngo Tat To",
        "Ho Chi Minh",
        "Phu Nhuan",
        "1234565",
        "0984443434",
        "truyen01@yop.com",
        "1234556"
      ],
      "line": 29,
      "id": "register-account-and-login;register-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Register Account",
  "description": "",
  "id": "register-account-and-login;register-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I open the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter the UserId \"mngr295153\" and Password is \"Esavupy\" to the login form",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click New Customer on the Left menu",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I add the user information",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "rows": [
    {
      "cells": [
        "Customer Name",
        "Date of Birth",
        "Address",
        "City",
        "State",
        "PIN",
        "Mobile Number",
        "Email",
        "Password"
      ],
      "line": 19
    },
    {
      "cells": [
        "Truyen kieu",
        "10/10/1991",
        "123 Ngo Tat To",
        "Ho Chi Minh",
        "Phu Nhuan",
        "1234565",
        "0984443434",
        "truyen01@yop.com",
        "1234556"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see the information of Customer displays correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click Continue button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I back to Dashboard button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.i_open_the_home_page()"
});
formatter.result({
  "duration": 5323175424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr295153",
      "offset": 20
    },
    {
      "val": "Esavupy",
      "offset": 49
    }
  ],
  "location": "HomePageSteps.i_enter_the_userid_something_and_password_is_something_to_the_login_form(String,String)"
});
formatter.result({
  "duration": 2813677,
  "status": "passed"
});
formatter.match({
  "location": "DashboardPageSteps.i_click_new_customer_on_the_left_menu()"
});
formatter.result({
  "duration": 1003543,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerPageSteps.i_add_the_user_information(DataTable)"
});
formatter.result({
  "duration": 2104284,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerPageSteps.i_click_the_submit_button()"
});
formatter.result({
  "duration": 37875,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerPageSteps.i_see_the_information_of_customer_displa_correctly()"
});
formatter.result({
  "duration": 41392,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerPageSteps.i_click_continue_button()"
});
formatter.result({
  "duration": 28676,
  "status": "passed"
});
formatter.match({
  "location": "DashboardPageSteps.i_back_to_dashboard_button()"
});
formatter.result({
  "duration": 24360,
  "status": "passed"
});
});