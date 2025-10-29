module.exports = (sequelize, DataTypes) => {
    const komik = sequelize.define("Komik",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        penulis: {
           type: DataTypes.STRING,
           allowNull: false 
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: false 
        }
    },{
         tableName: "komik",
         freezeTableName: true,
         timestamps: true,
    }); 
    return komik;

};