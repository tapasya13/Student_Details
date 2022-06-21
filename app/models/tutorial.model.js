module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("Student_details", {
  
    Name: {
      type: Sequelize.STRING
    },
    Class: {
      type: Sequelize.STRING
    },
    Section: {
      type: Sequelize.STRING    
    },
    TotalMarks: { 
      type: Sequelize.STRING
    },

      Marks:{ 
        type: Sequelize.STRING
      },
      

  },{timestamps: false});

  return Tutorial;
};
