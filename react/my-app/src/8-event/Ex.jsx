import React, { useState } from "react";
//연습문제1: 마우스 오버와 마우스 아웃 이벤트
// 목표: onMouseEnter와 onMouseLeave 이벤트를 사용하여
//  마우스가 특정 영역에 들어오거나 나갈 때 상태를 변경하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 마우스가 박스 위에 올라가면 배경색이 변경됩니다.
// 마우스가 박스를 벗어나면 원래 배경색으로 돌아옵니다.
// 상태로 관리되는 메시지를 화면에 출력하세요. (예: "마우스가 들어왔습니다", "마우스가 나갔습니다")

export function ChangeColor() {
  const [color, setColor] = useState("blue");
  const [message, setMessage] = useState("");
  const handleMouseEnter = () => {
    setMessage("마우스가 들어왔습니다.");
    setColor("red");
  };
  const handleMouseLeave = () => {
    setMessage("마우스가 나갔습니다.");
    setColor("blue");
  };
  return (
    <div>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <p>{message}</p>
    </div>
  );
}

//연습문제2: 폼 제출 이벤트 처리하기
// 목표: onSubmit 이벤트를 통해 폼 제출을 처리하고 기본 동작을 방지하는 방법
//요구사항 - 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자 이름과 나이를 입력하는 폼을 만드세요.
// 2.폼이 제출되면 입력값을 콘솔에 출력하고 입력 필드를 비웁니다.
// 3.기본 폼 제출 동작을 방지하세요 (e.preventDefault() 사용).
export function FormSubmit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          placeholder="나이를 입력하세요"
        />
        <br />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

// 연습문제 3: 입력 필드에서 글자 수 제한하기
// 목표: 입력 필드의 입력값을 상태로 관리하고 글자 수 제한하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자가 텍스트를 입력할 수 있는 입력 필드가 있습니다.
// 2.입력값은 최대 10자까지만 허용됩니다.
// 3.입력값의 길이에 따라 남은 글자 수를 화면에 표시하세요.
export function LimitWord() {
  const [data, setData] = useState("");
  const maxLength = 10;

  const handleChange = (e) => {
    if (e.target.value <= maxLength) {
      setData(e.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="텍스트를 입력하세요"
      />
      <h3>
        텍스트 : {data} 남은 글자 수: {maxLength - data.length}
      </h3>
    </div>
  );
}
