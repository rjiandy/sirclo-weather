This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To Run Test Use **npm test**
To Run App Use **npm start**

This test project was created to fulfill SIRCLO requirement.

**Assumptions**:
  No `cnt=5` used to fulfill daily temperature requirement, so for temperature are counted from _average_ all 24 / 3 (One Day   Average) combined with all *min* *max* diff on one day then divided by provided data (supposed to be 8 for 24 / 3)

**Consideration**:
 Not using redux / redux saga to make sure the project are slim, clean, and reduce complexity.

**Side Notes**:
  Jest snapshot are not working caused by some `node_modules` or incompatible settings (Hypothesis need to eject and configure   jest config)
