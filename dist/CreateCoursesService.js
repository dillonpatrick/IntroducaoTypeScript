"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCoursesService = /** @class */ (function () {
    function CreateCoursesService() {
    }
    CreateCoursesService.prototype.execute = function (_a) {
        var name = _a.name, duration = _a.duration, educator = _a.educator;
        console.log(name, duration, educator);
    };
    return CreateCoursesService;
}());
exports.default = new CreateCoursesService();
