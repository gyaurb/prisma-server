"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = exports.UserResolver = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
const type_graphql_1 = require("type-graphql");
const express_graphql_1 = require("express-graphql");
const type_graphql_2 = require("../prisma/type-graphql");
dotenv_1.default.config();
const port = process.env.SERVER_PORT || 3000;
const prisma = new client_1.PrismaClient();
let UserResolver = class UserResolver {
    allUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.user.findMany();
        });
    }
    user(username, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield prisma.user.findMany({
                where: {
                    username: {
                        contains: username
                    },
                    status: status
                },
            });
            console.log("users", users);
            return users;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.User], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "allUser", null);
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.User], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("username", { nullable: false })),
    __param(1, (0, type_graphql_1.Arg)("status", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(type_graphql_2.User)
], UserResolver);
exports.UserResolver = UserResolver;
let PostResolver = class PostResolver {
    post(authorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield prisma.post.findFirst({
                where: {
                    authorId: authorId
                },
                include: {
                    author: true
                }
            });
            console.log("post", post);
            return post;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_2.Post, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("authorId", { nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "post", null);
PostResolver = __decorate([
    (0, type_graphql_1.Resolver)(type_graphql_2.Post)
], PostResolver);
exports.PostResolver = PostResolver;
const schema = (0, type_graphql_1.buildSchemaSync)({
    resolvers: [UserResolver, PostResolver]
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema,
    graphiql: true,
}));
//app.use('/user', userRoutes)
//app.use('/login', authRoute)
//app.use('/post', authMiddleware, postRoutes)
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});
