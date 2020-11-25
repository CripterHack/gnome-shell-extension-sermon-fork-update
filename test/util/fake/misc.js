/**
 * Fake implementation of misc.
 */

"use strict";

const GjsMockito = imports.test.util.gjsMockito;
const mock = GjsMockito.mock;
const when = GjsMockito.when;

/* exported GSettings */
var GSettings = mock("GSettings", ["get_boolean", "get_int", "get_string"]);

const mockConvenience = () => {
    const convenienceMock = mock("Convenience", [
        "getSettings",
        "initTranslations",
    ]);
    when(convenienceMock, "getSettings").thenReturn(GSettings);
    return convenienceMock;
};

/* exported extensionUtils */
var extensionUtils = {
    getCurrentExtension: () => {
        return Me;
    },
};

/* exported Me */
var Me = {
    path: "",

    imports: {
        src: {
            util: {
                log: mock("Log", ["d", "i", "w", "e"]),
                convenience: mockConvenience(),
            },

            data: {
                commandLine: mock("CommandLine", [
                    "find",
                    "execute",
                    "executeAsync",
                    "executeAsyncWithResult",
                ]),
                container: mock("Container", [
                    "isInstalled",
                    "getContainers",
                    "startContainer",
                    "stopContainer",
                    "restartContainer",
                    "removeContainer",
                    "parseContainers",
                ]),
                cronRepository: mock("CronRepository", [
                    "isInstalled",
                    "getJobs",
                    "parseJobs",
                ]),
                dockerRepository: mock("DockerRepository", [
                    "isInstalled",
                    "getContainers",
                    "startContainer",
                    "stopContainer",
                    "restartContainer",
                    "removeContainer",
                ]),
                podmanRepository: mock("PodmanRepository", [
                    "isInstalled",
                    "getContainers",
                    "startContainer",
                    "stopContainer",
                    "restartContainer",
                    "removeContainer",
                ]),
                systemdRepository: mock("SystemdRepository", [
                    "isInstalled",
                    "isRunning",
                    "getServices",
                    "isServiceRunning",
                    "startService",
                    "stopService",
                    "restartService",
                    "parseServices",
                ]),
                settings: mock("Settings", [
                    "getMaxItemsPerSection",
                    "isSystemdSectionEnabled",
                    "shouldFilterSystemdUserServices",
                    "shouldFilterSystemdServicesByPriorityList",
                    "getSystemdSectionItemsPriorityList",
                    "isCronSectionEnabled",
                    "isDockerSectionEnabled",
                    "isPodmanSectionEnabled",
                ]),
            },

            presentation: {
                iconFactory: mock("IconFactory", [
                    "buildFromName",
                    "buildFromPath",
                ]),
            },
        },
    },
};
