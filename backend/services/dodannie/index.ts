import { prisma } from './generated/prisma-client'
import datamodelInfo from './generated/nexus-prisma'
import * as path from 'path'
import { stringArg, objectType } from 'nexus'
import { prismaObjectType, makePrismaSchema } from 'nexus-prisma'
import { GraphQLServer } from 'graphql-yoga'

const Logged = objectType({
  name: 'Logged',
  definition: t => {
    t.boolean('success', {
      description: '登录成功'
    })
    t.string('error', {
      description: '登录失败原因'
    })
  }
})

const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['*'])
  }
})

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['*'])
    t.field('Login', {
      type: 'Logged',
      args: {
        userName: stringArg({ nullable: false }),
        password: stringArg({ nullable: false })
      },
      resolve: async (parent, { userName, password }, ctx) => {
        console.log(userName, password)
        const data = await ctx.prisma.users({
          where: { userName: userName, password: password }
        })
        console.log(data, 'data')
        if (data.length !== 0) {
          return {
            success: true,
            error: 'success'
          }
        } else {
          return {
            success: false,
            error: '用户名或密码错误'
          }
        }
      }
    })
  }
})

const schema = makePrismaSchema({
  types: [Query, Mutation, Logged],

  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts')
  }
})

const server = new GraphQLServer({
  schema,
  context: { prisma }
})
server.start(() => console.log('Server is running on http://localhost:4000'))
