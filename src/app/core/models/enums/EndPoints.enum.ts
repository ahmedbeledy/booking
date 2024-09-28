export enum EndPoints{
    API_BASE_URL = "http://localhost:3000",

    // Units
    units = "/units",
    getAllUnits = EndPoints.units + "/getAllUnits",
    getUnitById = EndPoints.units + "/getUnitById",

    // Properties
    properties = "/properties",
    /** Area  */
    /**/getAllAreas = EndPoints.properties + "/getAllAreas",
    /**/getAreaById = EndPoints.properties + "/getAreaById",

}