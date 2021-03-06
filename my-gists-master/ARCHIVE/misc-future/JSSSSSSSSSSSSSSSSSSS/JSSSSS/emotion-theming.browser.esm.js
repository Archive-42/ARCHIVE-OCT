import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React__default, { createElement, forwardRef } from "react";
import { ThemeContext } from "@emotion/core";
import weakMemoize from "@emotion/weak-memoize";
import _extends from "@babel/runtime/helpers/extends";
import hoistNonReactStatics from "hoist-non-react-statics";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === "function") {
    var mergedTheme = theme(outerTheme);

    if (
      process.env.NODE_ENV !== "production" &&
      (mergedTheme == null ||
        typeof mergedTheme !== "object" ||
        Array.isArray(mergedTheme))
    ) {
      throw new Error(
        "[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!"
      );
    }

    return mergedTheme;
  }

  if (
    process.env.NODE_ENV !== "production" &&
    (theme == null || typeof theme !== "object" || Array.isArray(theme))
  ) {
    throw new Error(
      "[ThemeProvider] Please make your theme prop a plain object"
    );
  }

  return _objectSpread({}, outerTheme, {}, theme);
};

var createCacheWithTheme = weakMemoize(function (outerTheme) {
  return weakMemoize(function (theme) {
    return getTheme(outerTheme, theme);
  });
});

var ThemeProvider = function ThemeProvider(props) {
  return createElement(ThemeContext.Consumer, null, function (theme) {
    if (props.theme !== theme) {
      theme = createCacheWithTheme(theme)(props.theme);
    }

    return createElement(
      ThemeContext.Provider,
      {
        value: theme,
      },
      props.children
    );
  });
};

// should we change this to be forwardRef/withCSSContext style so it doesn't merge with props?
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || "Component";

  var render = function render(props, ref) {
    return createElement(ThemeContext.Consumer, null, function (theme) {
      return createElement(
        Component,
        _extends(
          {
            theme: theme,
            ref: ref,
          },
          props
        )
      );
    });
  }; // $FlowFixMe

  var WithTheme = forwardRef(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoistNonReactStatics(WithTheme, Component);
}

function useTheme() {
  return React__default.useContext(ThemeContext);
}

export { ThemeProvider, useTheme, withTheme };
