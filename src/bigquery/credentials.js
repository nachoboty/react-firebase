const { BigQuery } = require('@google-cloud/bigquery');
const bigquery = new BigQuery(
    {
        projectId: 'boty-marcas-2'
    }
);

exports.bigquery = bigquery;