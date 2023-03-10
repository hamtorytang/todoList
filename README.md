어떤 프레임워크나 라이브러리를 파악하고자할때 투두앱을 작성하는 것이 가장 빠르고 직관적으로 그것의 이해도를 높여준다고 생각된다. 
그 이유는 간단한 기능안에 여러가지 요소를 실험해볼 수 있기때문이다.

스킬스택
> React, TypeScript, PostCSS, LocatStorage

해당 파일은 App.tsx 밑에 크게 3가지 View Component : Header, Main, Footer 로 나뉜다

* App.tsx
  * 투두앱의 목록안의 내용은 기본적으로 로컬스토리지에 배열로 저장된다
  * 위의 내용을 초기에 확인을 하고, 있으면 받아오고 없으면 빈 배열을 만든다
  * 주 변수는
    * filter: 상태의 변화를 정하기위한 용도로 Type : string
    * list: 목록을 저장하기위한 용도로 Type : 설정된 아이템 타입의 배열  
  * 주 기능은
    * addListItem : 아이템을 더한 새로운 배열을 만들어 리턴한다
    * deleteListItem : 목록안의 아이템을 지워서 배열을 새로 리턴한다
    * updateListItem : 이미 있는 아이템을 업데이트하여 새롭게 배열을 리턴한다
  * 기본적으로 위와같은 기능을 Parent 에서 갖고있고, children 에 props 로 전달하여 컨트롤한다

* Header
  * 투두앱의 윗부분을 담당하는 컴포넌트로, 다크모드나 목록의 상태를 전환하는 버튼을 다룬다
  * filter 변수를 set하는 함수를 받아, 적용되는 버튼을 누를때 작동한다

* Main 
  * 다크모드의 적용이나 Header 의 목록의 상태를 전환하는 버튼에 의존하여 그 목록을 렌더링한다
  * Header 에서의 filter 설정에따라 재렌더링되어, 알맞은 목록을 보여준다
  * 목록안의 각각의 내용안에 체크박스 설정을 넣어, 체크가 작동시의 설정을 해준다
    * update & 체크시의 체크마크 보이게 설정 

* Footer
  * 투두앱의 목록을 생성하는 곳으로 글자를 입력하는 부분과 해당 내용을 목록에 추가하는 버튼으로 나뉜다
    * 글자입력부분 : 쓰여진 글자가 초기 설정한 content 변수로 sync 되게하고 새롭게 만들어진 key갑을 할당한다
    * 추가하는 버튼: 글자입력부분에서 쓰여진 텍스트를 부모로부터 받은 addListItem 을 이용하여 더해주고, conent 변수를 초기화시켜준다
