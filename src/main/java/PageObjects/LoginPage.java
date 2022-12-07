package PageObjects;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    WebDriver driver;
    public LoginPage(WebDriver driver)
    {
        this.driver=driver;
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//input[@id='EmailOrAccountNumber']")
    WebElement Email_inputbox;
    @FindBy(xpath = "//input[@id='Password']")
    WebElement pass_inputbox;
    @FindBy(xpath = "//input[@id='SignInNow']")
    WebElement clicl_singhIn;


    public void setEmail_inputbox(String Email)
    {Email_inputbox.sendKeys(Email);}
    public void setPass_inputbox(String pwd)
    {pass_inputbox.sendKeys(pwd);}
    public void clickOnSingin()
    {clicl_singhIn.click();}

}
