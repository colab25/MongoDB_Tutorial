### Creating a simple REST API with MongoDB & Express

```
Create <-> POST
Read <-> GET
Update <-> PUT
Delete <-> Delete
```

### CORS

- 보안을 돕기 위한 것
- 우리가 설정하지 않은 외부 도메인에서 오는 요청을 막고 싶을 때 사용

### JSON.parse (express.json())

- JSON으로 온 형식을 parsing 해서 우리가 자바스크립토 사용할 수 있게 도와줌

### dev.js

- 비밀번호 설정 & 정보 관리하기 위해 생성

```
module.exports = {
  MONGO_URI:
    'mongodb+srv://plu457:<password>@mongodbtutorial.dvchj.mongodb.net/BlogService?retryWrites=true&w=majority',
};
```
