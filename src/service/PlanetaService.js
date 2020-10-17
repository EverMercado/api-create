const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');
const Planeta = require('../../modelos/Planeta');

class PlanetaService {
    static async getPlaneta(id){
        var params = {
            Key: {
             "id": {
               S: id
              },
            }, 
            TableName: process.env.DBPLANET
           };
        return await dynamodb.getItem(params).promise();
    }

    static async savePlanetas(data){
        data.id = uuid.v1();
        const modelPlaneta = new Planeta(data);

        let params = {
            TableName: process.env.DBPLANET,
            Item: modelPlaneta
        };
        return await dynamoDb.put(params).promise();
    }
}

module.exports = PlanetaService;