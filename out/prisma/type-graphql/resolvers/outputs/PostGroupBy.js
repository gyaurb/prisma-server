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
exports.PostGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PostAvgAggregate_1 = require("../outputs/PostAvgAggregate");
const PostCountAggregate_1 = require("../outputs/PostCountAggregate");
const PostMaxAggregate_1 = require("../outputs/PostMaxAggregate");
const PostMinAggregate_1 = require("../outputs/PostMinAggregate");
const PostSumAggregate_1 = require("../outputs/PostSumAggregate");
let PostGroupBy = class PostGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], PostGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], PostGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], PostGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PostGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostGroupBy.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], PostGroupBy.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], PostGroupBy.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCountAggregate_1.PostCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostAvgAggregate_1.PostAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostSumAggregate_1.PostSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMinAggregate_1.PostMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMaxAggregate_1.PostMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostGroupBy.prototype, "_max", void 0);
PostGroupBy = __decorate([
    TypeGraphQL.ObjectType("PostGroupBy", {
        isAbstract: true
    })
], PostGroupBy);
exports.PostGroupBy = PostGroupBy;
