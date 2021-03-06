"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;

function NavigatorID() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(NavigatorID, "prototype", {
  value: NavigatorID.prototype,
  writable: false,
  enumerable: false,
  configurable: false,
});

Object.defineProperty(NavigatorID.prototype, "appCodeName", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["appCodeName"];
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(NavigatorID.prototype, "appName", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["appName"];
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(NavigatorID.prototype, "appVersion", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["appVersion"];
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(NavigatorID.prototype, "platform", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["platform"];
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(NavigatorID.prototype, "product", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["product"];
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(NavigatorID.prototype, "productSub", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["productSub"];
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(NavigatorID.prototype, "userAgent", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["userAgent"];
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(NavigatorID.prototype, "vendor", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["vendor"];
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(NavigatorID.prototype, "vendorSub", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["vendorSub"];
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(NavigatorID.prototype, Symbol.toStringTag, {
  value: "NavigatorID",
  writable: false,
  enumerable: false,
  configurable: true,
});

const iface = {
  // When an interface-module that implements this interface as a mixin is loaded, it will append its own `.is()`
  // method into this array. It allows objects that directly implements *those* interfaces to be recognized as
  // implementing this mixin interface.
  _mixedIntoPredicates: [],
  is(obj) {
    if (obj) {
      if (utils.hasOwn(obj, impl) && obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(obj)) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(wrapper)) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'NavigatorID'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(NavigatorID.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(NavigatorID.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {},
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};

    privateData.wrapper = obj;

    this._internalSetup(obj);
    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(constructorArgs, privateData),
      writable: false,
      enumerable: false,
      configurable: true,
    });

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },
  interface: NavigatorID,
  expose: {},
}; // iface
module.exports = iface;

const Impl = require("../navigator/NavigatorID-impl.js");
