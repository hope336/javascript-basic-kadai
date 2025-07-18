// ボタン要素を取得
const button = document.getElementById("btn");

// テキスト表示部分を取得
const text = document.getElementById("text");

// ボタンがクリックされたときの処理
button.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました";
});
