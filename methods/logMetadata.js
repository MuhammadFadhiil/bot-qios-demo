function logMetadata(options, config) {

    var all = JSON.stringify(options) + "\n\n";
    all += JSON.stringify(config);
    var metadata = {
        type: "text",
        content: all
    };

    return metadata;
}