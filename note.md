### 创建资源

```
nest g res config --no-spec
```

### prisma 初始化数据库

```
npx prisma migrate dev
```

### prisma 初始化数据

```json
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  },
```

```
npx prisma db seed
```
