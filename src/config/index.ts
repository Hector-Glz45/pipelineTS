export const PORT:number = process.env.PORT ? parseInt(process.env.PORT) : 8080;
export const NODE_ENV:string = process.env.NODE_ENV || 'development';
export const DB_NAME:string = process.env.DB_NAME || 'projectjs';
export const DB_USER:string = process.env.DB_USER || 'admin';
export const DB_PASSWORD:string = process.env.DB_PASSWORD || '';
export const DB_HOST:string = process.env.DB_HOST || 'localhost';
export const PREFIX_NAME = NODE_ENV === 'production' ? '' : '-DEV';
export const AWS_REGION:string = process.env.AWS_REGION || 'us-east-1';

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || '';
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || '';
export const AWS_SESSION_TOKEN = process.env.AWS_SESSION_TOKEN || '';

export const COGNITO_POOL_ID:string = process.env.COGNITO_POOL_ID || '';
export const COGNITO_CLIENT_ID:string = process.env.COGNITO_CLIENT_ID || '';
export const COGNITO_CLIENT_SECRET:string = process.env.COGNITO_CLIENT_SECRET || '';