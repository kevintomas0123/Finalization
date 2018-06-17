module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    companyName: {
      type: DataTypes.STRING,
     
     
    },
    sharesOut: {
      type: DataTypes.INTEGER,
    //  allowNull: false,
     // validate: {
    //    isNumeric: true
    // }
    },
    year: {
      type: DataTypes.INTEGER,
      
     
    },
    sales: {
      type: DataTypes.INTEGER,
     
      
    },
    cogs: {
      type: DataTypes.INTEGER,
     
      
    },
    rdExp: {
      type: DataTypes.INTEGER,
     
    },
    sga: {
      type: DataTypes.INTEGER,
      
    },
    depAmo: {
      type: DataTypes.INTEGER,
   
    },
    intExp: {
      type: DataTypes.INTEGER,
    
    },
    nonOpInc: {
      type: DataTypes.INTEGER,
    
    },
    incTax: {
      type: DataTypes.INTEGER,
  
    },
    otherInc: {
      type: DataTypes.INTEGER,
    
    },
    proIncTaxes: {
      type: DataTypes.INTEGER,
     
    },
    opCashSec: {
      type: DataTypes.INTEGER,
     
    },
    receiv: {
      type: DataTypes.INTEGER,
    
    },
    inven: {
      type: DataTypes.INTEGER,
      
    },
    otherCA: {
      type: DataTypes.INTEGER,
   
    },
    ppe: {
      type: DataTypes.INTEGER,
     
    },
    goodwill: {
      type: DataTypes.INTEGER,
     
    },
    otherA: {
      type: DataTypes.INTEGER,
     
    },
    currDebt: {
      type: DataTypes.INTEGER,
     
    },
    payable: {
      type: DataTypes.INTEGER,
    
    },
    incTaxPay: {
      type: DataTypes.INTEGER,
    
    },
    otherCurrLiab: {
      type: DataTypes.INTEGER,
     
    },
    ltd: {
      type: DataTypes.INTEGER,
   
    },
    otherLiab: {
      type: DataTypes.INTEGER,
      
    },
    defTaxes: {
      type: DataTypes.INTEGER,
    
    },
    minInterest: {
      type: DataTypes.INTEGER,
    
    },
    preStock: {
      type: DataTypes.INTEGER,
     
    },
      picc: {
        type: DataTypes.INTEGER,
     
      }
    ,
    retEarn: {
      type: DataTypes.INTEGER,
     
    },

  });

  return Post;
};
