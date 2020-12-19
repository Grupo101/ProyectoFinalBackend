'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ingresos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Usuarios',
          key:'id'
        }
      },
      personaId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Personas',
          key:'id'
        }
      },
      tipo_comprobante: {
        type: Sequelize.STRING
      },
      serie_comprobante: {
        type: Sequelize.STRING
      },
      num_comprobante: {
        type: Sequelize.STRING
      },
      impuesto: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ingresos');
  }
};