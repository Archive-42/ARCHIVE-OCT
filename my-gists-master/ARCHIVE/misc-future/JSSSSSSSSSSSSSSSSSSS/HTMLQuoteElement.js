"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLQuoteElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(
  HTMLQuoteElement.prototype,
  HTMLElement.interface.prototype
);
Object.setPrototypeOf(HTMLQuoteElement, HTMLElement.interface);

Object.defineProperty(HTMLQuoteElement, "prototype", {
  value: HTMLQuoteElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false,
});

Object.defineProperty(HTMLQuoteElement.prototype, "cite", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["cite"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context:
        "Failed to set the 'cite' property on 'HTMLQuoteElement': The provided value",
    });

    this[impl]["cite"] = V;
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(HTMLQuoteElement.prototype, Symbol.toStringTag, {
  value: "HTMLQuoteElement",
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
    throw new TypeError(`${context} is not of type 'HTMLQuoteElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLQuoteElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLQuoteElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    HTMLElement._internalSetup(obj);
  },
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
  interface: HTMLQuoteElement,
  expose: {
    Window: { HTMLQuoteElement },
  },
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLQuoteElement-impl.js");
