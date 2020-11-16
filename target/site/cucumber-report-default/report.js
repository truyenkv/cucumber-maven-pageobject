$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegisterAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Register Account and Login",
  "description": "",
  "id": "register-account-and-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Register Account",
  "description": "",
  "id": "register-account-and-login;register-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Visit here link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I input my email to the Email ID field and Submit",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I get the UserID and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I back to Home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the UserID and Password to the login form",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see my UserID on the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.i_open_the_home_page()"
});
formatter.result({
  "duration": 5468866466,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_click_on_visit_here_link()"
});
formatter.result({
  "duration": 487577563,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.i_input_my_email_to_the_email_id_field_and_submit()"
});
formatter.result({
  "duration": 1967431269,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.i_get_the_userid_and_password()"
});
formatter.result({
  "duration": 97596275,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.i_back_to_home_page()"
});
formatter.result({
  "duration": 1176977236,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_enter_the_userid_and_password_to_the_login_form()"
});
formatter.result({
  "duration": 200117072,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 1469391801,
  "status": "passed"
});
formatter.match({
  "location": "DashboardPageSteps.i_can_see_my_userid_on_the_dashboard()"
});
formatter.result({
  "duration": 42990882,
  "status": "passed"
});
});