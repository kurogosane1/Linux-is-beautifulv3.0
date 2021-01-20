const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");
import Tag from "./Category";

const GPU = sequelize.define("GPU", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Category: {
    type: DataTypes.STRING,
    references: {
      model: Tag,
      key: "Tag_Description",
    },
  },
});

GPU.sync({ force: false }).then(() => {
  GPU.bulkCreate([
    {
      id: "gpu-1",
      name: "Nvidia RTX 3050 with 6GB of GDDR8 memory",
      cost: 250,
      Category: "Laptop",
    },
    {
      id: "gpu-2",
      name: "Nvidia RTX 3060 with 8GB of GDDR8 memory",
      cost: 300,
      Category: "Laptop",
    },
    {
      id: "gpu-3",
      name: "Nvidia RTX 3060 Super with 8GB of GDDR8 memory",
      cost: 400,
      Category: "Laptop",
    },
    {
      id: "gpu-4",
      name: "Nvidia RTX 3070 with 8GB of GDDR8 memory",
      cost: 700,
      Category: "Laptop",
    },
    {
      id: "gpu-5",
      name: "Nvidia RTX 3080 with 8GB of GDDR8 memory",
      cost: 850,
      Category: "Laptop",
    },
    {
      id: "tabG1",
      name: "Zues1G Graphics",
      cost: 200,
      Category: "Tablet",
    },
    {
      id: "SOC1",
      name: "M1 Graphics",
      cost: 100,
      Category: "Phone",
    },
    {
      id: "deskGPU-1",
      name: "Nvidia RTX 3080 with 10GB GDDR8 Memory Desktop",
      cost: 850,
      Category: "Desktop",
    },
    {
      id: "deskGPU-2",
      name: "Nvidia RTX Quadro 4000 with 24GB of GDDR8 Memory Deskotp",
      cost: 2500,
      Category: "Desktop",
    },
    {
      id: "deskGPU-2",
      name: "Nvidia RTX 3090 with 24GB GDDR8 Memory Desktop",
      cost: 1500,
      Category: "Desktop",
    },
  ]);
});
module.exports = GPU;
