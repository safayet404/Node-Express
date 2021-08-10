

const mySQL = require('mysql');


const DatabaseConnectionConfig = {
    host : "localhost",
    user : "root",
    password : "",
    database : "demo"
}


const connection = mySQL.createConnection(DatabaseConnectionConfig);


connection.connect(function (error) {
    if(error)
    {
        console.log("connection failed");
    }
    else
    {
        console.log("Connectuin Success");
        //InsertData(connection);
        //DataDelete(connection);
        //DataUpdate(connection);
        DataSelect(connection);
    }
});



/*
function InsertData(connection) {

    
    let SQLQuery ="INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Zarif','5218','8','01679175553','Dacca')"
    connection.query(SQLQuery,function(error) {
        if(error)
        {
            console.log("Data Insert Failesd");
        }
        else
        {
            console.log("data insert success");
        }
    })
    
}
*/

/*
function DataDelete(connection) {
    let SQLQuery = "DELETE FROM `students_list` WHERE `id`='2'"
    connection.query(SQLQuery,function (error) {
        if(error)
        {
            console.log("Delete Failed");
        }
        else
        {
            console.log("Delete Success");
        }
    })
}

*/

/*
function DataUpdate(connection) {
    let SQLQuery = "UPDATE `students_list` SET `class`='25',`phone`='01931308917' WHERE  `id` = '5' "
    connection.query(SQLQuery,function (error) {
        if(error)
        {
            console.log("Data Update Failed");
        }
        else
        {
            console.log("Update Success");
        }
    })

}

*/

function DataSelect(connection) {

    let SQLQuery = "SELECT * FROM `students_list` WHERE `id` = '15'";
    connection.query(SQLQuery,function (error,result) {
        if(error)
        {
            console.log("Data Select Failed");
        }
        else
        {
            console.log(result);
        }
    })
    
}