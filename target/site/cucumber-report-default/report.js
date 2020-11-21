$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Featear01.feature");
formatter.feature({
  "line": 2,
  "name": "Register Account and Login",
  "description": "",
  "id": "register-account-and-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@feature01"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Register Account",
  "description": "",
  "id": "register-account-and-login;register-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@register"
    },
    {
      "line": 4,
      "name": "@test1"
    },
    {
      "line": 4,
      "name": "@textContext"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Visit here link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I input my email to the Email ID field and Submit",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I get the UserID and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I back to Home page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter the UserID and Password to the login form",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I can see my UserID on the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.i_open_the_home_page()"
});
formatter.result({
  "duration": 5858472080,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_click_on_visit_here_link()"
});
formatter.result({
  "duration": 583750412,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.i_input_my_email_to_the_email_id_field_and_submit()"
});
formatter.result({
  "duration": 2038404121,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.i_get_the_userid_and_password()"
});
formatter.result({
  "duration": 82281867,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.i_back_to_home_page()"
});
formatter.result({
  "duration": 1183763164,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_enter_the_userid_and_password_to_the_login_form()"
});
formatter.result({
  "duration": 204047687,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 486207355,
  "status": "passed"
});
formatter.match({
  "location": "DashboardPageSteps.i_can_see_my_userid_on_the_dashboard()"
});
formatter.result({
  "duration": 703421003,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Create User Account",
  "description": "",
  "id": "register-account-and-login;create-user-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@create"
    },
    {
      "line": 15,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I open the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter the UserId \"mngr295153\" and Password is \"Esavupy\" to the login form",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click New Customer on the Left menu",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I add the user information",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "DateofBirth",
        "Address",
        "City",
        "State",
        "PIN",
        "MobileNumber",
        "Email",
        "Password"
      ],
      "line": 21
    },
    {
      "cells": [
        "\u003cCustomerName\u003e",
        "\u003cDateofBirth\u003e",
        "\u003cAddress\u003e",
        "\u003cCity\u003e",
        "\u003cState\u003e",
        "\u003cPIN\u003e",
        "\u003cMobileNumber\u003e",
        "\u003cEmail\u003e",
        "\u003cPassword\u003e"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I see the information of Customer displays correctly",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "DateofBirth",
        "Address",
        "City",
        "State",
        "PIN",
        "MobileNumber",
        "Email",
        "Password"
      ],
      "line": 25
    },
    {
      "cells": [
        "\u003cCustomerName\u003e",
        "\u003cDateofBirth\u003e",
        "\u003cAddress\u003e",
        "\u003cCity\u003e",
        "\u003cState\u003e",
        "\u003cPIN\u003e",
        "\u003cMobileNumber\u003e",
        "\u003cEmail\u003e",
        "\u003cPassword\u003e"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click Continue button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I back to Dashboard button and see \"mngr295153\" display.",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "register-account-and-login;create-user-account;",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "DateofBirth",
        "Address",
        "City",
        "State",
        "PIN",
        "MobileNumber",
        "Email",
        "Password"
      ],
      "line": 32,
      "id": "register-account-and-login;create-user-account;;1"
    },
    {
      "cells": [
        "Truyenkieu",
        "10-10-1991",
        "123 Ngo Tat To",
        "Ho Chi Minh",
        "Phu Nhuan",
        "123456",
        "0984443434",
        "t40d@yop.com",
        "Aa123456"
      ],
      "line": 33,
      "id": "register-account-and-login;create-user-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Create User Account",
  "description": "",
  "id": "register-account-and-login;create-user-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@create"
    },
    {
      "line": 15,
      "name": "@test2"
    },
    {
      "line": 1,
      "name": "@feature01"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I open the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter the UserId \"mngr295153\" and Password is \"Esavupy\" to the login form",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click New Customer on the Left menu",
  "keyword": "When "
});
formatter.step({
  "line": 20,
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
        "CustomerName",
        "DateofBirth",
        "Address",
        "City",
        "State",
        "PIN",
        "MobileNumber",
        "Email",
        "Password"
      ],
      "line": 21
    },
    {
      "cells": [
        "Truyenkieu",
        "10-10-1991",
        "123 Ngo Tat To",
        "Ho Chi Minh",
        "Phu Nhuan",
        "123456",
        "0984443434",
        "t40d@yop.com",
        "Aa123456"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I see the information of Customer displays correctly",
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
        "CustomerName",
        "DateofBirth",
        "Address",
        "City",
        "State",
        "PIN",
        "MobileNumber",
        "Email",
        "Password"
      ],
      "line": 25
    },
    {
      "cells": [
        "Truyenkieu",
        "10-10-1991",
        "123 Ngo Tat To",
        "Ho Chi Minh",
        "Phu Nhuan",
        "123456",
        "0984443434",
        "t40d@yop.com",
        "Aa123456"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click Continue button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I back to Dashboard button and see \"mngr295153\" display.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.i_open_the_home_page()"
});
formatter.result({
  "duration": 1881528483,
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
  "duration": 1517444610,
  "status": "passed"
});
formatter.match({
  "location": "DashboardPageSteps.i_click_new_customer_on_the_left_menu()"
});
formatter.result({
  "duration": 687119567,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerPageSteps.i_add_the_user_information(DataTable)"
});
formatter.result({
  "duration": 827906619,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerPageSteps.i_click_the_submit_button()"
});
formatter.result({
  "duration": 536663027,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerPageSteps.i_see_the_information_of_customer_displa_correctly(DataTable)"
});
formatter.result({
  "duration": 20928210,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Email Address Already Exist !!}\n  (Session info: chrome\u003d87.0.4280.67): Email Address Already Exist !!\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacintoshHDsMBP\u0027, ip: \u00272405:4802:9197:2a50:a683:e7ff:fe7f:44cf%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.67, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/fx/kgm9kb4x1g3...}, goog:chromeOptions: {debuggerAddress: localhost:51545}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b5a8602b07deac821442ab313033c8dd\n*** Element info: {Using\u003dxpath, value\u003d//td[contains(text(),\u0027Customer Name\u0027)]/following-sibling::td}\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat common.AbstractPage.waitForElementVisible(AbstractPage.java:332)\n\tat pageObjects.NewCustomerPageObject.getCustomerName(NewCustomerPageObject.java:36)\n\tat stepDefinitions.NewCustomerPageSteps.i_see_the_information_of_customer_displa_correctly(NewCustomerPageSteps.java:42)\n\tat ✽.Then I see the information of Customer displays correctly(Featear01.feature:24)\n",
  "status": "failed"
});
formatter.match({
  "location": "NewCustomerPageSteps.i_click_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr295153",
      "offset": 36
    }
  ],
  "location": "DashboardPageSteps.i_back_to_dashboard_button_and_see_something_display(String)"
});
formatter.result({
  "status": "skipped"
});
});