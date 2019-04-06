// Code generated by Prisma (prisma@1.30.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
  vip: (where?: VipWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  vip: (where: VipWhereUniqueInput) => VipPromise;
  vips: (
    args?: {
      where?: VipWhereInput;
      orderBy?: VipOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Vip>;
  vipsConnection: (
    args?: {
      where?: VipWhereInput;
      orderBy?: VipOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => VipConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createVip: (data: VipCreateInput) => VipPromise;
  updateVip: (
    args: { data: VipUpdateInput; where: VipWhereUniqueInput }
  ) => VipPromise;
  updateManyVips: (
    args: { data: VipUpdateManyMutationInput; where?: VipWhereInput }
  ) => BatchPayloadPromise;
  upsertVip: (
    args: {
      where: VipWhereUniqueInput;
      create: VipCreateInput;
      update: VipUpdateInput;
    }
  ) => VipPromise;
  deleteVip: (where: VipWhereUniqueInput) => VipPromise;
  deleteManyVips: (where?: VipWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  vip: (
    where?: VipSubscriptionWhereInput
  ) => VipSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "userName_ASC"
  | "userName_DESC"
  | "realName_ASC"
  | "realName_DESC"
  | "password_ASC"
  | "password_DESC"
  | "isVip_ASC"
  | "isVip_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type VipOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "level_ASC"
  | "level_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface VipCreateWithoutOwnerInput {
  level?: Int;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  userName?: String;
}>;

export interface VipUpdateInput {
  level?: Int;
  owner?: UserUpdateOneWithoutVipInput;
}

export interface VipUpsertWithoutOwnerInput {
  update: VipUpdateWithoutOwnerDataInput;
  create: VipCreateWithoutOwnerInput;
}

export interface UserCreateWithoutVipInput {
  userName: String;
  realName: String;
  password: String;
  isVip?: Boolean;
}

export interface VipUpdateWithoutOwnerDataInput {
  level?: Int;
}

export interface UserCreateOneWithoutVipInput {
  create?: UserCreateWithoutVipInput;
  connect?: UserWhereUniqueInput;
}

export interface VipWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  level?: Int;
  level_not?: Int;
  level_in?: Int[] | Int;
  level_not_in?: Int[] | Int;
  level_lt?: Int;
  level_lte?: Int;
  level_gt?: Int;
  level_gte?: Int;
  owner?: UserWhereInput;
  AND?: VipWhereInput[] | VipWhereInput;
  OR?: VipWhereInput[] | VipWhereInput;
  NOT?: VipWhereInput[] | VipWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserUpsertWithoutVipInput {
  update: UserUpdateWithoutVipDataInput;
  create: UserCreateWithoutVipInput;
}

export interface UserCreateInput {
  userName: String;
  realName: String;
  password: String;
  isVip?: Boolean;
  vip?: VipCreateOneWithoutOwnerInput;
}

export type VipWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface VipCreateOneWithoutOwnerInput {
  create?: VipCreateWithoutOwnerInput;
  connect?: VipWhereUniqueInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  userName?: String;
  userName_not?: String;
  userName_in?: String[] | String;
  userName_not_in?: String[] | String;
  userName_lt?: String;
  userName_lte?: String;
  userName_gt?: String;
  userName_gte?: String;
  userName_contains?: String;
  userName_not_contains?: String;
  userName_starts_with?: String;
  userName_not_starts_with?: String;
  userName_ends_with?: String;
  userName_not_ends_with?: String;
  realName?: String;
  realName_not?: String;
  realName_in?: String[] | String;
  realName_not_in?: String[] | String;
  realName_lt?: String;
  realName_lte?: String;
  realName_gt?: String;
  realName_gte?: String;
  realName_contains?: String;
  realName_not_contains?: String;
  realName_starts_with?: String;
  realName_not_starts_with?: String;
  realName_ends_with?: String;
  realName_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  isVip?: Boolean;
  isVip_not?: Boolean;
  vip?: VipWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface UserUpdateManyMutationInput {
  userName?: String;
  realName?: String;
  password?: String;
  isVip?: Boolean;
}

export interface VipUpdateOneWithoutOwnerInput {
  create?: VipCreateWithoutOwnerInput;
  update?: VipUpdateWithoutOwnerDataInput;
  upsert?: VipUpsertWithoutOwnerInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: VipWhereUniqueInput;
}

export interface UserUpdateInput {
  userName?: String;
  realName?: String;
  password?: String;
  isVip?: Boolean;
  vip?: VipUpdateOneWithoutOwnerInput;
}

export interface VipCreateInput {
  level?: Int;
  owner?: UserCreateOneWithoutVipInput;
}

export interface VipSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: VipWhereInput;
  AND?: VipSubscriptionWhereInput[] | VipSubscriptionWhereInput;
  OR?: VipSubscriptionWhereInput[] | VipSubscriptionWhereInput;
  NOT?: VipSubscriptionWhereInput[] | VipSubscriptionWhereInput;
}

export interface UserUpdateOneWithoutVipInput {
  create?: UserCreateWithoutVipInput;
  update?: UserUpdateWithoutVipDataInput;
  upsert?: UserUpsertWithoutVipInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutVipDataInput {
  userName?: String;
  realName?: String;
  password?: String;
  isVip?: Boolean;
}

export interface VipUpdateManyMutationInput {
  level?: Int;
}

export interface NodeNode {
  id: ID_Output;
}

export interface VipPreviousValues {
  id: ID_Output;
  level?: Int;
}

export interface VipPreviousValuesPromise
  extends Promise<VipPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  level: () => Promise<Int>;
}

export interface VipPreviousValuesSubscription
  extends Promise<AsyncIterator<VipPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  level: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Vip {
  id: ID_Output;
  level?: Int;
}

export interface VipPromise extends Promise<Vip>, Fragmentable {
  id: () => Promise<ID_Output>;
  level: () => Promise<Int>;
  owner: <T = UserPromise>() => T;
}

export interface VipSubscription
  extends Promise<AsyncIterator<Vip>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  level: () => Promise<AsyncIterator<Int>>;
  owner: <T = UserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  userName: String;
  realName: String;
  password: String;
  isVip: Boolean;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  userName: () => Promise<String>;
  realName: () => Promise<String>;
  password: () => Promise<String>;
  isVip: () => Promise<Boolean>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  userName: () => Promise<AsyncIterator<String>>;
  realName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  isVip: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface VipSubscriptionPayload {
  mutation: MutationType;
  node: Vip;
  updatedFields: String[];
  previousValues: VipPreviousValues;
}

export interface VipSubscriptionPayloadPromise
  extends Promise<VipSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = VipPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = VipPreviousValuesPromise>() => T;
}

export interface VipSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<VipSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = VipSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = VipPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateVip {
  count: Int;
}

export interface AggregateVipPromise
  extends Promise<AggregateVip>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateVipSubscription
  extends Promise<AsyncIterator<AggregateVip>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  userName: String;
  realName: String;
  password: String;
  isVip: Boolean;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  userName: () => Promise<String>;
  realName: () => Promise<String>;
  password: () => Promise<String>;
  isVip: () => Promise<Boolean>;
  vip: <T = VipPromise>() => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  userName: () => Promise<AsyncIterator<String>>;
  realName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  isVip: () => Promise<AsyncIterator<Boolean>>;
  vip: <T = VipSubscription>() => T;
}

export interface VipConnection {
  pageInfo: PageInfo;
  edges: VipEdge[];
}

export interface VipConnectionPromise
  extends Promise<VipConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<VipEdge>>() => T;
  aggregate: <T = AggregateVipPromise>() => T;
}

export interface VipConnectionSubscription
  extends Promise<AsyncIterator<VipConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<VipEdgeSubscription>>>() => T;
  aggregate: <T = AggregateVipSubscription>() => T;
}

export interface VipEdge {
  node: Vip;
  cursor: String;
}

export interface VipEdgePromise extends Promise<VipEdge>, Fragmentable {
  node: <T = VipPromise>() => T;
  cursor: () => Promise<String>;
}

export interface VipEdgeSubscription
  extends Promise<AsyncIterator<VipEdge>>,
    Fragmentable {
  node: <T = VipSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vip",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();