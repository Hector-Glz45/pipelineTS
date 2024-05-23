import dynamodb from '../services/dynamoService';
import joi from 'joi';
import { PREFIX_NAME } from '../config';

const clothingModel = dynamodb.define('beverage', {
    hashKey: 'clothId',
    timestamps: false,
    schema: {
        clothId: dynamodb.types.uuid(),
        Name: joi.string(),
        Price: joi.number(),
        Material: joi.string(),
        Size: joi.string(),
    },
    tableName: `Clothing${PREFIX_NAME}`
});

dynamodb.createTables((err: Error)=>{
    if(err)
        return console.log(err);
    console.log('Nosql tables created');
});

export default clothingModel;