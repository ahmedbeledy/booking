export enum EndPoints{
    API_BASE_URL = "https://lacasaresidence.com",

    // Units
    units = "/api/units",
    getAllUnits = EndPoints.units + "/getAllUnits",
    getUnitById = EndPoints.units + "/getUnitById",

    // Properties
    properties = "/api/properties",
    /** Area  */
    /**/getAllAreas = EndPoints.properties + "/getAllAreas",
    /**/getAreaById = EndPoints.properties + "/getAreaById",

}