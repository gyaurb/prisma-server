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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib = __importStar(require("tslib"));
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Profile: crudResolvers.ProfileCrudResolver,
    Post: crudResolvers.PostCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Profile: {
        aggregateProfile: actionResolvers.AggregateProfileResolver,
        createManyProfile: actionResolvers.CreateManyProfileResolver,
        createOneProfile: actionResolvers.CreateOneProfileResolver,
        deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
        deleteOneProfile: actionResolvers.DeleteOneProfileResolver,
        findFirstProfile: actionResolvers.FindFirstProfileResolver,
        findFirstProfileOrThrow: actionResolvers.FindFirstProfileOrThrowResolver,
        profiles: actionResolvers.FindManyProfileResolver,
        profile: actionResolvers.FindUniqueProfileResolver,
        getProfile: actionResolvers.FindUniqueProfileOrThrowResolver,
        groupByProfile: actionResolvers.GroupByProfileResolver,
        updateManyProfile: actionResolvers.UpdateManyProfileResolver,
        updateOneProfile: actionResolvers.UpdateOneProfileResolver,
        upsertOneProfile: actionResolvers.UpsertOneProfileResolver
    },
    Post: {
        aggregatePost: actionResolvers.AggregatePostResolver,
        createManyPost: actionResolvers.CreateManyPostResolver,
        createOnePost: actionResolvers.CreateOnePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        deleteOnePost: actionResolvers.DeleteOnePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        findFirstPostOrThrow: actionResolvers.FindFirstPostOrThrowResolver,
        posts: actionResolvers.FindManyPostResolver,
        post: actionResolvers.FindUniquePostResolver,
        getPost: actionResolvers.FindUniquePostOrThrowResolver,
        groupByPost: actionResolvers.GroupByPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        updateOnePost: actionResolvers.UpdateOnePostResolver,
        upsertOnePost: actionResolvers.UpsertOnePostResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Profile: ["aggregateProfile", "createManyProfile", "createOneProfile", "deleteManyProfile", "deleteOneProfile", "findFirstProfile", "findFirstProfileOrThrow", "profiles", "profile", "getProfile", "groupByProfile", "updateManyProfile", "updateOneProfile", "upsertOneProfile"],
    Post: ["aggregatePost", "createManyPost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "findFirstPostOrThrow", "posts", "post", "getPost", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyProfileArgs: ["data"],
    CreateOneProfileArgs: ["data"],
    DeleteManyProfileArgs: ["where"],
    DeleteOneProfileArgs: ["where"],
    FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstProfileOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueProfileArgs: ["where"],
    FindUniqueProfileOrThrowArgs: ["where"],
    GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyProfileArgs: ["data", "where"],
    UpdateOneProfileArgs: ["data", "where"],
    UpsertOneProfileArgs: ["where", "create", "update"],
    AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyPostArgs: ["data"],
    CreateOnePostArgs: ["data"],
    DeleteManyPostArgs: ["where"],
    DeleteOnePostArgs: ["where"],
    FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstPostOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniquePostArgs: ["where"],
    FindUniquePostOrThrowArgs: ["where"],
    GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyPostArgs: ["data", "where"],
    UpdateOnePostArgs: ["data", "where"],
    UpsertOnePostArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : [],
                ...operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Profile: relationResolvers.ProfileRelationsResolver,
    Post: relationResolvers.PostRelationsResolver
};
const relationResolversInfo = {
    User: ["posts", "profile"],
    Profile: ["user"],
    Post: ["author"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    var _a;
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = (_a = relationResolverActionsConfig._all) !== null && _a !== void 0 ? _a : [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt"],
    Profile: ["id", "bio", "userId"],
    Post: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateProfile: ["_count", "_avg", "_sum", "_min", "_max"],
    ProfileGroupBy: ["id", "bio", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
    PostGroupBy: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["posts"],
    UserCountAggregate: ["id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt"],
    ProfileCountAggregate: ["id", "bio", "userId", "_all"],
    ProfileAvgAggregate: ["id", "userId"],
    ProfileSumAggregate: ["id", "userId"],
    ProfileMinAggregate: ["id", "bio", "userId"],
    ProfileMaxAggregate: ["id", "bio", "userId"],
    PostCountAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_all"],
    PostAvgAggregate: ["id", "authorId"],
    PostSumAggregate: ["id", "authorId"],
    PostMinAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    PostMaxAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "posts", "profile"],
    UserOrderByWithRelationInput: ["id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "posts", "profile"],
    UserWhereUniqueInput: ["id", "username"],
    UserOrderByWithAggregationInput: ["id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt"],
    ProfileWhereInput: ["AND", "OR", "NOT", "id", "bio", "userId", "user"],
    ProfileOrderByWithRelationInput: ["id", "bio", "userId", "user"],
    ProfileWhereUniqueInput: ["id", "userId"],
    ProfileOrderByWithAggregationInput: ["id", "bio", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bio", "userId"],
    PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "author"],
    PostOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "author"],
    PostWhereUniqueInput: ["id"],
    PostOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId", "_count", "_avg", "_max", "_min", "_sum"],
    PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    UserCreateInput: ["username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "posts", "profile"],
    UserUpdateInput: ["username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "posts", "profile"],
    UserCreateManyInput: ["username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt"],
    ProfileCreateInput: ["bio", "user"],
    ProfileUpdateInput: ["bio", "user"],
    ProfileCreateManyInput: ["bio", "userId"],
    ProfileUpdateManyMutationInput: ["bio"],
    PostCreateInput: ["createdAt", "updatedAt", "title", "content", "published", "author"],
    PostUpdateInput: ["createdAt", "updatedAt", "title", "content", "published", "author"],
    PostCreateManyInput: ["createdAt", "updatedAt", "title", "content", "published", "authorId"],
    PostUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "content", "published"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    PostListRelationFilter: ["every", "some", "none"],
    ProfileRelationFilter: ["is", "isNot"],
    PostOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt"],
    UserSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    UserRelationFilter: ["is", "isNot"],
    ProfileCountOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileAvgOrderByAggregateInput: ["id", "userId"],
    ProfileMaxOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileMinOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileSumOrderByAggregateInput: ["id", "userId"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    BoolFilter: ["equals", "not"],
    PostCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    PostAvgOrderByAggregateInput: ["id", "authorId"],
    PostMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    PostMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    PostSumOrderByAggregateInput: ["id", "authorId"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProfileUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutProfileNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    PostCreateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"],
    PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
    PostCreateManyAuthorInputEnvelope: ["data"],
    ProfileCreateWithoutUserInput: ["bio"],
    ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
    PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "authorId"],
    ProfileUpsertWithoutUserInput: ["update", "create"],
    ProfileUpdateWithoutUserInput: ["bio"],
    UserCreateWithoutProfileInput: ["username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "posts"],
    UserCreateOrConnectWithoutProfileInput: ["where", "create"],
    UserUpsertWithoutProfileInput: ["update", "create"],
    UserUpdateWithoutProfileInput: ["username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "posts"],
    UserCreateWithoutPostsInput: ["username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "profile"],
    UserCreateOrConnectWithoutPostsInput: ["where", "create"],
    UserUpsertWithoutPostsInput: ["update", "create"],
    UserUpdateWithoutPostsInput: ["username", "password", "provider", "status", "lastLogin", "createdAt", "updatedAt", "profile"],
    PostCreateManyAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"],
    PostUpdateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
