
const MongoClient = require('mongodb').MongoClient;


const url = "mongodb+srv://safayetDB:ivebecomesonumb@cluster0.qwspl.mongodb.net/school?retryWrites=true&w=majority";

const config = {useUnifiedTopology : true};

MongoClient.connect(url,config,function (error,MyMongoClient) {
    if(error)
    {
        console.log("Connection failed");
    }
    else
    {
        console.log("Successfully Connected");
        //InsertData(MyMongoClient);
       //DeleteData(MyMongoClient);
       //FindWithOutCondition(MyMongoClient)
       //FindWithCondition(MyMongoClient);
       //FindAllData(MyMongoClient);
       //FindAllDataByProjection(MyMongoClient);
       //FindDataByQuery(MyMongoClient);
       //FindDataByLimit(MyMongoClient);
       //FindDataBySort(MyMongoClient);
       //UpdateData(MyMongoClient);
       CreateCollection(MyMongoClient);
    }
})

function InsertData(MyMongoClient) {
    const MyDatabase = MyMongoClient.db("school")

    const MyCollection = MyDatabase.collection('students');
   const MyData = {
        name : "Fahad Bodda",
        Roll : 212-0135-006,
        City : "Noakhali"
    }
 
    MyCollection.insertOne(MyData,function (error) {
        if(error)
        {
            console.log('Insert Failed');
        }
        else
        {
            console.log("Insert Success");
        }
    })
  
}



function DeleteData(MyMongoClient) {
    const MyDatabase = MyMongoClient.db('school');
    const MyCollection = MyDatabase.collection('students');
    const DeleteItem={
        name : "Safayet"
    }
    MyCollection.deleteOne(DeleteItem,function (error) {

        if(error)
        {
            console,log("Delete Failed")
        }
        else
        {
            console.log("Delete Success");
        }
    })
}

function FindWithOutCondition(MyMongoClient) {
    const MyDatabase = MyMongoClient.db('school')
    const MyCollection = MyDatabase.collection('students');

    const FindObj = {
        name : "Araf"
    };
    MyCollection.findOne(FindObj,function(error,result){
        console.log(result);
    })
}


function FindWithCondition(MyMongoClient) {
    const MyDatabase = MyMongoClient.db('school')
    const MyCollection = MyDatabase.collection('students');

    const FindObj = {
        name : "Fahad Bodda"
    };
    MyCollection.findOne(FindObj,function(error,result){
        console.log(result);
    })
}



function  FindAllData(MyMongoClint) {
    MyDatabase = MyMongoClint.db('school');
    MyCollection = MyDatabase.collection('students');

    //const FindDataObj = {};
    MyCollection.find().toArray(function (error,result) {
        console.log(result);
    })
}



function FindAllDataByProjection(MyMongoClinet) {
    var MyDatabase= MyMongoClinet.db("school");
    var MyCollection= MyDatabase.collection('students');

    var ItemObj={}
    var ItemProjection={projection:{Class:"",Roll:""}}

    MyCollection.find(ItemObj,ItemProjection).toArray(function (error,result) {
        console.log(result)
    })
}


function FindDataByQuery(MyMongoClient) {
    MyDatabase = MyMongoClient.db("school")
    MyCollection = MyDatabase.collection('students');

    const Query = {
        name : "Araf"
    }
    MyCollection.find(Query).toArray(function (error,result) {
        console.log(result);
    })
}


function  FindDataByLimit(MyMongoClient) {
    const MyDatabase = MyMongoClient.db('school');
    const MyCollection = MyDatabase.collection('students');

    MyCollection.find().limit(1).toArray(function (error,result) {
        console.log(result);
    })
}

function FindDataBySort(MyMongoClient) {
    const MyDatabase = MyMongoClient.db('school');
    const MyCollection = MyDatabase.collection('students');

    const SortPatter = {name : -1};

    MyCollection.find().sort(SortPatter).toArray(function (error,result) {
        console.log(result);
    })
}


function UpdateData(MyMongoClient) {
    const MyDatabase = MyMongoClient.db('school');
    const MyCollection = MyDatabase.collection('students');

    const myQuery = {City : "Tongi"};

    const newValue = {$set : {name : "Sohan"}};

    MyCollection.updateOne(myQuery,newValue,function (error,result) {
       
        if(error)
        {
            console.log('Error to Update')
        }
        else
        {
            console.log("Update Success");
        }

       
    })
}


function CreateCollection(MyMongoClient) {
    const MyDatabase = MyMongoClient.db('school');

    MyDatabase.createCollection('teachers',function (error,result) {
        console.log(result);
    })
}