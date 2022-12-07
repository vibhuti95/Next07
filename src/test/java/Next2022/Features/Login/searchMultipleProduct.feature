Feature: search functionality
  Scenario Outline: validate search functionality
    Given :you are on next home page
    When :I enter a product name as"<productname>"
    And :I click on search icon
    Then :I should able to see all "<productname>" as result
    Examples:
      |  productname|
      |Jeans  |
      |T-shirt|
      |Dresses|
      |Chrismas tree|


