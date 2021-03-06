/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/positionsApiMappers";
import * as Parameters from "../models/parameters";
import { TeamOrgChartApiContext } from "../teamOrgChartApiContext";

/** Class representing a PositionsApi. */
export class PositionsApi {
  private readonly client: TeamOrgChartApiContext;

  /**
   * Create a PositionsApi.
   * @param {TeamOrgChartApiContext} client Reference to the service client.
   */
  constructor(client: TeamOrgChartApiContext) {
    this.client = client;
  }

  /**
   * Sample request:
   *
   * GET /api/v1/positions/53bec490-1cdc-42f5-8983-e6efe66dc685
   * @summary Returns a list of the temporary, vacant or department chart positions defined for the
   * chart
   * @param chartId ID of the chart definition
   * @param version
   * @param [options] The optional parameters
   * @returns Promise<Models.PositionsApiGetChartPositionsResponse>
   */
  getChartPositions(chartId: string, version: string, options?: msRest.RequestOptionsBase): Promise<Models.PositionsApiGetChartPositionsResponse>;
  /**
   * @param chartId ID of the chart definition
   * @param version
   * @param callback The callback
   */
  getChartPositions(chartId: string, version: string, callback: msRest.ServiceCallback<Models.ChartPosition[]>): void;
  /**
   * @param chartId ID of the chart definition
   * @param version
   * @param options The optional parameters
   * @param callback The callback
   */
  getChartPositions(chartId: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ChartPosition[]>): void;
  getChartPositions(chartId: string, version: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ChartPosition[]>, callback?: msRest.ServiceCallback<Models.ChartPosition[]>): Promise<Models.PositionsApiGetChartPositionsResponse> {
    return this.client.sendOperationRequest(
      {
        chartId,
        version,
        options
      },
      getChartPositionsOperationSpec,
      callback) as Promise<Models.PositionsApiGetChartPositionsResponse>;
  }

  /**
   * Sample request:
   *
   * POST /api/v1/positions/53bec490-1cdc-42f5-8983-e6efe66dc685
   * [{
   * "Id": 0,
   * "Name": "Harry Potter",
   * "ManagerId": "xxx-eee-333-sss-",
   * "FriendlyManagerId": "string",
   * "Position": "string",
   * "IsTempPosition": true,
   * "ExpireDate": "2020-01-29T09:13:53.895Z",
   * "UniqueId": "abc123",
   * "ViewItem": "",
   * "PictureUrl": "",
   * "IsDepartment": false,
   * "DepartmentTitle": "",
   * "DepartmentText": ""
   * }]
   * @summary Creates a new or updates an existing temporary, vacant or department positions in the
   * chart.
   * @param chartId ID of the chart definition
   * @param model Position model
   * @param version
   * @param [options] The optional parameters
   * @returns Promise<Models.PositionsApiCreateChartPositionResponse>
   */
  createChartPosition(chartId: string, model: Models.ChartPosition, version: string, options?: msRest.RequestOptionsBase): Promise<Models.PositionsApiCreateChartPositionResponse>;
  /**
   * @param chartId ID of the chart definition
   * @param model Position model
   * @param version
   * @param callback The callback
   */
  createChartPosition(chartId: string, model: Models.ChartPosition, version: string, callback: msRest.ServiceCallback<Models.ChartPosition>): void;
  /**
   * @param chartId ID of the chart definition
   * @param model Position model
   * @param version
   * @param options The optional parameters
   * @param callback The callback
   */
  createChartPosition(chartId: string, model: Models.ChartPosition, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ChartPosition>): void;
  createChartPosition(chartId: string, model: Models.ChartPosition, version: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ChartPosition>, callback?: msRest.ServiceCallback<Models.ChartPosition>): Promise<Models.PositionsApiCreateChartPositionResponse> {
    return this.client.sendOperationRequest(
      {
        chartId,
        model,
        version,
        options
      },
      createChartPositionOperationSpec,
      callback) as Promise<Models.PositionsApiCreateChartPositionResponse>;
  }

  /**
   * Sample request:
   *
   * DELETE /api/v1/positions/53bec490-1cdc-42f5-8983-e6efe66dc685?uniqueId=1234
   * @summary Removes a temporary, vacant or department position from the chart and returns a list of
   * the remaining positions.
   * @param chartId ID of the chart definition
   * @param uniqueId ID of the position
   * @param version
   * @param [options] The optional parameters
   * @returns Promise<Models.PositionsApiDeleteChartPositionResponse>
   */
  deleteChartPosition(chartId: string, uniqueId: string, version: string, options?: msRest.RequestOptionsBase): Promise<Models.PositionsApiDeleteChartPositionResponse>;
  /**
   * @param chartId ID of the chart definition
   * @param uniqueId ID of the position
   * @param version
   * @param callback The callback
   */
  deleteChartPosition(chartId: string, uniqueId: string, version: string, callback: msRest.ServiceCallback<Models.ChartPosition[]>): void;
  /**
   * @param chartId ID of the chart definition
   * @param uniqueId ID of the position
   * @param version
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteChartPosition(chartId: string, uniqueId: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ChartPosition[]>): void;
  deleteChartPosition(chartId: string, uniqueId: string, version: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ChartPosition[]>, callback?: msRest.ServiceCallback<Models.ChartPosition[]>): Promise<Models.PositionsApiDeleteChartPositionResponse> {
    return this.client.sendOperationRequest(
      {
        chartId,
        uniqueId,
        version,
        options
      },
      deleteChartPositionOperationSpec,
      callback) as Promise<Models.PositionsApiDeleteChartPositionResponse>;
  }

  /**
   * Sample request:
   *
   * GET /api/v1/positions/53bec490-1cdc-42f5-8983-e6efe66dc685?uniqueId=1234
   * @summary Returns a single temporary, vacant or department position by ID.
   * @param chartId ID of the chart definition
   * @param uniqueId ID of the position
   * @param version
   * @param [options] The optional parameters
   * @returns Promise<Models.PositionsApiGetChartPositionByIdResponse>
   */
  getChartPositionById(chartId: string, uniqueId: string, version: string, options?: msRest.RequestOptionsBase): Promise<Models.PositionsApiGetChartPositionByIdResponse>;
  /**
   * @param chartId ID of the chart definition
   * @param uniqueId ID of the position
   * @param version
   * @param callback The callback
   */
  getChartPositionById(chartId: string, uniqueId: string, version: string, callback: msRest.ServiceCallback<Models.ChartPosition>): void;
  /**
   * @param chartId ID of the chart definition
   * @param uniqueId ID of the position
   * @param version
   * @param options The optional parameters
   * @param callback The callback
   */
  getChartPositionById(chartId: string, uniqueId: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ChartPosition>): void;
  getChartPositionById(chartId: string, uniqueId: string, version: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ChartPosition>, callback?: msRest.ServiceCallback<Models.ChartPosition>): Promise<Models.PositionsApiGetChartPositionByIdResponse> {
    return this.client.sendOperationRequest(
      {
        chartId,
        uniqueId,
        version,
        options
      },
      getChartPositionByIdOperationSpec,
      callback) as Promise<Models.PositionsApiGetChartPositionByIdResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getChartPositionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/v{version}/positions/{chartId}",
  urlParameters: [
    Parameters.chartId,
    Parameters.version
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChartPosition"
            }
          }
        }
      }
    },
    400: {},
    404: {},
    default: {}
  },
  serializer
};

const createChartPositionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/v{version}/positions/{chartId}",
  urlParameters: [
    Parameters.chartId,
    Parameters.version
  ],
  requestBody: {
    parameterPath: "model",
    mapper: {
      ...Mappers.ChartPosition,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.ChartPosition
    },
    400: {},
    default: {}
  },
  serializer
};

const deleteChartPositionOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "api/v{version}/positions/{chartId}",
  urlParameters: [
    Parameters.chartId,
    Parameters.version
  ],
  queryParameters: [
    Parameters.uniqueId
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChartPosition"
            }
          }
        }
      }
    },
    400: {},
    default: {}
  },
  serializer
};

const getChartPositionByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/v{version}/positions/{chartId}/position",
  urlParameters: [
    Parameters.chartId,
    Parameters.version
  ],
  queryParameters: [
    Parameters.uniqueId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ChartPosition
    },
    400: {},
    404: {},
    default: {}
  },
  serializer
};
