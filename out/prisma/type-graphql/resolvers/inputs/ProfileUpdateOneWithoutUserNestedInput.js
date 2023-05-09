"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateOneWithoutUserNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProfileCreateOrConnectWithoutUserInput_1 = require("../inputs/ProfileCreateOrConnectWithoutUserInput");
const ProfileCreateWithoutUserInput_1 = require("../inputs/ProfileCreateWithoutUserInput");
const ProfileUpdateWithoutUserInput_1 = require("../inputs/ProfileUpdateWithoutUserInput");
const ProfileUpsertWithoutUserInput_1 = require("../inputs/ProfileUpsertWithoutUserInput");
const ProfileWhereUniqueInput_1 = require("../inputs/ProfileWhereUniqueInput");
let ProfileUpdateOneWithoutUserNestedInput = class ProfileUpdateOneWithoutUserNestedInput {
};
__decorate([
    TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput_1.ProfileCreateWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileCreateOrConnectWithoutUserInput_1.ProfileCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileUpsertWithoutUserInput_1.ProfileUpsertWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateWithoutUserInput_1.ProfileUpdateWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProfileUpdateOneWithoutUserNestedInput.prototype, "update", void 0);
ProfileUpdateOneWithoutUserNestedInput = __decorate([
    TypeGraphQL.InputType("ProfileUpdateOneWithoutUserNestedInput", {
        isAbstract: true
    })
], ProfileUpdateOneWithoutUserNestedInput);
exports.ProfileUpdateOneWithoutUserNestedInput = ProfileUpdateOneWithoutUserNestedInput;
