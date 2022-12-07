Feature:Add to cart Functionality
  Scenario: validating add to cart functionality
    Given :you are on next home page
    Then :click on Women link dispalyed on home page
    Then :click on balzer link dispalyed on home page
    Then :click on "Tailored Sequin Blazer Jacket" prodoct from the dispalyed product list
    And :click on "Gold" as a color from select color dropdown from the displayed product
    Then :select "Regular" option from the Fit and size as "12" from Size option on dispalyed product
    And :click on add to bag option
    And :you should get the popup as 1 item in the bag
    When :you click on view bag link option from popup
    Then :you should able to see product in shopping bag

