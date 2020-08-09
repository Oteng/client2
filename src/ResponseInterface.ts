export class Response {
  res: any;

  constructor(res) {
    this.res = res;
  }

  isFailed() {
    return this.res.data.status.toLowerCase() === 'failed';
  }

  getErrMsg() {
    return this.res.data.msg;
  }

  getData() {
    return this.res.data.data;
  }
}
