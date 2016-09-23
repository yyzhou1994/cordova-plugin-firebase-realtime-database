var exec = require('cordova/exec');

exports.getInstanceId = function(success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "getInstanceId", []);
};

exports.updateChildren = function(success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "updateChildren", [updates]);
};

exports.onTokenRefreshNotification = function(success, error) {
    exec(success, error, "FirebasePlugin", "onTokenRefreshNotification", []);
};

exports.grantPermission = function(success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "grantPermission", []);
};

exports.subscribe = function(topic, success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "subscribe", [topic]);
};

exports.unsubscribe = function(topic, success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "unsubscribe", [topic]);
};

exports.logEvent = function(name, params, success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "logEvent", [name, params]);
};

exports.setUserId = function(id, success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "setUserId", [id]);
};

exports.setUserProperty = function(name, value, success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "setUserProperty", [name, value]);
};

exports.activateFetched = function (success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "activateFetched", []);
};

exports.fetch = function (cacheExpirationSeconds, success, error) {
    var args = [];
    if (typeof cacheExpirationSeconds === 'number') {
        args.push(cacheExpirationSeconds);
    } else {
        error = success;
        success = cacheExpirationSeconds;
    }
    exec(success, error, "FirebaseDatabasePlugin", "fetch", args);
};

exports.getByteArray = function (key, namespace, success, error) {
    var args = [key];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "FirebaseDatabasePlugin", "getByteArray", args);
};

exports.getValue = function (key, namespace, success, error) {
    var args = [key];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "FirebaseDatabasePlugin", "getValue", args);
};

exports.getInfo = function (success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "getInfo", []);
};

exports.setConfigSettings = function (settings, success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "setConfigSettings", [settings]);
};

exports.setDefaults = function (defaults, namespace, success, error) {
    var args = [defaults];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "FirebaseDatabasePlugin", "setDefaults", args);
};

exports.setDatabasePersistent = function(persistent, success, error) {
    exec(success, error, "FirebasePlugin", "setDatabasePersistent", [persistent]);
};
