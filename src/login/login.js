document.addEventListener("DOMContentLoaded", function () {
    const autoLoginCheckbox = document.getElementById("autoLoginCheckbox");
    autoLoginCheckbox.addEventListener("click", function () {
        this.classList.toggle("checked");
    });

    const loginButton = document.querySelector(".login-button");
    loginButton.addEventListener("click", function () {
        const username = document.querySelector("input[placeholder='아이디']").value.trim();
        const password = document.querySelector("input[placeholder='비밀번호']").value.trim();

        if (username === "" || password === "") {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }

        alert("로그인 성공!"); 
    });
});