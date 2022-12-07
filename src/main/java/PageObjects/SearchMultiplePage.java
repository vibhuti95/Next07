package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchMultiplePage {
    WebDriver driver;
    public  SearchMultiplePage( WebDriver drive)
    {
        this.driver=drive;
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath="*//[class='components__StyledTextWrapper-sc-68pb26-3 bwUPEB']/h1/span[1]")
    WebElement txt_jeans;




}
