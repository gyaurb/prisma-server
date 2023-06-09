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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregatePostArgs_1 = require("./args/AggregatePostArgs");
const CreateManyPostArgs_1 = require("./args/CreateManyPostArgs");
const CreateOnePostArgs_1 = require("./args/CreateOnePostArgs");
const DeleteManyPostArgs_1 = require("./args/DeleteManyPostArgs");
const DeleteOnePostArgs_1 = require("./args/DeleteOnePostArgs");
const FindFirstPostArgs_1 = require("./args/FindFirstPostArgs");
const FindFirstPostOrThrowArgs_1 = require("./args/FindFirstPostOrThrowArgs");
const FindManyPostArgs_1 = require("./args/FindManyPostArgs");
const FindUniquePostArgs_1 = require("./args/FindUniquePostArgs");
const FindUniquePostOrThrowArgs_1 = require("./args/FindUniquePostOrThrowArgs");
const GroupByPostArgs_1 = require("./args/GroupByPostArgs");
const UpdateManyPostArgs_1 = require("./args/UpdateManyPostArgs");
const UpdateOnePostArgs_1 = require("./args/UpdateOnePostArgs");
const UpsertOnePostArgs_1 = require("./args/UpsertOnePostArgs");
const helpers_1 = require("../../../helpers");
const Post_1 = require("../../../models/Post");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePost_1 = require("../../outputs/AggregatePost");
const PostGroupBy_1 = require("../../outputs/PostGroupBy");
let PostCrudResolver = class PostCrudResolver {
    aggregatePost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).post.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
        });
    }
    createManyPost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createOnePost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteManyPost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteOnePost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findFirstPost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findFirstPostOrThrow(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    posts(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    post(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    getPost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    groupByPost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
        });
    }
    updateManyPost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateOnePost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    upsertOnePost(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).post.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregatePost_1.AggregatePost, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregatePostArgs_1.AggregatePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "aggregatePost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyPostArgs_1.CreateManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "createManyPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOnePostArgs_1.CreateOnePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "createOnePost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyPostArgs_1.DeleteManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "deleteManyPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOnePostArgs_1.DeleteOnePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "deleteOnePost", null);
__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstPostArgs_1.FindFirstPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "findFirstPost", null);
__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstPostOrThrowArgs_1.FindFirstPostOrThrowArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "findFirstPostOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Post_1.Post], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyPostArgs_1.FindManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "posts", null);
__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniquePostArgs_1.FindUniquePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "post", null);
__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniquePostOrThrowArgs_1.FindUniquePostOrThrowArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "getPost", null);
__decorate([
    TypeGraphQL.Query(_returns => [PostGroupBy_1.PostGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByPostArgs_1.GroupByPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "groupByPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyPostArgs_1.UpdateManyPostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "updateManyPost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOnePostArgs_1.UpdateOnePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "updateOnePost", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOnePostArgs_1.UpsertOnePostArgs]),
    __metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "upsertOnePost", null);
PostCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostCrudResolver);
exports.PostCrudResolver = PostCrudResolver;
