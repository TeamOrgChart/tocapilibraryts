import { TeamOrgChartApi } from './teamOrgChartApi';

var api = new TeamOrgChartApi({ baseUri: 'https://mytest.com'});
var charts = api.chartsApi.get('1', { customHeaders: { 'X-API-Key': '123' }});
charts.then(charts => {
    charts.forEach(chart => console.log(chart.name));
});