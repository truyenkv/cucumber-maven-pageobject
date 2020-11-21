  package pageObjects;

  import common.AbstractPage;
  import org.openqa.selenium.WebDriver;
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

      public String getCustomerName(){
          waitForElementVisible(driver, NewCustomerPageUI.CUSTOMER_NAME);
          return getElementText(driver, NewCustomerPageUI.CUSTOMER_NAME);

      }
      public String getBirthday(){
          waitForElementVisible(driver, NewCustomerPageUI.BIRTHDAY);
          System.out.println(getElementText(driver, NewCustomerPageUI.BIRTHDAY));
          return coverDateTimeFormat(getElementText(driver, NewCustomerPageUI.BIRTHDAY).toString());
      }
      public String getAddress(){
          waitForElementVisible(driver, NewCustomerPageUI.ADDRESS);
          return getElementText(driver, NewCustomerPageUI.ADDRESS);
      }
      public String getCity(){
          waitForElementVisible(driver, NewCustomerPageUI.CITY);
          return getElementText(driver, NewCustomerPageUI.CITY);
      }
      public String getState(){
          waitForElementVisible(driver, NewCustomerPageUI.STATE);
          return getElementText(driver, NewCustomerPageUI.STATE);
      }
      public String getPin(){
          waitForElementVisible(driver, NewCustomerPageUI.PIN);
          return getElementText(driver, NewCustomerPageUI.PIN);
      }
      public String getMobile(){
          waitForElementVisible(driver, NewCustomerPageUI.MOBILE);
          return getElementText(driver, NewCustomerPageUI.MOBILE);
      }
      public String getEmail(){
          waitForElementVisible(driver, NewCustomerPageUI.EMAIL);
          return getElementText(driver, NewCustomerPageUI.EMAIL);
      }

      public DashboardPageObject clickOnContinueButton() {
          waitForElementClickable(driver, NewCustomerPageUI.CONTINUE_BUTTON);
          clickToElement(driver, NewCustomerPageUI.CONTINUE_BUTTON);
          return PageGeneratorManager.getDashboard(driver);
      }
  }
