// Creating our Portfolio Model
module.exports = function(sequelize, DataTypes) {
  const Portfolio = sequelize.define("porfolio", {
    // Type of Crypto Currency Owned
    currency: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Current exchange rate of crypto
    xrate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Amount of Crypto owned by User
    amountOwned: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Price crypto was purchased at by User
    buyPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    buyDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return Portfolio;
};
