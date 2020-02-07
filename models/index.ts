/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing JsonChartItemViewModel.
 */
export interface JsonChartItemViewModel {
  id?: number;
  orgChartDefinitionId?: string;
  uniqueId?: string;
  managerId?: string;
  jsonData?: string;
}

/**
 * An interface representing VacantPositionViewModel.
 */
export interface VacantPositionViewModel {
  name?: string;
  managerId: string;
  position?: string;
  isTempPosition?: boolean;
  expireDate?: Date;
  uniqueId?: string;
  viewItem?: string;
  pictureUrl?: string;
  isDepartment?: boolean;
  departmentTitle?: string;
  departmentText?: string;
}

/**
 * An interface representing ChartLayoutViewModel.
 */
export interface ChartLayoutViewModel {
  id?: number;
  orgChartDefinitionId?: string;
  uniqueId?: string;
  managerId?: string;
  order?: number;
  sortFlag?: number;
}

/**
 * An interface representing ChartNode.
 */
export interface ChartNode {
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly boxType?: number;
  virtualLevel?: number;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly searchName?: string;
  uniqueId?: string;
  managerId?: string;
  originalManagerId?: string;
  managerDisplayName?: string;
  mappedId?: string;
  mappedManagerDisplayName?: string;
  displayName?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  group?: string;
  pictureUrl?: string;
  isAssistant?: boolean;
  hasHiddenReports?: boolean;
  isCoordinator?: boolean;
  isJointManager?: boolean;
  isDropLevel?: boolean;
  isDropLevelParent?: boolean;
  height?: number;
  width?: number;
  isDepartment?: boolean;
  isVacantPosition?: boolean;
  isTempPosition?: boolean;
  vacantPosition?: VacantPositionViewModel;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly isChartAddition?: boolean;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly assistants?: ChartNode[];
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly coordinators?: ChartNode[];
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly jointManagers?: ChartNode[];
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tOCImpacts?: { [propertyName: string]: string };
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tOCFields?: { [propertyName: string]: string };
  chartLayout?: ChartLayoutViewModel;
}

/**
 * An interface representing ChartDataView.
 */
export interface ChartDataView {
  chartId?: string;
  startValue?: string;
  depth?: number;
  data?: ChartNode[];
}

/**
 * An interface representing ChartDefinition.
 */
export interface ChartDefinition {
  orgChartDefinitionId?: string;
  name?: string;
  dataSourceType?: string;
  isPublic?: boolean;
  isPromoted?: boolean;
  maximumDepth?: number;
}

/**
 * An interface representing CreateChartModel.
 */
export interface CreateChartModel {
  name?: string;
  isPublic?: boolean;
}

/**
 * An interface representing ChartPosition.
 */
export interface ChartPosition {
  id?: number;
  name?: string;
  managerId: string;
  friendlyManagerId?: string;
  position?: string;
  isTempPosition?: boolean;
  expireDate?: Date;
  uniqueId?: string;
  viewItem?: string;
  pictureUrl?: string;
  isDepartment?: boolean;
  departmentTitle?: string;
  departmentText?: string;
}

/**
 * An interface representing Remapping.
 */
export interface Remapping {
  id?: number;
  uniqueId?: string;
  friendlyUniqueId?: string;
  managerId?: string;
  friendlyManagerId?: string;
  mappedId?: string;
  friendlyMappedId?: string;
}

/**
 * An interface representing TeamOrgChartApiOptions.
 */
export interface TeamOrgChartApiOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface ChartDataApiGetChartViewOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The unique Id to begin fetching from
   */
  startValue?: string;
  /**
   * The number of levels of the organization chart to process
   */
  depth?: number;
}

/**
 * Contains response data for the getChartItems operation.
 */
export type ChartDataApiGetChartItemsResponse = Array<JsonChartItemViewModel> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: JsonChartItemViewModel[];
    };
};

/**
 * Contains response data for the createChartItem operation.
 */
export type ChartDataApiCreateChartItemResponse = JsonChartItemViewModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: JsonChartItemViewModel;
    };
};

/**
 * Contains response data for the createChartItems operation.
 */
export type ChartDataApiCreateChartItemsResponse = Array<JsonChartItemViewModel> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: JsonChartItemViewModel[];
    };
};

/**
 * Contains response data for the getChartItem operation.
 */
export type ChartDataApiGetChartItemResponse = JsonChartItemViewModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: JsonChartItemViewModel;
    };
};

/**
 * Contains response data for the getChartView operation.
 */
export type ChartDataApiGetChartViewResponse = ChartDataView & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ChartDataView;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ChartsApiGetResponse = Array<ChartDefinition> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ChartDefinition[];
    };
};

/**
 * Contains response data for the createChart operation.
 */
export type ChartsApiCreateChartResponse = ChartDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ChartDefinition;
    };
};

/**
 * Contains response data for the get1 operation.
 */
export type ChartsApiGet1Response = ChartDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ChartDefinition;
    };
};

/**
 * Contains response data for the getChartPositions operation.
 */
export type PositionsApiGetChartPositionsResponse = Array<ChartPosition> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ChartPosition[];
    };
};

/**
 * Contains response data for the createChartPosition operation.
 */
export type PositionsApiCreateChartPositionResponse = ChartPosition & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ChartPosition;
    };
};

/**
 * Contains response data for the deleteChartPosition operation.
 */
export type PositionsApiDeleteChartPositionResponse = Array<ChartPosition> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ChartPosition[];
    };
};

/**
 * Contains response data for the getChartPositionById operation.
 */
export type PositionsApiGetChartPositionByIdResponse = ChartPosition & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ChartPosition;
    };
};

/**
 * Contains response data for the getRemappings operation.
 */
export type RemappingsApiGetRemappingsResponse = Array<Remapping> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Remapping[];
    };
};

/**
 * Contains response data for the addRemapping operation.
 */
export type RemappingsApiAddRemappingResponse = Remapping & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Remapping;
    };
};
