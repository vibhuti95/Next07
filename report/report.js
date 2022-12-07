$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/vibhutitandel/CUCUMBER PROJECTS/NEXT/src/test/java/Next2022/Features/Login/AddTocart.feature");
formatter.feature({
  "line": 1,
  "name": "Add to cart Functionality",
  "description": "",
  "id": "add-to-cart-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6314611292,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "validating add to cart functionality",
  "description": "",
  "id": "add-to-cart-functionality;validating-add-to-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": ":you are on next home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": ":click on Women link dispalyed on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": ":click on \"Tailored Sequin Blazer Jacket\" prodoct from the dispalyed product list",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": ":click on \"Gold\" as a color from select color dropdown from the displayed product",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": ":select \"Regular\" option from the Fit and size as \"12\" from Size option on dispalyed product",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": ":click on add to bag option",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": ":you should get the popup as 1 item in the bag",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": ":you click on view bag link option from popup",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": ":you should able to see product in shopping bag",
  "keyword": "Then "
});
formatter.match({
  "location": "stepToapplication.you_are_on_next_home_page()"
});
formatter.result({
  "duration": 228208208,
  "status": "passed"
});
formatter.match({
  "location": "stepToapplication.click_on_Women_link_dispalyed_on_home_page()"
});
formatter.result({
  "duration": 5059319417,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Vibhutis-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:44f:9cee:56bf:b26d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.4\u0027, java.version: \u00271.8.0_342\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:315)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$14(JsonOutput.java:152)\n\tat org.openqa.selenium.json.JsonOutput$SafeBiConsumer.accept(JsonOutput.java:407)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:261)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$19(JsonOutput.java:165)\n\tat java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$20(JsonOutput.java:165)\n\tat org.openqa.selenium.json.JsonOutput$SafeBiConsumer.accept(JsonOutput.java:407)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:261)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:174)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:173)\n\tat org.openqa.selenium.json.JsonOutput$SafeBiConsumer.accept(JsonOutput.java:407)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:261)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:252)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:614)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:640)\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:596)\n\tat PageObjects.ProductSearchPage.ClickOnBlazerlink(ProductSearchPage.java:49)\n\tat Next2022.steps.stepToapplication.click_on_Women_link_dispalyed_on_home_page(stepToapplication.java:84)\n\tat ✽.Then :click on Women link dispalyed on home page(/Users/vibhutitandel/CUCUMBER PROJECTS/NEXT/src/test/java/Next2022/Features/Login/AddTocart.feature:4)\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Vibhutis-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:44f:9cee:56bf:b26d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.4\u0027, java.version: \u00271.8.0_342\u0027\nDriver info: driver.version: RemoteWebDriver\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:276)\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:614)\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:640)\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:596)\n\t\tat PageObjects.ProductSearchPage.ClickOnBlazerlink(ProductSearchPage.java:49)\n\t\tat Next2022.steps.stepToapplication.click_on_Women_link_dispalyed_on_home_page(stepToapplication.java:84)\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:34)\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:30)\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\t\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:311)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$14(JsonOutput.java:152)\n\tat org.openqa.selenium.json.JsonOutput$SafeBiConsumer.accept(JsonOutput.java:407)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:261)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$19(JsonOutput.java:165)\n\tat java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$20(JsonOutput.java:165)\n\tat org.openqa.selenium.json.JsonOutput$SafeBiConsumer.accept(JsonOutput.java:407)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:261)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:174)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:173)\n\tat org.openqa.selenium.json.JsonOutput$SafeBiConsumer.accept(JsonOutput.java:407)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:261)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:252)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:614)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:640)\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:596)\n\tat PageObjects.ProductSearchPage.ClickOnBlazerlink(ProductSearchPage.java:49)\n\tat Next2022.steps.stepToapplication.click_on_Women_link_dispalyed_on_home_page(stepToapplication.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@id\u003d\"catalogue\"]/div/div[2]/div/div[2]/div/div/div/div/ul/li[3]/a\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Vibhutis-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:44f:9cee:56bf:b26d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.4\u0027, java.version: \u00271.8.0_342\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 107.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20221110173214, moz:geckodriverVersion: 0.32.0, moz:headless: false, moz:platformVersion: 21.5.0, moz:processID: 1358, moz:profile: /var/folders/_w/_hcqvmld0yd..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a969631f-40d7-4e41-b1fb-fc4a36a3ef53\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"catalogue\"]/div/div[2]/div/div[2]/div/div/div/div/ul/li[3]/a}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy14.getWrappedElement(Unknown Source)\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\n\t... 69 more\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tailored Sequin Blazer Jacket",
      "offset": 11
    }
  ],
  "location": "stepToapplication.click_on_prodoct_from_the_dispalyed_product_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gold",
      "offset": 11
    }
  ],
  "location": "stepToapplication.click_on_as_a_color_from_select_color_dropdown_from_the_displayed_product(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Regular",
      "offset": 9
    },
    {
      "val": "12",
      "offset": 51
    }
  ],
  "location": "stepToapplication.select_option_from_the_Fit_and_size_as_from_Size_option_on_dispalyed_product(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepToapplication.click_on_add_to_bag_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "stepToapplication.you_should_get_the_popup_as_item_in_the_bag(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepToapplication.you_click_on_view_bag_link_option_from_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepToapplication.you_should_able_to_see_product_in_shopping_bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 439072791,
  "status": "passed"
});
});