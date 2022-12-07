package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ForgotPasswordPage {
    WebDriver driver;

    public ForgotPasswordPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@id='EmailOrAccountNumber']")
    WebElement txt_email;
    @FindBy(xpath = "//a[contains(text(),'Forgotten Password')]")
    WebElement link_forgotpass;
    @FindBy(xpath = "//input[@id='resetPassword']")
    WebElement btn_reset;
    @FindBy(xpath = "//input[@id='Password']")
    WebElement txt_password;
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement txt_resetpass;
    @FindBy(xpath = "//*[@id=\"pri\"]/form/fieldset/div[3]/div/div/div[3]/input")
    WebElement btn_resetDetail;

    public void setEmail(String email) {
        txt_email.sendKeys(email);
    }
    public void setLink_forgotpass(){
        link_forgotpass.click();
    }
    public  void setBtn_reset()
    {
        btn_reset.click();
    }
    public void setTxt_password()
    {
        txt_password.sendKeys("AMlfn");
    }
    public void setTxt_resetpass()
    {
        txt_resetpass.sendKeys("AMlfn");
    }
    public void setBtn_resetDetail()
    {
        btn_resetDetail.click();
    }


}
