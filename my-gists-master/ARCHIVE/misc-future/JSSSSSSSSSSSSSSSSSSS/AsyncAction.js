/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
import * as tslib_1 from "tslib";
import { Action } from "./Action";
var AsyncAction = /*@__PURE__*/ (function (_super) {
  tslib_1.__extends(AsyncAction, _super);
  function AsyncAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };
  AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setInterval(scheduler.flush.bind(scheduler, this), delay);
  };
  AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (delay !== null && this.delay === delay && this.pending === false) {
      return id;
    }
    clearInterval(id);
    return undefined;
  };
  AsyncAction.prototype.execute = function (state, delay) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction.prototype._execute = function (state, delay) {
    var errored = false;
    var errorValue = undefined;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = (!!e && e) || new Error(e);
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction.prototype._unsubscribe = function () {
    var id = this.id;
    var scheduler = this.scheduler;
    var actions = scheduler.actions;
    var index = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;
    if (index !== -1) {
      actions.splice(index, 1);
    }
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }
    this.delay = null;
  };
  return AsyncAction;
})(Action);
export { AsyncAction };
//# sourceMappingURL=AsyncAction.js.map
