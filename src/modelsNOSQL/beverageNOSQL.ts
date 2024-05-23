import dynamodb from '../services/dynamoService';
import joi from 'joi';
import { PREFIX_NAME } from '../config';

const BeverageModel = dynamodb.define('beverage', {
    hashKey: 'BeverageId',
    timestamps: false,
    schema: {
        BeverageId: dynamodb.types.uuid(),
        Name: joi.string(),
        Kcal: joi.number(),
        Price: joi.number(),
        Ethylic: joi.boolean()
    },
    tableName: `Beverages${PREFIX_NAME}`
});

dynamodb.createTables((err: Error)=>{
    if(err)
        return console.log(err);
    console.log('Tables created');
});

export default BeverageModel;