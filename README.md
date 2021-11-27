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

## 공부한 자료 & 강의

- [mongoDB 기초부터 실무까지(feat. Node.js)](https://www.inflearn.com/course/%EB%AA%BD%EA%B3%A0%EB%94%94%EB%B9%84-%EA%B8%B0%EC%B4%88-%EC%8B%A4%EB%AC%B4/dashboard)

- [따라하며 배우는 노드, 리액트 시리즈 - 기본 강의](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8/dashboard)

#### test
