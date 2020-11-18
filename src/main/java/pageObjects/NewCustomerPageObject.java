  package pageObjects;

  import common.AbstractPage;
  import org.openqa.selenium.WebDriver;
  import pageUI.DashboardPageUI;
  import pageUI.NewCustomerPageUI;

  public class NewCustomerPageObject extends AbstractPage{
      WebDriver driver;

      public NewCustomerPageObject(WebDriver driver) {
          this.driver = driver;
      }


      public void addCustomerInforToTheForm(String customerName, String dateofBirth, String address, String city, String state, String pin, String mobileNumber, String email, String password) {
          waitForElementVisible(driver, NewCustomerPageUI.CUSTOMER_NAME_FIELD);
          sendKeyToField(driver, NewCustomerPageUI.CUSTOMER_NAME_FIELD, customerName);
          sendKeyToField(driver, NewCustomerPageUI.DATE_OF_BIRTH_FIELD, dateofBirth);
          sendKeyToField(driver, NewCustomerPageUI.ADDRESS_FIELD, address);
          sendKeyToField(driver, NewCustomerPageUI.CITY_FIELD, city);
          sendKeyToField(driver, NewCustomerPageUI.STATE_FIELD, state);
          sendKeyToField(driver, NewCustomerPageUI.PIN_FIELD, pin);
          sendKeyToField(driver, NewCustomerPageUI.EMAIL_FIELD, email);
          sendKeyToField(driver, NewCustomerPageUI.PASSWORD_FIELD, password);
          sendKeyToField(driver, NewCustomerPageUI.MOBILE_NUMBER_FIELD, mobileNumber);

      }

      public void clickOnSubmitButton() {
          waitForElementClickable(driver, NewCustomerPageUI.SUBMIT_BUTTON);
          clickToElement(driver, NewCustomerPageUI.SUBMIT_BUTTON);
      }

      public void checkUserInforIsCreateCorrectly(String customerName, String dateofBirth, String address, String city, String state, String pin, String mobileNumber, String email) {

      }
  }
