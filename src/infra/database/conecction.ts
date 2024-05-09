
import path from 'path';
import { DataTypes, Sequelize } from 'sequelize';


const current_path = path.resolve(__dirname, '..', '..', '..');

const databaseConnection = new Sequelize({
  dialect: 'sqlite',
  storage: `${current_path}/database.sqlite`
});


export const UserModel = databaseConnection.define('User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {}
)


export { databaseConnection };
