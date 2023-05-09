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
exports.ProfileCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateProfileArgs_1 = require("./args/AggregateProfileArgs");
const CreateManyProfileArgs_1 = require("./args/CreateManyProfileArgs");
const CreateOneProfileArgs_1 = require("./args/CreateOneProfileArgs");
const DeleteManyProfileArgs_1 = require("./args/DeleteManyProfileArgs");
const DeleteOneProfileArgs_1 = require("./args/DeleteOneProfileArgs");
const FindFirstProfileArgs_1 = require("./args/FindFirstProfileArgs");
const FindFirstProfileOrThrowArgs_1 = require("./args/FindFirstProfileOrThrowArgs");
const FindManyProfileArgs_1 = require("./args/FindManyProfileArgs");
const FindUniqueProfileArgs_1 = require("./args/FindUniqueProfileArgs");
const FindUniqueProfileOrThrowArgs_1 = require("./args/FindUniqueProfileOrThrowArgs");
const GroupByProfileArgs_1 = require("./args/GroupByProfileArgs");
const UpdateManyProfileArgs_1 = require("./args/UpdateManyProfileArgs");
const UpdateOneProfileArgs_1 = require("./args/UpdateOneProfileArgs");
const UpsertOneProfileArgs_1 = require("./args/UpsertOneProfileArgs");
const helpers_1 = require("../../../helpers");
const Profile_1 = require("../../../models/Profile");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProfile_1 = require("../../outputs/AggregateProfile");
const ProfileGroupBy_1 = require("../../outputs/ProfileGroupBy");
let ProfileCrudResolver = class ProfileCrudResolver {
    aggregateProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
        });
    }
    createManyProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createOneProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteManyProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteOneProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findFirstProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findFirstProfileOrThrow(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    profiles(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    profile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    getProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    groupByProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
        });
    }
    updateManyProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateOneProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    upsertOneProfile(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
            return (0, helpers_1.getPrismaFromContext)(ctx).profile.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateProfile_1.AggregateProfile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateProfileArgs_1.AggregateProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "aggregateProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyProfileArgs_1.CreateManyProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "createManyProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneProfileArgs_1.CreateOneProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "createOneProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyProfileArgs_1.DeleteManyProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "deleteManyProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneProfileArgs_1.DeleteOneProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "deleteOneProfile", null);
__decorate([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstProfileArgs_1.FindFirstProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "findFirstProfile", null);
__decorate([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstProfileOrThrowArgs_1.FindFirstProfileOrThrowArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "findFirstProfileOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Profile_1.Profile], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyProfileArgs_1.FindManyProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "profiles", null);
__decorate([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueProfileArgs_1.FindUniqueProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "profile", null);
__decorate([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueProfileOrThrowArgs_1.FindUniqueProfileOrThrowArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "getProfile", null);
__decorate([
    TypeGraphQL.Query(_returns => [ProfileGroupBy_1.ProfileGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByProfileArgs_1.GroupByProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "groupByProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyProfileArgs_1.UpdateManyProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "updateManyProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneProfileArgs_1.UpdateOneProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "updateOneProfile", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneProfileArgs_1.UpsertOneProfileArgs]),
    __metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "upsertOneProfile", null);
ProfileCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], ProfileCrudResolver);
exports.ProfileCrudResolver = ProfileCrudResolver;
