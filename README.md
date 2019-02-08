# kick-off-koa 문제 풀기(10문제)

[kick-off-koa 링크](https://github.com/koajs/kick-off-koa)
링크내용 에서는 global 설치하라고 했으나 그러지 않고 로컬 설치후 package.json에 script 네임스페이스로 사용

## 목록 보기
```bash
$ npm run start
```
1-10번까지 선택하면 물어야할 문제 설명이 프린트 되고 종료된다.

## 문제 풀기
program.js에 소스를 올리고
```bash
$ npm run verify
```
프로그램 실행 후 응답 체크해서(http 요청 후 응답) 맞으면 목록 보기에서 [complete]로 표시되고 틀리면 단위 테스트 결과 처럼 diff를 보여준다

## 풀어놓은 문제 백업
풀어놓은것을 기록해놓고 다음에 참고하기 위해 program-{1-10}.js로 복사를 해놓았다
문제 풀기로 다시 돌려보려면 목록보기에서 해당 문제를 선택하고 문제 설명이 프린트되면 program.js로 파일을 변경해서 문제풀기로 돌려보면된다.
(package.json에 script를 추가해도 좋다)

