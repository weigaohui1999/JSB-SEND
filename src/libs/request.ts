import Taro from "@tarojs/taro";

const config: config = {
  baseUrl: "http://114.116.73.148:8086",
  header: {},
  timeout: 0,
};

function setConfig(options) {
  return Object.assign({}, config, options);
}

const request = (
  method: keyof Method,
  url: string,
  data: any,
  options: any
) => {
  //  设置请求头
  options = setConfig(options);
  return new Promise((resolve, reject) => {
    Taro.request({
      url: options.baseUrl + url,
      data: data,
      header: options.header,
      timeout: 6000 * 10 || options.timeout,
      method: method,
      success(result) {
        debugger;
      },
      fail(fail) {
        debugger;
      },
    });
  });
};

export default {
  get(url: string, data: any, options: any) {
    return request("GET", url, data, options);
  },
};

interface config {
  baseUrl: string;
  header?: object;
  timeout: number;
}
interface api<T> {
  code: number;
  data: T;
  message: string;
}
/** HTTP 请求方法 */
interface Method {
  /** HTTP 请求 OPTIONS */
  OPTIONS;
  /** HTTP 请求 GET */
  GET;
  /** HTTP 请求 HEAD */
  HEAD;
  /** HTTP 请求 POST */
  POST;
  /** HTTP 请求 PUT */
  PUT;
  /** HTTP 请求 DELETE */
  DELETE;
  /** HTTP 请求 TRACE */
  TRACE;
  /** HTTP 请求 CONNECT */
  CONNECT;
}
