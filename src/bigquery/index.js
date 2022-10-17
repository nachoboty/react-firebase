import { bigquery } from "./credentials";
const heroku_url = "https://guarded-cove-68359.herokuapp.com/"
const url = 'https://node-bigquery-query-2-67gtyoiqxq-uc.a.run.app';
const axios = require('axios');
// Import fetch

export async function get_info_by_query(query) {
    const json = {
        query: query
    };
    // const url_to_go = `https://cors-anywhere.herokuapp.com/${url}`;
    // ADD Access-Control-Allow-Origin
    const url_to_go = `localhost:4000/bigquery/query`;
    const response = await axios('/bigquery/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: json
    });
    return response.data;
    // console.log(response.data);
    // return response.data;

    // const response = await axios.post(url, json);
    // console.log({ response });
    // return response.data;
}

export async function get_principal_by_brand(brand, site = null) {
    const brand_first_letter_uppercase = brand.charAt(0).toUpperCase() + brand.slice(1) + "_airflow";
    let query = `SELECT * FROM \`boty-marcas-2.${brand_first_letter_uppercase}.principal\``;
    if (site) {
        query = `SELECT * FROM \`boty-marcas-2.${brand_first_letter_uppercase}.principal\` WHERE MLA like '%${site}%'`;
    }
    const response = await get_info_by_query(query);
    // console.log({ response });
    return response;
}

export async function get_principal_catalogo_by_brand(brand, site = null) {
    const brand_first_letter_uppercase = brand.charAt(0).toUpperCase() + brand.slice(1) + "_airflow";
    const query = `SELECT * FROM \`boty-marcas-2.${brand_first_letter_uppercase}.principal_catalogo\``;
    if (site) {
        const query = `SELECT * FROM \`boty-marcas-2.${brand_first_letter_uppercase}.principal_catalogo\` WHERE MLA like '%${site}%'`;
    }
    const response = await get_info_by_query(query);
    return response;
}

export async function get_principal_acumulados_by_brand(brand, type = 'acumulado', site = null) {
    // Check if type is 'acumulado' or 'acumulado_catalogo'
    if (type != 'acumulado' && type != 'acumulado_catalogo') {
        return 'Tipe must be "acumulado" or "acumulado_catalogo"';
    }
    const brand_first_letter_uppercase = brand.charAt(0).toUpperCase() + brand.slice(1) + "_airflow";
    const query = `SELECT MLA FROM \`boty-marcas-2.${brand_first_letter_uppercase}.principal\``;
    if (site) {
        const query = `SELECT MLA FROM \`boty-marcas-2.${brand_first_letter_uppercase}.principal\` WHERE MLA like '%${site}%'`;
    }
    const principal_data = await bigquery.query(query);
    // Return mlas
    const mlas = principal_data[0].map((fila) => {
        const string = `"${fila['MLA']}"`
        return string;
    })
    const query_acumulado = `SELECT * FROM \`boty-marcas-2.SITE_MELI_DATA_airflow.${type}\` WHERE acumulado_mla IN (${mlas})`;
    console.log(query_acumulado);
    const acumulado_data = await bigquery.query(query_acumulado);
    return acumulado_data[0];
}

export async function get_principal_acumulado_by_brand(brand, site = null) {
    const type = 'acumulado';
    return await get_principal_acumulados_by_brand(brand, site);
}

export async function get_principal_acumulado_catalogo_by_brand(brand, site = null) {
    const type = 'acumulado_catalogo';
    return await get_principal_acumulados_by_brand(brand, site);
}

export async function get_principal_get_pvps_by_brand(brand, site = null) {
    const brand_first_letter_uppercase = brand.charAt(0).toUpperCase() + brand.slice(1) + "_airflow";
    const query = `SELECT * FROM \`boty-marcas-2.${brand_first_letter_uppercase}.pvps\``;
    const response = await get_info_by_query(query);
    return response;
}

export async function get_search_parameters_by_brand(brand, site = null) {
    const brand_first_letter_uppercase = brand.charAt(0).toUpperCase() + brand.slice(1) + "_airflow";
    const query = `SELECT DISTINCT KEY_SEARCH, NICKNAME_SEARCH FROM \`boty-marcas-2.${brand_first_letter_uppercase}.principal\``;
    if (site) {
        const query = `SELECT DISTINCT KEY_SEARCH, NICKNAME_SEARCH FROM \`boty-marcas-2.${brand_first_letter_uppercase}.principal\` WHERE MLA like '%${site}%'`;
    }
    const response = await get_info_by_query(query);
    return response;
}
